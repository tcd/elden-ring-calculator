import { Integer, Decimal } from "@types"

const formula_1 = (level: Integer): Decimal => ( 0 + 40 * ((level -  0) / 20))
const formula_2 = (level: Integer): Decimal => (40 + 10 * ((level - 20) / 15))
const formula_3 = (level: Integer): Decimal => (50 + 10 * ((level - 35) / 25))
const formula_4 = (level: Integer): Decimal => (60 + 10 * ((level - 60) / 39))

/**
 * Based on formulas from the [Fextralife Wiki](https://eldenring.wiki.fextralife.com/Holy+Defense)
 * @param level Arcane Level
 */
export const holyDefenseFromArcane = (level: Integer): Decimal => {
    if (level <= 20) { return formula_1(level) }
    if (level <= 35) { return formula_2(level) }
    if (level <= 60) { return formula_3(level) }
    if (level <= 99) { return formula_4(level) }
    return null
}
