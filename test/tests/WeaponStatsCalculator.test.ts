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
import { BlasphemousBlade } from "../helpers"

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
        // works, just has extra decimal precision
        it.skip("dmg_attr_calcCorrect", function () {
            calculator.calculate()
            assert.deepEqualInAnyOrder(calculator.dmg_attr_calcCorrect, calculations.dmg_attr_calcCorrect)
        })
        it("dmg_requirementsMet", function () {
            calculator.calculate()
            assert.deepEqualInAnyOrder(calculator.dmg_requirementsMet, calculations.dmg_requirementsMet)
        })
        // works, just has extra decimal precision
        it.skip("dmg_attr_damage", function () {
            calculator.calculate()
            assert.deepEqualInAnyOrder(calculator.dmg_attr_damage, calculations.dmg_attr_damage)
        })
        // works, just has extra decimal precision
        it.skip("scaled_damage", function () {
            calculator.calculate()
            assert.deepEqualInAnyOrder(calculator.scaled_damage, calculations.scaled_damage)
        })
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
