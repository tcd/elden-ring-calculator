import { assert } from "chai"

import { isBlank } from "@lib"

describe("isBlank", function () {
    it("returns true for undefined", function () {
        const want = true
        const have = isBlank(undefined)
        assert.equal(have, want)
    })
    it("returns true for null", function () {
        const want = true
        const have = isBlank(null)
        assert.equal(have, want)
    })
})
