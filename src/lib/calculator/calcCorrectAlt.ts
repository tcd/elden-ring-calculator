import {
    DmgAttrMap,
    Attr,
    Dmg,
    AttrMap,
    SlimWeaponData,
    Integer,
    Decimal,
} from "@types"

import { calcCorrect } from "."

export interface CalcCorrectOptions {
    attribute: Attr
    damageType: Dmg
    dmg_scalesOn_attr: DmgAttrMap<boolean>
    attributes: AttrMap<Integer>
    slimData: SlimWeaponData
}

export const __calcCorrect = (options: CalcCorrectOptions): Decimal => {
    const {
        attribute,
        damageType,
        dmg_scalesOn_attr,
        attributes,
        slimData,
    } = options
    if (!dmg_scalesOn_attr[damageType][attribute]) {
        return 0
    }
    return calcCorrect(
        attributes[attribute],
        slimData.calc_correct[damageType],
    )
}
