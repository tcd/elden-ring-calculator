import {
    Dmg,
    AttrMap,
} from "@types"

export type DmgAttrMap<T> = {
    [key in keyof typeof Dmg]: AttrMap<T>
}
