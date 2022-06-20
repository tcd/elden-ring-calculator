import { assert } from "chai"
import { round } from "@lib"

export const assertDecimalsEqual = (d1, d2, precision = 2): void => assert.equal(round(d1, precision), round(d2, precision))

export const assertNumberMapsEqual = (expected, actual, precision = 2): void => {
    for (const key1 of Object.keys(expected)) {
        if (isNaN(expected[key1])) {
            for (const key2 of Object.keys(expected[key1])) {
                assertDecimalsEqual(expected[key1][key2], actual[key1][key2], precision)
            }
        } else {
            assertDecimalsEqual(expected[key1], actual[key1], precision)
        }
    }
}
