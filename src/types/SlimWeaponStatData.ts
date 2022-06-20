import {
    Integer,
    Decimal,
} from "@types"

export interface SlimWeaponStatData {
    attack_element_correct_param_id: Integer
    attack: {
        physical:  Decimal
        magic:     Decimal
        fire:      Decimal
        lightning: Decimal
        holy:      Decimal
        // critical:  number
        // stamina:  number
    }
    scaling: {
        strength:     Decimal
        dexterity:    Decimal
        intelligence: Decimal
        faith:        Decimal
        arcane:       Decimal
    }
    calc_correct: {
        physical:  Integer
        magic:     Integer
        fire:      Integer
        lightning: Integer
        holy:      Integer
    }
    passive: {
        scarlet_rot: Integer
        madness:     Integer
        sleep:       Integer
        frost:       Integer
        poison:      Integer
        blood_loss:  Integer
    }
}
