import { assert } from "chai"

import { isBlank } from "@lib"

describe("isBlank", function () {
    describe("returns true", function () {
        it("for undefined", function () {
            const want = true
            const have = isBlank(undefined)
            assert.equal(have, want)
        })
        it("for null", function () {
            const want = true
            const have = isBlank(null)
            assert.equal(have, want)
        })
        it("for an empty string", function () {
            const want = true
            const have = isBlank("")
            assert.equal(have, want)
        })
        it("for an empty array", function () {
            const want = true
            const have = isBlank([])
            assert.equal(have, want)
        })
        it("for an empty object", function () {
            const want = true
            const have = isBlank({})
            assert.equal(have, want)
        })
    })
    describe("returns false", function () {
        it("for a boolean", function () {
            const want = false
            const have = isBlank(false)
            assert.equal(have, want)
        })
        it("for a number", function () {
            const want = false
            const have = isBlank(69)
            assert.equal(have, want)
        })
    })
})
