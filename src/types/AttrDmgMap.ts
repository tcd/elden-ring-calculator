import {
    Attr,
    DmgMap,
} from "@types"

export type AttrDmgMap<T> = {
    [key in keyof typeof Attr]: DmgMap<T>
}
