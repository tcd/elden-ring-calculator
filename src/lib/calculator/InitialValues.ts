import {
    Attr,
    CalculatedWeaponStats,
    Dmg,
    DmgAttrMap,
    DmgMap,
} from "@types"

export class InitialValues {

    public static stats(): CalculatedWeaponStats {
        return {
            attack: {
                base: {},
                scaled: {},
                total: {},
            },
            defense: {},
            scaling: {},
        } as CalculatedWeaponStats
    }

    public static dmg_requirementsMet(): DmgMap<boolean> {
        return {
            physical:  false,
            magic:     false,
            fire:      false,
            lightning: false,
            holy:      false,
        }
    }

    public static dmg_attr_damage(): DmgAttrMap<Decimal> {
        return {
            [Dmg.physical]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.magic]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.fire]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.lightning]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.holy]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
        }
    }

    public static dmg_attr_calcCorrect(): DmgAttrMap<Decimal> {
        return {
            [Dmg.physical]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.magic]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.fire]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.lightning]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.holy]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
        }
    }

}
