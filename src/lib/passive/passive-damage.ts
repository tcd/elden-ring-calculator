import { PassiveMap } from "@types"

export const passiveDamage = (): PassiveMap<number> => {
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
