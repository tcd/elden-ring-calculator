import { Integer, Decimal } from "../../types"

export const passiveArcaneCalcCorrect = (level: Integer): Decimal => {
    let v1: number = null

    if      (level > 60) { v1 = (90 + (10 * ((level - 60) / 39))) }
    else if (level > 45) { v1 = (75 + (15 * ((level - 45) / 15))) }
    else if (level > 25) { v1 = (10 + (65 * ((level - 25) / 20))) }
    else                 { v1 = ( 0 + (10 * ((level -  1) / 24))) }

    return v1 / 100
}
