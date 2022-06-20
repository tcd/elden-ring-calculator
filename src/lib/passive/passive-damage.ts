import { buildPassiveMap } from ".."
import { Decimal, Integer, PassiveMap } from "@types"
import { passiveArcaneCalcCorrect } from "./passive-arcane-calc-correct"

export interface PassiveDamageOptions {
    weaponName?: string
    passiveMap: PassiveMap<Decimal>
    arcaneLevel: Integer
    arcaneRequirementMet: boolean
    arcaneScaling: Decimal
}

export const passiveDamage = (options: PassiveDamageOptions): PassiveMap<Decimal> => {
    const result = buildPassiveMap(0)

    const { passiveMap, arcaneRequirementMet } = options

    if (!arcaneRequirementMet) {
        for (const [key, value] of Object.entries(passiveMap)) {
            result[key] = value * 0.6
        }
        return result
    }

    result["scarlet_rot"] = passiveMap["scarlet_rot"]
    result["madness"]     = passiveMap["madness"]
    result["sleep"]       = passiveMap["sleep"]
    result["frost"]       = passiveMap["frost"]

    const arcaneScaling = options?.arcaneScaling ?? 0
    const { arcaneLevel } = options

    if (arcaneScaling > 0) {
        const calcCorrect = passiveArcaneCalcCorrect(arcaneLevel)
        const { poison, blood_loss } = passiveMap
        result["poison"]     = (poison     + (arcaneScaling * (calcCorrect * poison)))
        result["blood_loss"] = (blood_loss + (arcaneScaling * (calcCorrect * blood_loss)))
    } else {
        result["poison"]     = passiveMap["poison"]
        result["blood_loss"] = passiveMap["blood_loss"]
    }

    return result
}
