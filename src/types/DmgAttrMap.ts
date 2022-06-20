import { Dmg, AttrMap } from "."

export type DmgAttrMap<T> = {
    [key in keyof typeof Dmg]: AttrMap<T>
}
