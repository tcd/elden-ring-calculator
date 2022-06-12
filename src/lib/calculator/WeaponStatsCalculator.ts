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

export interface ICalculations {
    attr_requirementsMet: AttrMap<boolean>
    dmg_requirementsMet: DmgMap<boolean>
    dmg_scalesOn_attr: DmgAttrMap<boolean>
    dmg_attr_requirementMet: DmgAttrMap<boolean>
    dmg_attr_calcCorrect: DmgAttrMap<Decimal>
    dmg_attr_damage: DmgAttrMap<Decimal>
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
        this.attr_requirementsMet    = attributeRequirementsMet(this.attributes, this.requirements)
        this.dmg_scalesOn_attr       = damageTypeScalesOnAttribute(this.adjustmentParams)
        this.dmg_attr_requirementMet = damageTypeAttributeRequirementsMet(this.attr_requirementsMet, this.dmg_scalesOn_attr)
        this.set_dmg_attr_calcCorrect()
        this.set_dmg_requirementsMet()
        this.set_dmg_attr_damage()
        return null
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

}

export const attributeRequirementsMet = (attributes: AttrMap<Integer>, requirements: AttrMap<Integer>): AttrMap<boolean> => {
    // return Object.values(Attr).reduce((result, attr) => {
    //     result[attr] = attributes[attr] >= requirements[attr]
    //     return result
    // }, {} as AttrMap<boolean>)
    // return Object.values(Attr).reduce((result, attr) => ({
    //     ...result,
    //     [attr]: (attributes[attr] >= requirements[attr]),
    // }), {} as AttrMap<boolean>)
    return {
        strength:     attributes.strength     >= requirements.strength,
        dexterity:    attributes.dexterity    >= requirements.dexterity,
        intelligence: attributes.intelligence >= requirements.intelligence,
        faith:        attributes.faith        >= requirements.faith,
        arcane:       attributes.arcane       >= requirements.arcane,
    }
}

export const damageTypeScalesOnAttribute = (adjustmentParam: AttackElementCorrectParam): DmgAttrMap<boolean> => {
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

export const damageTypeAttributeRequirementsMet = (attrMet: AttrMap<boolean>, scalesOn: DmgAttrMap<boolean>): DmgAttrMap<boolean> => {
    return Object.values(Dmg).reduce((dmgResult, dmg) => ({
        ...dmgResult,
        [dmg]: Object.values(Attr).reduce((attrResult, attr) => ({
            ...attrResult,
            [attr]: (scalesOn[dmg][attr] == true && attrMet[attr] == false) ? false : true,
        }), {} as AttrMap<boolean>),
    }), {} as DmgAttrMap<boolean>)
    return {
        [Dmg.physical]: {
            [Attr.strength]:     ((scalesOn.physical.strength     && !attrMet.strength)     ? false : true),
            [Attr.dexterity]:    ((scalesOn.physical.dexterity    && !attrMet.dexterity)    ? false : true),
            [Attr.intelligence]: ((scalesOn.physical.intelligence && !attrMet.intelligence) ? false : true),
            [Attr.faith]:        ((scalesOn.physical.faith        && !attrMet.faith)        ? false : true),
            [Attr.arcane]:       ((scalesOn.physical.arcane       && !attrMet.arcane)       ? false : true),
        },
        [Dmg.magic]: {
            [Attr.strength]:     ((scalesOn.magic.strength     && !attrMet.strength)     ? false : true),
            [Attr.dexterity]:    ((scalesOn.magic.dexterity    && !attrMet.dexterity)    ? false : true),
            [Attr.intelligence]: ((scalesOn.magic.intelligence && !attrMet.intelligence) ? false : true),
            [Attr.faith]:        ((scalesOn.magic.faith        && !attrMet.faith)        ? false : true),
            [Attr.arcane]:       ((scalesOn.magic.arcane       && !attrMet.arcane)       ? false : true),
        },
        [Dmg.fire]: {
            [Attr.strength]:     ((scalesOn.fire.strength     && !attrMet.strength)     ? false : true),
            [Attr.dexterity]:    ((scalesOn.fire.dexterity    && !attrMet.dexterity)    ? false : true),
            [Attr.intelligence]: ((scalesOn.fire.intelligence && !attrMet.intelligence) ? false : true),
            [Attr.faith]:        ((scalesOn.fire.faith        && !attrMet.faith)        ? false : true),
            [Attr.arcane]:       ((scalesOn.fire.arcane       && !attrMet.arcane)       ? false : true),
        },
        [Dmg.lightning]: {
            [Attr.strength]:     ((scalesOn.lightning.strength     && !attrMet.strength)     ? false : true),
            [Attr.dexterity]:    ((scalesOn.lightning.dexterity    && !attrMet.dexterity)    ? false : true),
            [Attr.intelligence]: ((scalesOn.lightning.intelligence && !attrMet.intelligence) ? false : true),
            [Attr.faith]:        ((scalesOn.lightning.faith        && !attrMet.faith)        ? false : true),
            [Attr.arcane]:       ((scalesOn.lightning.arcane       && !attrMet.arcane)       ? false : true),
        },
        [Dmg.holy]: {
            [Attr.strength]:     ((scalesOn.holy.strength     && !attrMet.strength)     ? false : true),
            [Attr.dexterity]:    ((scalesOn.holy.dexterity    && !attrMet.dexterity)    ? false : true),
            [Attr.intelligence]: ((scalesOn.holy.intelligence && !attrMet.intelligence) ? false : true),
            [Attr.faith]:        ((scalesOn.holy.faith        && !attrMet.faith)        ? false : true),
            [Attr.arcane]:       ((scalesOn.holy.arcane       && !attrMet.arcane)       ? false : true),
        },
    }
}
