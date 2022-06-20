import { Passive } from "."

/**
 * Map of `Passive Damage Type` names and values of type `T`.
 *
 * @template {T} ValueType the type of values present in the map.
 */
export interface PassiveMap<T> {
    [Passive.scarlet_rot]: T
    [Passive.madness]:     T
    [Passive.sleep]:       T
    [Passive.frost]:       T
    [Passive.poison]:      T
    [Passive.blood_loss]:  T
}
