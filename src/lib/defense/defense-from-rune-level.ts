import { Integer, Decimal } from "@types"

const formula_1 = (level: Integer): Decimal => ( 40 + (60 * (((level + 79) -   1) / 149)))
const formula_2 = (level: Integer): Decimal => (100 + (20 * (((level + 79) - 150) /  20)))
const formula_3 = (level: Integer): Decimal => (120 + (15 * (((level + 79) - 170) /  70)))
const formula_4 = (level: Integer): Decimal => (135 + (20 * (((level + 79) - 240) / 552)))

/**
 * Based on formulas from the [Fextralife Wiki](https://eldenring.wiki.fextralife.com/Fire+Defense)
 * @param level Rune Level
 */
export const defenseFromRuneLevel = (level: Integer): Decimal => {
    if (level <=  71) { return formula_1(level) }
    if (level <=  91) { return formula_2(level) }
    if (level <= 161) { return formula_3(level) }
    if (level <= 713) { return formula_4(level) }
    return null
}
