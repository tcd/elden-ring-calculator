import { Attr, DmgMap } from "."

export type AttrDmgMap<T> = {
    [key in keyof typeof Attr]: DmgMap<T>
}
