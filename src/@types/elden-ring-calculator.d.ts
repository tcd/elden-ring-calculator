declare module "elden-ring-calculator" {

    export type Integer = number
    export type Decimal = number

    export type ScalingTier = "S" | "A" | "B" | "C" | "D" | "E" | "-"

    /** Name of an `Attribute`. */
    export enum Attr {
        strength     = "strength",
        dexterity    = "dexterity",
        intelligence = "intelligence",
        faith        = "faith",
        arcane       = "arcane",
    }

    /** Name of a `Damage Type`. */
    export enum Dmg {
        physical  = "physical",
        magic     = "magic",
        fire      = "fire",
        lightning = "lightning",
        holy      = "holy",
    }

    /**
     * Map of `Attribute` names and values of type `T`.
     *
     * @template {T} ValueType the type of values present in the map.
     */
    export interface AttrMap<T> {
        [Attr.strength]:     T
        [Attr.dexterity]:    T
        [Attr.intelligence]: T
        [Attr.faith]:        T
        [Attr.arcane]:       T
    }

    /**
     * Map of `Damage Type` names and values of type `T`.
     *
     * @template {T} ValueType the type of values present in the map.
     */
    export interface DmgMap<T> {
        [Dmg.physical]:  T
        [Dmg.magic]:     T
        [Dmg.fire]:      T
        [Dmg.lightning]: T
        [Dmg.holy]:      T
    }

    export type AttrDmgMap<T> = {
        [key in keyof typeof Attr]: DmgMap<T>
    }

    export type DmgAttrMap<T> = {
        [key in keyof typeof Dmg]: AttrMap<T>
    }

    export class WeaponStatsCalculator {
        constructor(options: WeaponStatsCalculatorOptions)
        // public stats: CalculatedWeaponStats
        public calculate(): CalculatedWeaponStats
    }

    export interface WeaponStatsCalculatorOptions {
        attributes: AttrMap<Integer>
        slimData: SlimWeaponStatData
        adjustmentParams: AttackElementCorrectParam
        requirements: AttrMap<Integer>
    }

    export interface SlimWeaponStatData {
        attack: {
            physical:  Decimal
            magic:     Decimal
            fire:      Decimal
            lightning: Decimal
            holy:      Decimal
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
        attack_element_correct_param_id: Integer
    }

    export interface CalculatedWeaponStats {
        attack: {
            base: {
                physical:  number
                magic:     number
                fire:      number
                lightning: number
                holy:      number
            }
            scaled: {
                physical:  number
                magic:     number
                fire:      number
                lightning: number
                holy:      number
            }
            total: {
                physical:  number
                magic:     number
                fire:      number
                lightning: number
                holy:      number
            }
        }
        scaling: {
            values: AttrMap<Decimal>
            tierStrings: AttrMap<ScalingTier>
        }
    }

    export interface AttackElementCorrectParam {
        isStrengthCorrect_byPhysics: boolean
        isDexterityCorrect_byPhysics: boolean
        isMagicCorrect_byPhysics: boolean
        isFaithCorrect_byPhysics: boolean
        isLuckCorrect_byPhysics: boolean
        isStrengthCorrect_byMagic: boolean
        isDexterityCorrect_byMagic: boolean
        isMagicCorrect_byMagic: boolean
        isFaithCorrect_byMagic: boolean
        isLuckCorrect_byMagic: boolean
        isStrengthCorrect_byFire: boolean
        isDexterityCorrect_byFire: boolean
        isMagicCorrect_byFire: boolean
        isFaithCorrect_byFire: boolean
        isLuckCorrect_byFire: boolean
        isStrengthCorrect_byThunder: boolean
        isDexterityCorrect_byThunder: boolean
        isMagicCorrect_byThunder: boolean
        isFaithCorrect_byThunder: boolean
        isLuckCorrect_byThunder: boolean
        isStrengthCorrect_byDark: boolean
        isDexterityCorrect_byDark: boolean
        isMagicCorrect_byDark: boolean
        isFaithCorrect_byDark: boolean
        isLuckCorrect_byDark: boolean

        overwriteStrengthCorrectRate_byPhysics: number
        overwriteDexterityCorrectRate_byPhysics: number
        overwriteMagicCorrectRate_byPhysics: number
        overwriteFaithCorrectRate_byPhysics: number
        overwriteLuckCorrectRate_byPhysics: number
        overwriteStrengthCorrectRate_byMagic: number
        overwriteDexterityCorrectRate_byMagic: number
        overwriteMagicCorrectRate_byMagic: number
        overwriteFaithCorrectRate_byMagic: number
        overwriteLuckCorrectRate_byMagic: number
        overwriteStrengthCorrectRate_byFire: number
        overwriteDexterityCorrectRate_byFire: number
        overwriteMagicCorrectRate_byFire: number
        overwriteFaithCorrectRate_byFire: number
        overwriteLuckCorrectRate_byFire: number
        overwriteStrengthCorrectRate_byThunder: number
        overwriteDexterityCorrectRate_byThunder: number
        overwriteMagicCorrectRate_byThunder: number
        overwriteFaithCorrectRate_byThunder: number
        overwriteLuckCorrectRate_byThunder: number
        overwriteStrengthCorrectRate_byDark: number
        overwriteDexterityCorrectRate_byDark: number
        overwriteMagicCorrectRate_byDark: number
        overwriteFaithCorrectRate_byDark: number
        overwriteLuckCorrectRate_byDark: number

        InfluenceStrengthCorrectRate_byPhysics: number
        InfluenceDexterityCorrectRate_byPhysics: number
        InfluenceMagicCorrectRate_byPhysics: number
        InfluenceFaithCorrectRate_byPhysics: number
        InfluenceLuckCorrectRate_byPhysics: number
        InfluenceStrengthCorrectRate_byMagic: number
        InfluenceDexterityCorrectRate_byMagic: number
        InfluenceMagicCorrectRate_byMagic: number
        InfluenceFaithCorrectRate_byMagic: number
        InfluenceLuckCorrectRate_byMagic: number
        InfluenceStrengthCorrectRate_byFire: number
        InfluenceDexterityCorrectRate_byFire: number
        InfluenceMagicCorrectRate_byFire: number
        InfluenceFaithCorrectRate_byFire: number
        InfluenceLuckCorrectRate_byFire: number
        InfluenceStrengthCorrectRate_byThunder: number
        InfluenceDexterityCorrectRate_byThunder: number
        InfluenceMagicCorrectRate_byThunder: number
        InfluenceFaithCorrectRate_byThunder: number
        InfluenceLuckCorrectRate_byThunder: number
        InfluenceStrengthCorrectRate_byDark: number
        InfluenceDexterityCorrectRate_byDark: number
        InfluenceMagicCorrectRate_byDark: number
        InfluenceFaithCorrectRate_byDark: number
        InfluenceLuckCorrectRate_byDark: number
    }

}
