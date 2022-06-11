import {
    CalculatedWeaponStats,
    SlimWeaponStatData,
    AttackElementCorrectParam,
    Attr,
    Dmg,
    AttrMap,
    DmgAttrMap,
    DmgMap,
} from "@types"

import {
    multiply,
    calcCorrect,
    InitialValues,
} from "@lib"

export interface WeaponStatsCalculatorOptions {
    attributes: AttrMap<Integer>
    slimData: SlimWeaponStatData
    adjustmentParams: AttackElementCorrectParam
    requirements: AttrMap<Integer>
}

// https://www.reddit.com/r/Eldenring/comments/tbco46/comment/i0e7xg7/?utm_source=share&utm_medium=web2x&context=3
export class WeaponStatsCalculator {

    private slimData: SlimWeaponStatData
    private adjustmentParams: AttackElementCorrectParam
    private attributes: AttrMap<Integer>
    private requirements: AttrMap<Integer>

    private attr_requirementsMet: AttrMap<boolean>
    private dmg_requirementsMet: DmgMap<boolean>
    private dmg_scalesOn_attr: DmgAttrMap<boolean>
    private dmg_attr_requirementMet: DmgAttrMap<boolean>
    private dmg_attr_calcCorrect: DmgAttrMap<Decimal>
    private dmg_attr_damage: DmgAttrMap<Decimal>

    public stats: CalculatedWeaponStats

    constructor(options: WeaponStatsCalculatorOptions) {
        this.attributes       = options.attributes
        this.slimData         = options.slimData
        this.adjustmentParams = options.adjustmentParams
        this.requirements     = options.requirements

        this.stats                = InitialValues.stats()
        this.dmg_attr_damage      = InitialValues.dmg_attr_damage()
        this.dmg_attr_calcCorrect = InitialValues.dmg_attr_calcCorrect()
        this.dmg_requirementsMet  = InitialValues.dmg_requirementsMet()
    }

    public calculate(): void {
        this.set_attr_requirementsMet()
        this.set_dmg_scalesOn_attr()
        this.set_dmg_attr_requirementMet()
        this.set_dmg_attr_calcCorrect()
        this.set_dmg_requirementsMet()
        this.set_dmg_attr_damage()
        return null
    }

    private set_attr_requirementsMet(): void {
        this.attr_requirementsMet = {
            strength:     this.attributes.strength     >= this.requirements.strength,
            dexterity:    this.attributes.dexterity    >= this.requirements.dexterity,
            intelligence: this.attributes.intelligence >= this.requirements.intelligence,
            faith:        this.attributes.faith        >= this.requirements.faith,
            arcane:       this.attributes.arcane       >= this.requirements.arcane,
        }
    }

    private set_dmg_scalesOn_attr(): void {
        this.dmg_scalesOn_attr = this.damageTypeScalesOnAttribute(this.adjustmentParams)
    }

    private set_dmg_attr_requirementMet(): void {
        this.dmg_attr_requirementMet = this.damageTypeAttributeRequirementMet(this.attr_requirementsMet)
    }

    private set_dmg_attr_calcCorrect(): void {
        for (const dmg in Object.values(Dmg)) {
            for (const attr in Object.values(Attr)) {
                if (!this.dmg_scalesOn_attr[dmg][attr]) {
                    this.dmg_attr_calcCorrect[dmg][attr] = 0
                }
                const level         = this.attributes[attr]
                const calcCorrectId = this.slimData.calc_correct[dmg]
                this.dmg_attr_calcCorrect[dmg][attr] = calcCorrect(level, calcCorrectId)
            }
        }
    }

    private set_dmg_requirementsMet(): void {
        for (const [key, value] of Object.entries(this.dmg_attr_requirementMet)) {
            this.dmg_requirementsMet[key] = Object.values(value).every(x => x == true)
        }
    }

    private set_dmg_attr_damage(): void {
        for (const dmg in Object.values(Dmg)) {
            for (const attr in Object.values(Attr)) {
                const calcCorrect = this.dmg_attr_calcCorrect?.[dmg]?.[attr] ?? 0
                if (calcCorrect > 0) {
                    const base = this.slimData.attack[dmg]
                    const scaling = this.slimData.scaling[dmg]
                    const damage = multiply([
                        base,
                        scaling,
                        (calcCorrect / 100),
                    ])
                    this.dmg_attr_damage[dmg][attr] = damage
                } else {
                    this.dmg_attr_damage[dmg][attr] = 0
                }
            }
        }
    }

    private damageTypeScalesOnAttribute(adjustmentParam: AttackElementCorrectParam): DmgAttrMap<boolean> {
        return {
            [Dmg.physical]: {
                [Attr.strength]:     adjustmentParam.isStrengthCorrect_byPhysics,
                [Attr.dexterity]:    adjustmentParam.isDexterityCorrect_byPhysics,
                [Attr.intelligence]: adjustmentParam.isMagicCorrect_byPhysics,
                [Attr.faith]:        adjustmentParam.isFaithCorrect_byPhysics,
                [Attr.arcane]:       adjustmentParam.isLuckCorrect_byPhysics,
            },
            [Dmg.magic]: {
                [Attr.strength]:     adjustmentParam.isStrengthCorrect_byMagic,
                [Attr.dexterity]:    adjustmentParam.isDexterityCorrect_byMagic,
                [Attr.intelligence]: adjustmentParam.isMagicCorrect_byMagic,
                [Attr.faith]:        adjustmentParam.isFaithCorrect_byMagic,
                [Attr.arcane]:       adjustmentParam.isLuckCorrect_byMagic,
            },
            [Dmg.fire]: {
                [Attr.strength]:     adjustmentParam.isStrengthCorrect_byFire,
                [Attr.dexterity]:    adjustmentParam.isDexterityCorrect_byFire,
                [Attr.intelligence]: adjustmentParam.isMagicCorrect_byFire,
                [Attr.faith]:        adjustmentParam.isFaithCorrect_byFire,
                [Attr.arcane]:       adjustmentParam.isLuckCorrect_byFire,
            },
            [Dmg.lightning]: {
                [Attr.strength]:     adjustmentParam.isStrengthCorrect_byThunder,
                [Attr.dexterity]:    adjustmentParam.isDexterityCorrect_byThunder,
                [Attr.intelligence]: adjustmentParam.isMagicCorrect_byThunder,
                [Attr.faith]:        adjustmentParam.isFaithCorrect_byThunder,
                [Attr.arcane]:       adjustmentParam.isLuckCorrect_byThunder,
            },
            [Dmg.holy]: {
                [Attr.strength]:     adjustmentParam.isStrengthCorrect_byDark,
                [Attr.dexterity]:    adjustmentParam.isDexterityCorrect_byDark,
                [Attr.intelligence]: adjustmentParam.isMagicCorrect_byDark,
                [Attr.faith]:        adjustmentParam.isFaithCorrect_byDark,
                [Attr.arcane]:       adjustmentParam.isLuckCorrect_byDark,
            },
        }
    }

    private damageTypeAttributeRequirementMet(attrMet: AttrMap<boolean>): DmgAttrMap<boolean> {
        return {
            [Dmg.physical]: {
                [Attr.strength]:     this.dmg_scalesOn_attr.physical.strength      && attrMet.strength,
                [Attr.dexterity]:    this.dmg_scalesOn_attr.physical.dexterity     && attrMet.dexterity,
                [Attr.intelligence]: this.dmg_scalesOn_attr.physical.intelligence  && attrMet.intelligence,
                [Attr.faith]:        this.dmg_scalesOn_attr.physical.faith         && attrMet.faith,
                [Attr.arcane]:       this.dmg_scalesOn_attr.physical.arcane        && attrMet.arcane,
            },
            [Dmg.magic]: {
                [Attr.strength]:     this.dmg_scalesOn_attr.magic.strength         && attrMet.strength,
                [Attr.dexterity]:    this.dmg_scalesOn_attr.magic.dexterity        && attrMet.dexterity,
                [Attr.intelligence]: this.dmg_scalesOn_attr.magic.intelligence     && attrMet.intelligence,
                [Attr.faith]:        this.dmg_scalesOn_attr.magic.faith            && attrMet.faith,
                [Attr.arcane]:       this.dmg_scalesOn_attr.magic.arcane           && attrMet.arcane,
            },
            [Dmg.fire]: {
                [Attr.strength]:     this.dmg_scalesOn_attr.lightning.strength     && attrMet.strength,
                [Attr.dexterity]:    this.dmg_scalesOn_attr.lightning.dexterity    && attrMet.dexterity,
                [Attr.intelligence]: this.dmg_scalesOn_attr.lightning.intelligence && attrMet.intelligence,
                [Attr.faith]:        this.dmg_scalesOn_attr.lightning.faith        && attrMet.faith,
                [Attr.arcane]:       this.dmg_scalesOn_attr.lightning.arcane       && attrMet.arcane,
            },
            [Dmg.lightning]: {
                [Attr.strength]:     this.dmg_scalesOn_attr.holy.strength          && attrMet.strength,
                [Attr.dexterity]:    this.dmg_scalesOn_attr.holy.dexterity         && attrMet.dexterity,
                [Attr.intelligence]: this.dmg_scalesOn_attr.holy.intelligence      && attrMet.intelligence,
                [Attr.faith]:        this.dmg_scalesOn_attr.holy.faith             && attrMet.faith,
                [Attr.arcane]:       this.dmg_scalesOn_attr.holy.arcane            && attrMet.arcane,
            },
            [Dmg.holy]: {
                [Attr.strength]:     this.dmg_scalesOn_attr.fire.strength          && attrMet.strength,
                [Attr.dexterity]:    this.dmg_scalesOn_attr.fire.dexterity         && attrMet.dexterity,
                [Attr.intelligence]: this.dmg_scalesOn_attr.fire.intelligence      && attrMet.intelligence,
                [Attr.faith]:        this.dmg_scalesOn_attr.fire.faith             && attrMet.faith,
                [Attr.arcane]:       this.dmg_scalesOn_attr.fire.arcane            && attrMet.arcane,
            },
        }
    }

}
