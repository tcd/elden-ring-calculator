import deepEqualInAnyOrder from "deep-equal-in-any-order"
import chai from "chai"

chai.use(deepEqualInAnyOrder)
const assert = chai.assert

import {
    attributeRequirementsMet,
    damageTypeScalesOnAttribute,
    damageTypeAttributeRequirementsMet,
} from "@lib"
import { BlasphemousBlade } from "../helpers"

const {
    options,
    calculations,
} = BlasphemousBlade

describe("WeaponStatusCalculator", function () {
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
