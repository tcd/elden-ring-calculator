import deepEqualInAnyOrder from "deep-equal-in-any-order"
import chai from "chai"

chai.use(deepEqualInAnyOrder)
const assert = chai.assert

import {
    attributeRequirementsMet,
    damageTypeScalesOnAttribute,
    damageTypeAttributeRequirementsMet,
    WeaponStatsCalculator,
} from "@lib"
import {
    BlasphemousBlade,
    assertNumberMapsEqual,
} from "../helpers"

const { options, calculations } = BlasphemousBlade
const calculator = new WeaponStatsCalculator(options)
calculator.calculate()

describe("WeaponStatusCalculator", function () {
    describe("constructor", function () {
        it("throws no errors with valid options", function () {
            const fn = function () {
                new WeaponStatsCalculator(options)
            }
            assert.doesNotThrow(fn, Error)
        })
    })
    describe("calculate", function () {
        it("throws no errors with valid options", function () {
            const fn = function () {
                calculator.calculate()
            }
            assert.doesNotThrow(fn, Error)
        })
    })
    describe("calculations", function () {
        it("dmg_attr_calcCorrect", function () {
            calculator.calculate()
            assertNumberMapsEqual(calculations.dmg_attr_calcCorrect, calculator.dmg_attr_calcCorrect, 7)
        })
        it("dmg_requirementsMet", function () {
            calculator.calculate()
            assert.deepEqualInAnyOrder(calculations.dmg_requirementsMet, calculator.dmg_requirementsMet)
        })
        it("dmg_attr_damage", function () {
            calculator.calculate()
            assertNumberMapsEqual(calculations.dmg_attr_damage, calculator.dmg_attr_damage, 7)
        })
        it("scaled_damage", function () {
            calculator.calculate()
            assertNumberMapsEqual(calculations.scaled_damage, calculator.scaled_damage)
        })
        it("stats.passive", function () {
            calculator.calculate()
            assertNumberMapsEqual(calculations.stats.passive, calculator.stats.passive)
        })
        // Can't compare objects this complex & nested
        it.skip("stats", function () {
            calculator.calculate()
            assert.deepEqualInAnyOrder(calculator.stats, calculations.stats)
        })
    })
    describe("helpers", function () {
        it("attributeRequirementsMet", function () {
            const have = attributeRequirementsMet(options.attributes, options.requirements)
            assert.deepEqualInAnyOrder(have, calculations.attr_requirementsMet)
        })
        it("damageTypesScalesOnAttributes", function () {
            const have = damageTypeScalesOnAttribute(options.adjustmentParams)
            assert.deepEqualInAnyOrder(have, calculations.dmg_scalesOn_attr)
        })
        it("damageTypeAttributeRequirementsMet", function () {
            const have = damageTypeAttributeRequirementsMet(calculations.attr_requirementsMet, calculations.dmg_scalesOn_attr)
            assert.deepEqualInAnyOrder(have, calculations.dmg_attr_requirementMet)
        })
    })
})
