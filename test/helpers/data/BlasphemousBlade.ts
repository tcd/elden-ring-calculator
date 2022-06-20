import {
    Decimal, ScalingTier,
} from "@types"
import {
    buildDmgAttrMap,
    buildAttrMap,
    buildDmgMap,
} from "@lib"
import { TestWeapon } from "."

export const BlasphemousBlade: TestWeapon = {
    options: {
        attributes: {
            strength:     30,
            dexterity:    30,
            intelligence: 30,
            faith:        30,
            arcane:       30,
        },
        requirements: {
            strength:     22,
            dexterity:    15,
            intelligence:  0,
            faith:        21,
            arcane:        0,
        },
        slimData: {
            attack: {
                physical:  296.45,
                magic:       0.00,
                fire:      191.10,
                lightning:   0.00,
                holy:        0.00,
                // critical:  number
                // stamina:  number
            },
            scaling: {
                strength:     0.63,
                dexterity:    0.63,
                intelligence: 0.00,
                faith:        0.90,
                arcane:       0.00,

            },
            calc_correct: {
                physical:  0,
                magic:     0,
                fire:      4,
                lightning: 0,
                holy:      0,
            },
            passive: {
                scarlet_rot: 0,
                madness:     0,
                sleep:       0,
                frost:       0,
                poison:      0,
                blood_loss:  0,
            },
            attack_element_correct_param_id: 10_000,
        },
        adjustmentParams: {
            isStrengthCorrect_byPhysics:  true,
            isDexterityCorrect_byPhysics: true,
            isMagicCorrect_byPhysics:     false,
            isFaithCorrect_byPhysics:     false,
            isLuckCorrect_byPhysics:      false,
            isStrengthCorrect_byMagic:    false,
            isDexterityCorrect_byMagic:   false,
            isMagicCorrect_byMagic:       true,
            isFaithCorrect_byMagic:       false,
            isLuckCorrect_byMagic:        false,
            isStrengthCorrect_byFire:     false,
            isDexterityCorrect_byFire:    false,
            isMagicCorrect_byFire:        false,
            isFaithCorrect_byFire:        true,
            isLuckCorrect_byFire:         false,
            isStrengthCorrect_byThunder:  false,
            isDexterityCorrect_byThunder: true,
            isMagicCorrect_byThunder:     false,
            isFaithCorrect_byThunder:     false,
            isLuckCorrect_byThunder:      false,
            isStrengthCorrect_byDark:     false,
            isDexterityCorrect_byDark:    false,
            isMagicCorrect_byDark:        false,
            isFaithCorrect_byDark:        true,
            isLuckCorrect_byDark:         false,

            overwriteStrengthCorrectRate_byPhysics:  -1,
            overwriteDexterityCorrectRate_byPhysics: -1,
            overwriteMagicCorrectRate_byPhysics:     -1,
            overwriteFaithCorrectRate_byPhysics:     -1,
            overwriteLuckCorrectRate_byPhysics:      -1,
            overwriteStrengthCorrectRate_byMagic:    -1,
            overwriteDexterityCorrectRate_byMagic:   -1,
            overwriteMagicCorrectRate_byMagic:       -1,
            overwriteFaithCorrectRate_byMagic:       -1,
            overwriteLuckCorrectRate_byMagic:        -1,
            overwriteStrengthCorrectRate_byFire:     -1,
            overwriteDexterityCorrectRate_byFire:    -1,
            overwriteMagicCorrectRate_byFire:        -1,
            overwriteFaithCorrectRate_byFire:        -1,
            overwriteLuckCorrectRate_byFire:         -1,
            overwriteStrengthCorrectRate_byThunder:  -1,
            overwriteDexterityCorrectRate_byThunder: -1,
            overwriteMagicCorrectRate_byThunder:     -1,
            overwriteFaithCorrectRate_byThunder:     -1,
            overwriteLuckCorrectRate_byThunder:      -1,
            overwriteStrengthCorrectRate_byDark:     -1,
            overwriteDexterityCorrectRate_byDark:    -1,
            overwriteMagicCorrectRate_byDark:        -1,
            overwriteFaithCorrectRate_byDark:        -1,
            overwriteLuckCorrectRate_byDark:         -1,

            InfluenceStrengthCorrectRate_byPhysics:  100,
            InfluenceDexterityCorrectRate_byPhysics: 100,
            InfluenceMagicCorrectRate_byPhysics:     100,
            InfluenceFaithCorrectRate_byPhysics:     100,
            InfluenceLuckCorrectRate_byPhysics:      100,
            InfluenceStrengthCorrectRate_byMagic:    100,
            InfluenceDexterityCorrectRate_byMagic:   100,
            InfluenceMagicCorrectRate_byMagic:       100,
            InfluenceFaithCorrectRate_byMagic:       100,
            InfluenceLuckCorrectRate_byMagic:        100,
            InfluenceStrengthCorrectRate_byFire:     100,
            InfluenceDexterityCorrectRate_byFire:    100,
            InfluenceMagicCorrectRate_byFire:        100,
            InfluenceFaithCorrectRate_byFire:        100,
            InfluenceLuckCorrectRate_byFire:         100,
            InfluenceStrengthCorrectRate_byThunder:  100,
            InfluenceDexterityCorrectRate_byThunder: 100,
            InfluenceMagicCorrectRate_byThunder:     100,
            InfluenceFaithCorrectRate_byThunder:     100,
            InfluenceLuckCorrectRate_byThunder:      100,
            InfluenceStrengthCorrectRate_byDark:     100,
            InfluenceDexterityCorrectRate_byDark:    100,
            InfluenceMagicCorrectRate_byDark:        100,
            InfluenceFaithCorrectRate_byDark:        100,
            InfluenceLuckCorrectRate_byDark:         100,
        },
    },
    calculations: {
        attr_requirementsMet: buildAttrMap(true),
        dmg_requirementsMet: buildDmgMap(true),
        dmg_attr_requirementMet: buildDmgAttrMap(true),
        dmg_scalesOn_attr: buildDmgAttrMap(false, {
            physical: {
                strength: true,
                dexterity: true,
            },
            magic: {
                intelligence: true,
            },
            fire: {
                faith: true,
            },
            lightning: {
                dexterity: true,
            },
            holy: {
                faith: true,
            },
        }),
        dmg_attr_calcCorrect: buildDmgAttrMap<Decimal>(0, {
            physical: {
                strength: 41.61000442,
                dexterity: 41.61000442,
            },
            magic: {
                intelligence: 41.61000442,
            },
            fire: {
                faith: 53.33333333,
            },
            lightning: {
                dexterity: 41.61000442,
            },
            holy: {
                faith: 41.61000442,
            },
        }),
        dmg_attr_damage: buildDmgAttrMap<Decimal>(0, {
            physical: {
                strength: 77.71230061,
                dexterity: 77.71230061,
            },
            fire: {
                faith: 91.728,
            },
        }),
        scaled_damage: buildDmgMap(0, {
            physical: 155.4246012,
            fire: 91.728,
        }),
        stats: {
            attack: {
                base: buildDmgMap(0, {
                    physical:  296.45,
                    fire:      191.10,
                }),
                scaled: buildDmgMap(0, {
                    physical: 155.4246012,
                    fire: 91.728,
                }),
                total: buildDmgMap(0, {
                    physical: 451.8746012,
                    fire: 282.828,
                }),
            },
            scaling: {
                values: {
                    strength:     0.63,
                    dexterity:    0.63,
                    intelligence: 0.00,
                    faith:        0.90,
                    arcane:       0.00,
                },
                tierStrings: buildAttrMap<ScalingTier>("-", {
                    strength:  "C",
                    dexterity: "C",
                    faith:     "B",
                }),
            },
            defense: buildDmgMap(0),
            passive: {
                scarlet_rot: 0,
                madness:     0,
                sleep:       0,
                frost:       0,
                poison:      0,
                blood_loss:  0,
            },
        },
    },
}
