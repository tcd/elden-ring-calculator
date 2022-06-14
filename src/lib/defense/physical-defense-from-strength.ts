import { Integer, Decimal } from "@types"

const formula_1 = (level: Integer): Decimal => ( 0 + 10 * ((level -  0) / 30))
const formula_2 = (level: Integer): Decimal => (10 +  5 * ((level - 30) / 10))
const formula_3 = (level: Integer): Decimal => (15 + 15 * ((level - 40) / 20))
const formula_4 = (level: Integer): Decimal => (30 + 10 * ((level - 60) / 39))

/**
 * Based on formulas from the [Fextralife Wiki](https://eldenring.wiki.fextralife.com/Physical+Defense)
 * @param level Strength Level
 */
export const physicalDefenseFromStrength = (level: Integer): Decimal => {
    if (level <= 30) { return formula_1(level) }
    if (level <= 40) { return formula_2(level) }
    if (level <= 60) { return formula_3(level) }
    if (level <= 99) { return formula_4(level) }
    return null
}
