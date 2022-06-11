export interface CalculatedWeaponStats {
    attack: {
        base: {
            physical:  number
            magic:     number
            fire:      number
            lightning: number
            holy:      number
            // critical:  number
        }
        scaled: {
            physical:  number
            magic:     number
            fire:      number
            lightning: number
            holy:      number
            // critical:  number
        }
        total: {
            physical:  number
            magic:     number
            fire:      number
            lightning: number
            holy:      number
        }
    }
    defense: {
        physical:   number
        magic:      number
        fire:       number
        lightning:  number
        holy:       number
        guardBoost: number
    }
    scaling: {
        strength:     number
        dexterity:    number
        intelligence: number
        faith:        number
        arcane:       number
    }
    // requirements: {
    //     strength:     number
    //     dexterity:    number
    //     intelligence: number
    //     faith:        number
    //     arcane:       number
    // }
}