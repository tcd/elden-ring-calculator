import {
    Decimal,
    ScalingTier,
    AttackElementCorrectParam,
} from "@types"
import {
    buildDmgAttrMap,
    buildAttrMap,
    buildDmgMap,
    buildPassiveMap,
} from "@lib"
import { TestWeapon } from "."

const adjustmentParams: AttackElementCorrectParam = {
    isStrengthCorrect_byPhysics:  true,
    isDexterityCorrect_byPhysics: true,
    isMagicCorrect_byPhysics:     false,
    isFaithCorrect_byPhysics:     false,
    isLuckCorrect_byPhysics:      true,
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

}

export const BloodRottenGreataxe: TestWeapon = {
    options: {
        attributes: buildAttrMap(30),
        requirements: buildAttrMap(0, {
            strength:  30,
            dexterity: 10,
        }),
        slimData: {
            attack: buildDmgMap(0, {
                physical: 337.55,
            }),
            scaling: buildAttrMap(0, {
                strength:  0.304,
                dexterity: 0.988,
                arcane:    0.435,
            }),
            calc_correct: buildDmgMap(0),
            passive: buildPassiveMap(0, {
                scarlet_rot: 65,
                blood_loss:  120,
            }),
            attack_element_correct_param_id: 10_013,
        },
        adjustmentParams: adjustmentParams,
    },
    calculations: {
        attr_requirementsMet: buildAttrMap(true),
        dmg_requirementsMet: buildDmgMap(true),
        dmg_attr_requirementMet: buildDmgAttrMap(true),
        dmg_scalesOn_attr: buildDmgAttrMap(false, {
            physical: {
                strength:  true,
                dexterity: true,
                arcane:    true,
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
                strength:  41.61000442,
                dexterity: 41.61000442,
                arcane:    41.61000442,
            },
            magic: {
                intelligence: 41.61000442,
            },
            fire: {
                faith: 41.61000442,
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
                strength:  42.69818926,
                dexterity: 138.7691151,
                arcane:    61.09773792,
            },
        }),
        scaled_damage: buildDmgMap(0, {}),
        stats: {
            attack: {
                base:   buildDmgMap(0, {}),
                scaled: buildDmgMap(0, {}),
                total:  buildDmgMap(0, {}),
            },
            scaling: {
                values: buildAttrMap(0, {
                    strength:  0.304,
                    dexterity: 0.988,
                    arcane:    0.435,
                }),
                tierStrings: buildAttrMap<ScalingTier>("-", {
                    strength:  "D",
                    dexterity: "B",
                    arcane:    "D",
                }),
            },
            defense: buildDmgMap(0),
            passive: buildPassiveMap(0, {
                scarlet_rot: 65,
                blood_loss:  133.7025,
            }),
        },
    },
}
