import { Integer, Decimal } from "@types"

const formula_1 = (level: Integer): Decimal => ( 0 + 20 * ((level -  0) / 30))
const formula_2 = (level: Integer): Decimal => (20 + 20 * ((level - 30) / 10))
const formula_3 = (level: Integer): Decimal => (40 + 20 * ((level - 40) / 20))
const formula_4 = (level: Integer): Decimal => (60 + 10 * ((level - 60) / 39))

/**
 * Based on formulas from the [Fextralife Wiki](https://eldenring.wiki.fextralife.com/Fire+Defense)
 * @param level Vigor Level
 */
export const fireDefenseFromVigor = (level: Integer): Decimal => {
    if (level <= 30) { return formula_1(level) }
    if (level <= 40) { return formula_2(level) }
    if (level <= 60) { return formula_3(level) }
    if (level <= 99) { return formula_4(level) }
    return null
}
