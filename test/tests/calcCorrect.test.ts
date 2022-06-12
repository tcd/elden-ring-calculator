import deepEqualInAnyOrder from "deep-equal-in-any-order"
import chai from "chai"

chai.use(deepEqualInAnyOrder)
const assert = chai.assert

import {
    calcCorrect,
    round,
} from "@lib"

describe("calcCorrect", function () {
    it("Phys Str CalcCorrect", function () {
        const want = 41.61000442
        const result = calcCorrect(30, 0)
        const have = round(result, 8)
        assert.equal(have, want)
    })
    it("Fire Fai CalcCorrect", function () {
        const want = 53.33333333
        const result = calcCorrect(30, 4)
        const have = parseFloat(result.toFixed(8))
        assert.equal(have, want)
    })
})
