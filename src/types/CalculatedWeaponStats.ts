import {
    AttrMap,
    Decimal,
    ScalingTier,
} from "."

export interface CalculatedWeaponStats {
    attack: {
        base: {
            physical:  Decimal
            magic:     Decimal
            fire:      Decimal
            lightning: Decimal
            holy:      Decimal
            // critical:  number
        }
        scaled: {
            physical:  Decimal
            magic:     Decimal
            fire:      Decimal
            lightning: Decimal
            holy:      Decimal
            // critical:  number
        }
        total: {
            physical:  Decimal
            magic:     Decimal
            fire:      Decimal
            lightning: Decimal
            holy:      Decimal
        }
    }
    defense: {
        physical:    number
        magic:       number
        fire:        number
        lightning:   number
        holy:        number
        guardBoost?: number
    }
    scaling: {
        values: AttrMap<Decimal>
        tierStrings: AttrMap<ScalingTier>
    }
    passive: {
        scarlet_rot: Decimal
        madness:     Decimal
        sleep:       Decimal
        frost:       Decimal
        poison:      Decimal
        blood_loss:  Decimal
    }
}
