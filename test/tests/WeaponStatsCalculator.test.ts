import deepEqualInAnyOrder from "deep-equal-in-any-order"
import chai from "chai"

chai.use(deepEqualInAnyOrder)
const assert = chai.assert

import {
    DmgAttrMap,
} from "@types"

import {
    WeaponStatsCalculator,
    WeaponStatsCalculatorOptions,
    attributeRequirementsMet,
    damageTypesScalesOnAttributes,
    buildDmgAttrMap,
    buildAttrMap,
} from "@lib"

const options: WeaponStatsCalculatorOptions = {
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
}

const calculator = new WeaponStatsCalculator(options)

describe("WeaponStatusCalculator", function () {
    // it("set_attr_requirementsMet", function () {
    //     let { input, type } = cases.CASE_1
    //     const have = func(JSON.parse(input))
    //     assert.equal(have, type)
    // })
    describe("helpers", function () {
        it("attributeRequirementsMet", function () {
            const want = buildAttrMap(true)
            const have = attributeRequirementsMet(options.attributes, options.requirements)
            assert.deepEqualInAnyOrder(have, want)
        })
        it("damageTypesScalesOnAttributes", function () {
            const want = buildDmgAttrMap(false, {
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
            })
            const have = damageTypesScalesOnAttributes(options.adjustmentParams)
            assert.deepEqualInAnyOrder(have, want)
        })
    })
})
