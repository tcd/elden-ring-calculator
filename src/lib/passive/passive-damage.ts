import { PassiveMap } from "@types"

export interface PassiveDamageOptions {
    arcaneRequirementMet: boolean
}

export const passiveDamage = (options: PassiveDamageOptions): PassiveMap<number> => {
    const result = {
        scarlet_rot: null,
        madness:     null,
        sleep:       null,
        frost:       null,
        poison:      null,
        blood_loss:  null,
    }

    return result
}
