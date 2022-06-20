'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** Name of an `Attribute`. */
var Attr;
(function (Attr) {
    Attr["strength"] = "strength";
    Attr["dexterity"] = "dexterity";
    Attr["intelligence"] = "intelligence";
    Attr["faith"] = "faith";
    Attr["arcane"] = "arcane";
})(Attr || (Attr = {}));

/** Name of a `Damage Type`. */
var Dmg;
(function (Dmg) {
    Dmg["physical"] = "physical";
    Dmg["magic"] = "magic";
    Dmg["fire"] = "fire";
    Dmg["lightning"] = "lightning";
    Dmg["holy"] = "holy";
})(Dmg || (Dmg = {}));

/** Name of a `Passive Damage Type`. */
var Passive;
(function (Passive) {
    Passive["scarlet_rot"] = "scarlet_rot";
    Passive["madness"] = "madness";
    Passive["sleep"] = "sleep";
    Passive["frost"] = "frost";
    Passive["poison"] = "poison";
    Passive["blood_loss"] = "blood_loss";
})(Passive || (Passive = {}));

var calcCorrect = function (level, calcCorrectId) {
    var _a = __read(CALC_ID_LEVEL_RANGES[calcCorrectId.toString()], 3), cap3 = _a[0], cap2 = _a[1], cap1 = _a[2];
    var _b = __read(CALC_ID_LEVEL_RANGE_FUNCTIONS_JS[calcCorrectId.toString()], 4), func1 = _b[0], func2 = _b[1], func3 = _b[2], func4 = _b[3];
    if (level > cap3) {
        return func1(level);
    }
    else if (level > cap2) {
        return func2(level);
    }
    else if (level > cap1) {
        return func3(level);
    }
    else {
        return func4(level);
    }
};
var CALC_ID_LEVEL_RANGES = {
    "0": [80, 60, 18],
    "1": [80, 60, 20],
    "2": [80, 60, 20],
    "4": [80, 50, 20],
    "7": [80, 60, 20],
    "8": [80, 60, 16],
    "12": [45, 30, 15],
    "14": [80, 40, 20],
    "15": [80, 60, 25],
    "16": [80, 60, 18]
};
var CALC_ID_LEVEL_RANGE_FUNCTIONS_JS = {
    "0": [
        function (level) { return (90 + (20 * ((level - 80) / 70))); },
        function (level) { return (75 + (15 * ((level - 60) / 20))); },
        function (level) { return (25 + (50 * (1 - (Math.pow((1 - ((level - 18) / 42)), 1.2))))); },
        function (level) { return (0 + (25 * (Math.pow(((level - 1) / 17), 1.2)))); },
    ],
    "1": [
        function (level) { return (90 + (20 * ((level - 80) / 70))); },
        function (level) { return (75 + (15 * ((level - 60) / 20))); },
        function (level) { return (35 + (40 * (1 - (Math.pow((1 - ((level - 20) / 40)), 1.2))))); },
        function (level) { return (35 * (Math.pow(((level - 1) / 19), 1.2))); },
    ],
    "2": [
        function (level) { return (90 + (20 * ((level - 80) / 70))); },
        function (level) { return (75 + (15 * ((level - 60) / 20))); },
        function (level) { return (35 + (40 * (1 - (Math.pow((1 - ((level - 20) / 40)), 1.2))))); },
        function (level) { return (0 + (35 * (Math.pow(((level - 1) / 19), 1.2)))); },
    ],
    "4": [
        function (level) { return (95 + (5 * ((level - 80) / 19))); },
        function (level) { return (80 + (15 * ((level - 50) / 30))); },
        function (level) { return (40 + (40 * ((level - 20) / 30))); },
        function (level) { return (0 + (40 * ((level - 1) / 19))); },
    ],
    "7": [
        function (level) { return (90 + (20 * ((level - 80) / 70))); },
        function (level) { return (75 + (15 * ((level - 60) / 20))); },
        function (level) { return (35 + (40 * (1 - (Math.pow((1 - ((level - 20) / 40)), 1.2))))); },
        function (level) { return (0 + (35 * (Math.pow(((level - 1) / 19), 1.2)))); },
    ],
    "8": [
        function (level) { return (90 + (20 * ((level - 80) / 70))); },
        function (level) { return (75 + (15 * ((level - 60) / 20))); },
        function (level) { return (0 + (25 * (Math.pow(((level - 1) / 15), 1.2)))); },
        function (level) { return (25 + (50 * (1 - (Math.pow((1 - ((level - 16) / 44)), 1.2))))); },
    ],
    "12": [
        function (level) { return (75 + (25 * ((level - 45) / 54))); },
        function (level) { return (55 + (20 * ((level - 30) / 15))); },
        function (level) { return (10 + (45 * ((level - 15) / 15))); },
        function (level) { return (0 + (10 * ((level - 1) / 14))); },
    ],
    "14": [
        function (level) { return (85 + (15 * ((level - 80) / 19))); },
        function (level) { return (60 + (25 * ((level - 40) / 40))); },
        function (level) { return (40 + (20 * ((level - 20) / 20))); },
        function (level) { return (0 + (40 * ((level - 1) / 19))); },
    ],
    "15": [
        function (level) { return (95 + (5 * ((level - 80) / 19))); },
        function (level) { return (65 + (30 * ((level - 60) / 20))); },
        function (level) { return (25 + (40 * ((level - 25) / 35))); },
        function (level) { return (0 + (25 * ((level - 1) / 25))); },
    ],
    "16": [
        function (level) { return (90 + (10 * ((level - 80) / 19))); },
        function (level) { return (75 + (15 * ((level - 60) / 20))); },
        function (level) { return (20 + (55 * ((level - 18) / 42))); },
        function (level) { return (0 + (20 * ((level - 1) / 17))); },
    ]
};

var buildAttrMap = function (defaultValue, values) {
    if (values === void 0) { values = {}; }
    return __assign({
        strength: defaultValue,
        dexterity: defaultValue,
        intelligence: defaultValue,
        faith: defaultValue,
        arcane: defaultValue
    }, values);
};
var buildDmgMap = function (defaultValue, values) {
    if (values === void 0) { values = {}; }
    return __assign({
        physical: defaultValue,
        magic: defaultValue,
        fire: defaultValue,
        lightning: defaultValue,
        holy: defaultValue
    }, values);
};
var buildDmgAttrMap = function (defaultValue, values) {
    var _a, _b, _c, _d, _e;
    if (values === void 0) { values = {}; }
    return {
        physical: buildAttrMap(defaultValue, (_a = values === null || values === void 0 ? void 0 : values.physical) !== null && _a !== void 0 ? _a : {}),
        magic: buildAttrMap(defaultValue, (_b = values === null || values === void 0 ? void 0 : values.magic) !== null && _b !== void 0 ? _b : {}),
        fire: buildAttrMap(defaultValue, (_c = values === null || values === void 0 ? void 0 : values.fire) !== null && _c !== void 0 ? _c : {}),
        lightning: buildAttrMap(defaultValue, (_d = values === null || values === void 0 ? void 0 : values.lightning) !== null && _d !== void 0 ? _d : {}),
        holy: buildAttrMap(defaultValue, (_e = values === null || values === void 0 ? void 0 : values.holy) !== null && _e !== void 0 ? _e : {})
    };
};

/**
 * Multiply all numbers in an array together.
 */
var multiply = function (values) {
    return values.reduce(function (prevValue, curValue) { return prevValue * curValue; }, 1);
};

var scalingTier = function (decimal) {
    if (decimal > 1.75) {
        return "S";
    }
    if (decimal >= 1.40) {
        return "A";
    }
    if (decimal >= 0.90) {
        return "B";
    }
    if (decimal >= 0.60) {
        return "C";
    }
    if (decimal >= 0.25) {
        return "D";
    }
    if (decimal > 0.00) {
        return "E";
    }
    return "-";
};

var sum = function (numbers) {
    var _a;
    if (!(((_a = numbers === null || numbers === void 0 ? void 0 : numbers.length) !== null && _a !== void 0 ? _a : 0) > 0)) {
        return 0;
    }
    return numbers.reduce(function (total, current) { return total + current; }, 0);
};

// https://www.reddit.com/r/Eldenring/comments/tbco46/comment/i0e7xg7/?utm_source=share&utm_medium=web2x&context=3
var WeaponStatsCalculator = /** @class */ (function () {
    function WeaponStatsCalculator(options) {
        this.attributes = options.attributes;
        this.slimData = options.slimData;
        this.adjustmentParams = options.adjustmentParams;
        this.requirements = options.requirements;
        this.attr_requirementsMet = buildAttrMap(false);
        this.dmg_requirementsMet = buildDmgMap(false);
        this.dmg_scalesOn_attr = buildDmgAttrMap(false);
        this.dmg_attr_requirementMet = buildDmgAttrMap(false);
        this.dmg_attr_damage = buildDmgAttrMap(0);
        this.dmg_attr_calcCorrect = buildDmgAttrMap(0);
        this.scaled_damage = buildDmgMap(0);
        this.stats = this._initialStats();
    }
    WeaponStatsCalculator.prototype.calculate = function () {
        this.attr_requirementsMet = attributeRequirementsMet(this.attributes, this.requirements);
        this.dmg_scalesOn_attr = damageTypeScalesOnAttribute(this.adjustmentParams);
        this.dmg_attr_requirementMet = damageTypeAttributeRequirementsMet(this.attr_requirementsMet, this.dmg_scalesOn_attr);
        this.set_dmg_attr_calcCorrect();
        this.set_dmg_requirementsMet();
        this.set_dmg_attr_damage();
        this.set_scaled_damage();
        this.set_stats();
        return this.stats;
    };
    WeaponStatsCalculator.prototype._initialStats = function () {
        return {
            attack: {
                base: {},
                scaled: {},
                total: {}
            },
            scaling: {
                tierStrings: {},
                values: {}
            },
            passive: {}
        };
    };
    WeaponStatsCalculator.prototype.set_dmg_attr_calcCorrect = function () {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = __values(Object.values(Dmg)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var dmg = _d.value;
                try {
                    for (var _e = (e_2 = void 0, __values(Object.values(Attr))), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var attr = _f.value;
                        if (!this.dmg_scalesOn_attr[dmg][attr]) {
                            this.dmg_attr_calcCorrect[dmg][attr] = 0;
                        }
                        else {
                            var level = this.attributes[attr];
                            var calcCorrectId = this.slimData.calc_correct[dmg];
                            this.dmg_attr_calcCorrect[dmg][attr] = calcCorrect(level, calcCorrectId);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    WeaponStatsCalculator.prototype.set_dmg_requirementsMet = function () {
        var e_3, _a;
        try {
            for (var _b = __values(Object.entries(this.dmg_attr_requirementMet)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                this.dmg_requirementsMet[key] = Object.values(value).every(function (x) { return x == true; });
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    WeaponStatsCalculator.prototype.set_dmg_attr_damage = function () {
        var e_4, _a, e_5, _b;
        var _c, _d, _e;
        try {
            for (var _f = __values(Object.values(Dmg)), _g = _f.next(); !_g.done; _g = _f.next()) {
                var dmg = _g.value;
                try {
                    for (var _h = (e_5 = void 0, __values(Object.values(Attr))), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var attr = _j.value;
                        var calcCorrect_1 = (_e = (_d = (_c = this.dmg_attr_calcCorrect) === null || _c === void 0 ? void 0 : _c[dmg]) === null || _d === void 0 ? void 0 : _d[attr]) !== null && _e !== void 0 ? _e : 0;
                        if (calcCorrect_1 > 0) {
                            var base = this.slimData.attack[dmg];
                            var scaling = this.slimData.scaling[attr];
                            if (scaling == undefined) {
                                throw new Error("no ".concat(attr, " scaling data found"));
                            }
                            var damage = multiply([
                                base,
                                scaling,
                                (calcCorrect_1 / 100),
                            ]);
                            this.dmg_attr_damage[dmg][attr] = damage;
                        }
                        else {
                            this.dmg_attr_damage[dmg][attr] = 0;
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_b = _h["return"])) _b.call(_h);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_a = _f["return"])) _a.call(_f);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    WeaponStatsCalculator.prototype.set_scaled_damage = function () {
        var e_6, _a;
        try {
            for (var _b = __values(Object.values(Dmg)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var dmg = _c.value;
                if (!this.dmg_requirementsMet[dmg]) {
                    this.scaled_damage[dmg] = 0;
                }
                else {
                    this.scaled_damage[dmg] = sum(Object.values(this.dmg_attr_damage[dmg]));
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    WeaponStatsCalculator.prototype.set_stats = function () {
        var e_7, _a, e_8, _b;
        var _c, _d, _e;
        try {
            for (var _f = __values(Object.values(Dmg)), _g = _f.next(); !_g.done; _g = _f.next()) {
                var dmg = _g.value;
                var baseDamage = this.slimData.attack[dmg];
                var scaledDamage = this.scaled_damage[dmg];
                this.stats.attack.base[dmg] = baseDamage;
                this.stats.attack.scaled[dmg] = scaledDamage;
                this.stats.attack.total[dmg] = (baseDamage + scaledDamage);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_a = _f["return"])) _a.call(_f);
            }
            finally { if (e_7) throw e_7.error; }
        }
        try {
            for (var _h = __values(Object.values(Attr)), _j = _h.next(); !_j.done; _j = _h.next()) {
                var attr = _j.value;
                this.stats.scaling.tierStrings[attr] = scalingTier(this.slimData.scaling[attr]);
                this.stats.scaling.values[attr] = (_e = (_d = (_c = this.slimData) === null || _c === void 0 ? void 0 : _c.scaling) === null || _d === void 0 ? void 0 : _d[attr]) !== null && _e !== void 0 ? _e : 0;
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_b = _h["return"])) _b.call(_h);
            }
            finally { if (e_8) throw e_8.error; }
        }
    };
    return WeaponStatsCalculator;
}());
var attributeRequirementsMet = function (attributes, requirements) {
    return Object.values(Attr).reduce(function (result, attr) {
        var _a;
        return (__assign(__assign({}, result), (_a = {}, _a[attr] = (attributes[attr] >= requirements[attr]), _a)));
    }, {});
};
var damageTypeAttributeRequirementsMet = function (attrMet, scalesOn) {
    return Object.values(Dmg).reduce(function (dmgResult, dmg) {
        var _a;
        return (__assign(__assign({}, dmgResult), (_a = {}, _a[dmg] = Object.values(Attr).reduce(function (attrResult, attr) {
            var _a;
            return (__assign(__assign({}, attrResult), (_a = {}, _a[attr] = !(scalesOn[dmg][attr] == true && attrMet[attr] == false), _a)));
        }, {}), _a)));
    }, {});
};
var damageTypeScalesOnAttribute = function (adjustmentParam) {
    var _a, _b, _c, _d, _e, _f;
    return _a = {},
        _a[Dmg.physical] = (_b = {},
            _b[Attr.strength] = adjustmentParam.isStrengthCorrect_byPhysics,
            _b[Attr.dexterity] = adjustmentParam.isDexterityCorrect_byPhysics,
            _b[Attr.intelligence] = adjustmentParam.isMagicCorrect_byPhysics,
            _b[Attr.faith] = adjustmentParam.isFaithCorrect_byPhysics,
            _b[Attr.arcane] = adjustmentParam.isLuckCorrect_byPhysics,
            _b),
        _a[Dmg.magic] = (_c = {},
            _c[Attr.strength] = adjustmentParam.isStrengthCorrect_byMagic,
            _c[Attr.dexterity] = adjustmentParam.isDexterityCorrect_byMagic,
            _c[Attr.intelligence] = adjustmentParam.isMagicCorrect_byMagic,
            _c[Attr.faith] = adjustmentParam.isFaithCorrect_byMagic,
            _c[Attr.arcane] = adjustmentParam.isLuckCorrect_byMagic,
            _c),
        _a[Dmg.fire] = (_d = {},
            _d[Attr.strength] = adjustmentParam.isStrengthCorrect_byFire,
            _d[Attr.dexterity] = adjustmentParam.isDexterityCorrect_byFire,
            _d[Attr.intelligence] = adjustmentParam.isMagicCorrect_byFire,
            _d[Attr.faith] = adjustmentParam.isFaithCorrect_byFire,
            _d[Attr.arcane] = adjustmentParam.isLuckCorrect_byFire,
            _d),
        _a[Dmg.lightning] = (_e = {},
            _e[Attr.strength] = adjustmentParam.isStrengthCorrect_byThunder,
            _e[Attr.dexterity] = adjustmentParam.isDexterityCorrect_byThunder,
            _e[Attr.intelligence] = adjustmentParam.isMagicCorrect_byThunder,
            _e[Attr.faith] = adjustmentParam.isFaithCorrect_byThunder,
            _e[Attr.arcane] = adjustmentParam.isLuckCorrect_byThunder,
            _e),
        _a[Dmg.holy] = (_f = {},
            _f[Attr.strength] = adjustmentParam.isStrengthCorrect_byDark,
            _f[Attr.dexterity] = adjustmentParam.isDexterityCorrect_byDark,
            _f[Attr.intelligence] = adjustmentParam.isMagicCorrect_byDark,
            _f[Attr.faith] = adjustmentParam.isFaithCorrect_byDark,
            _f[Attr.arcane] = adjustmentParam.isLuckCorrect_byDark,
            _f),
        _a;
};

exports.WeaponStatsCalculator = WeaponStatsCalculator;
exports.attributeRequirementsMet = attributeRequirementsMet;
exports.damageTypeAttributeRequirementsMet = damageTypeAttributeRequirementsMet;
exports.damageTypeScalesOnAttribute = damageTypeScalesOnAttribute;
