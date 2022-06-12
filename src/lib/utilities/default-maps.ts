import {
    Dmg,
    Attr,
    AttrMap,
    DmgMap,
    AttrDmgMap,
    DmgAttrMap,
} from "@types"

export const defaultAttrMap = <T>(defaultValue: T): AttrMap<T> => {
    return {
        [Attr.strength]:     defaultValue,
        [Attr.dexterity]:    defaultValue,
        [Attr.intelligence]: defaultValue,
        [Attr.faith]:        defaultValue,
        [Attr.arcane]:       defaultValue,
    }
}

export const defaultDmgMap = <T>(defaultValue: T): DmgMap<T> => {
    return {
        [Dmg.physical]:  defaultValue,
        [Dmg.magic]:     defaultValue,
        [Dmg.fire]:      defaultValue,
        [Dmg.lightning]: defaultValue,
        [Dmg.holy]:      defaultValue,
    }
}

export const defaultAttrDmgMap = <T>(defaultValue: T): AttrDmgMap<T> => {
    return {
        [Attr.strength]:     defaultDmgMap(defaultValue),
        [Attr.dexterity]:    defaultDmgMap(defaultValue),
        [Attr.intelligence]: defaultDmgMap(defaultValue),
        [Attr.faith]:        defaultDmgMap(defaultValue),
        [Attr.arcane]:       defaultDmgMap(defaultValue),
    }
}

export const defaultDmgAttrMap = <T>(defaultValue: T): DmgAttrMap<T> => {
    return {
        [Dmg.physical]:  defaultAttrMap(defaultValue),
        [Dmg.magic]:     defaultAttrMap(defaultValue),
        [Dmg.fire]:      defaultAttrMap(defaultValue),
        [Dmg.lightning]: defaultAttrMap(defaultValue),
        [Dmg.holy]:      defaultAttrMap(defaultValue),
    }
}
