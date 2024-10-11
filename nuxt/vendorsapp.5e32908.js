/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([[6], [function (e, t, n) {
    (function (e) {
        e.exports = function () {
            "use strict";
            var t, r;

            function o() {
                return t.apply(null, arguments)
            }

            function d(input) {
                return input instanceof Array || "[object Array]" === Object.prototype.toString.call(input)
            }

            function _(input) {
                return null != input && "[object Object]" === Object.prototype.toString.call(input)
            }

            function l(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }

            function m(e) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                var t;
                for (t in e) if (l(e, t)) return !1;
                return !0
            }

            function c(input) {
                return void 0 === input
            }

            function h(input) {
                return "number" == typeof input || "[object Number]" === Object.prototype.toString.call(input)
            }

            function f(input) {
                return input instanceof Date || "[object Date]" === Object.prototype.toString.call(input)
            }

            function map(e, t) {
                var i, n = [];
                for (i = 0; i < e.length; ++i) n.push(t(e[i], i));
                return n
            }

            function M(a, b) {
                for (var i in b) l(b, i) && (a[i] = b[i]);
                return l(b, "toString") && (a.toString = b.toString), l(b, "valueOf") && (a.valueOf = b.valueOf), a
            }

            function y(input, e, t, n) {
                return Et(input, e, t, n, !0).utc()
            }

            function L(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidEra: null,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    era: null,
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), e._pf
            }

            function Y(e) {
                if (null == e._isValid) {
                    var t = L(e), n = r.call(t.parsedDateParts, (function (i) {
                            return null != i
                        })),
                        o = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict && (o = o && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return o;
                    e._isValid = o
                }
                return e._isValid
            }

            function k(e) {
                var t = y(NaN);
                return null != e ? M(L(t), e) : L(t).userInvalidated = !0, t
            }

            r = Array.prototype.some ? Array.prototype.some : function (e) {
                var i, t = Object(this), n = t.length >>> 0;
                for (i = 0; i < n; i++) if (i in t && e.call(this, t[i], i, t)) return !0;
                return !1
            };
            var D = o.momentProperties = [], v = !1;

            function w(e, t) {
                var i, n, r;
                if (c(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), c(t._i) || (e._i = t._i), c(t._f) || (e._f = t._f), c(t._l) || (e._l = t._l), c(t._strict) || (e._strict = t._strict), c(t._tzm) || (e._tzm = t._tzm), c(t._isUTC) || (e._isUTC = t._isUTC), c(t._offset) || (e._offset = t._offset), c(t._pf) || (e._pf = L(t)), c(t._locale) || (e._locale = t._locale), D.length > 0) for (i = 0; i < D.length; i++) c(r = t[n = D[i]]) || (e[n] = r);
                return e
            }

            function T(e) {
                w(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, o.updateOffset(this), v = !1)
            }

            function S(e) {
                return e instanceof T || null != e && null != e._isAMomentObject
            }

            function H(e) {
                !1 === o.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function j(e, t) {
                var n = !0;
                return M((function () {
                    if (null != o.deprecationHandler && o.deprecationHandler(null, e), n) {
                        var r, i, d, _ = [];
                        for (i = 0; i < arguments.length; i++) {
                            if (r = "", "object" == typeof arguments[i]) {
                                for (d in r += "\n[" + i + "] ", arguments[0]) l(arguments[0], d) && (r += d + ": " + arguments[0][d] + ", ");
                                r = r.slice(0, -2)
                            } else r = arguments[i];
                            _.push(r)
                        }
                        H(e + "\nArguments: " + Array.prototype.slice.call(_).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return t.apply(this, arguments)
                }), t)
            }

            var x, O = {};

            function P(e, t) {
                null != o.deprecationHandler && o.deprecationHandler(e, t), O[e] || (H(t), O[e] = !0)
            }

            function E(input) {
                return "undefined" != typeof Function && input instanceof Function || "[object Function]" === Object.prototype.toString.call(input)
            }

            function W(e, t) {
                var n, r = M({}, e);
                for (n in t) l(t, n) && (_(e[n]) && _(t[n]) ? (r[n] = {}, M(r[n], e[n]), M(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
                for (n in e) l(e, n) && !l(t, n) && _(e[n]) && (r[n] = M({}, r[n]));
                return r
            }

            function A(e) {
                null != e && this.set(e)
            }

            function F(e, t, n) {
                var r = "" + Math.abs(e), o = t - r.length;
                return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r
            }

            o.suppressDeprecationWarnings = !1, o.deprecationHandler = null, x = Object.keys ? Object.keys : function (e) {
                var i, t = [];
                for (i in e) l(e, i) && t.push(i);
                return t
            };
            var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                N = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, C = {}, R = {};

            function J(e, t, n, r) {
                var o = r;
                "string" == typeof r && (o = function () {
                    return this[r]()
                }), e && (R[e] = o), t && (R[t[0]] = function () {
                    return F(o.apply(this, arguments), t[1], t[2])
                }), n && (R[n] = function () {
                    return this.localeData().ordinal(o.apply(this, arguments), e)
                })
            }

            function I(e, t) {
                return e.isValid() ? (t = U(t, e.localeData()), C[t] = C[t] || function (e) {
                    var i, t, input, n = e.match(z);
                    for (i = 0, t = n.length; i < t; i++) R[n[i]] ? n[i] = R[n[i]] : n[i] = (input = n[i]).match(/\[[\s\S]/) ? input.replace(/^\[|\]$/g, "") : input.replace(/\\/g, "");
                    return function (r) {
                        var i, output = "";
                        for (i = 0; i < t; i++) output += E(n[i]) ? n[i].call(r, e) : n[i];
                        return output
                    }
                }(t), C[t](e)) : e.localeData().invalidDate()
            }

            function U(e, t) {
                var i = 5;

                function n(input) {
                    return t.longDateFormat(input) || input
                }

                for (N.lastIndex = 0; i >= 0 && N.test(e);) e = e.replace(N, n), N.lastIndex = 0, i -= 1;
                return e
            }

            var $ = {};

            function V(e, t) {
                var n = e.toLowerCase();
                $[n] = $[n + "s"] = $[t] = e
            }

            function B(e) {
                return "string" == typeof e ? $[e] || $[e.toLowerCase()] : void 0
            }

            function G(e) {
                var t, n, r = {};
                for (n in e) l(e, n) && (t = B(n)) && (r[t] = e[n]);
                return r
            }

            var K = {};

            function Z(e, t) {
                K[e] = t
            }

            function X(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }

            function Q(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function ee(e) {
                var t = +e, n = 0;
                return 0 !== t && isFinite(t) && (n = Q(t)), n
            }

            function te(e, t) {
                return function (n) {
                    return null != n ? (ae(this, e, n), o.updateOffset(this, t), this) : ne(this, e)
                }
            }

            function ne(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function ae(e, t, n) {
                e.isValid() && !isNaN(n) && ("FullYear" === t && X(e.year()) && 1 === e.month() && 29 === e.date() ? (n = ee(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), He(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
            }

            var se, re = /\d/, ie = /\d\d/, oe = /\d{3}/, de = /\d{4}/, _e = /[+-]?\d{6}/, ue = /\d\d?/,
                le = /\d\d\d\d?/, me = /\d\d\d\d\d\d?/, ce = /\d{1,3}/, he = /\d{1,4}/, fe = /[+-]?\d{1,6}/, Me = /\d+/,
                pe = /[+-]?\d+/, ye = /Z|[+-]\d\d:?\d\d/gi, Le = /Z|[+-]\d\d(?::?\d\d)?/gi,
                Ye = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

            function ge(e, t, n) {
                se[e] = E(t) ? t : function (e, r) {
                    return e && n ? n : t
                }
            }

            function ke(e, t) {
                return l(se, e) ? se[e](t._strict, t._locale) : new RegExp(De(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function (e, t, n, r, o) {
                    return t || n || r || o
                }))))
            }

            function De(s) {
                return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            se = {};
            var ve, we = {};

            function be(e, t) {
                var i, n = t;
                for ("string" == typeof e && (e = [e]), h(t) && (n = function (input, e) {
                    e[t] = ee(input)
                }), i = 0; i < e.length; i++) we[e[i]] = n
            }

            function Te(e, t) {
                be(e, (function (input, e, n, r) {
                    n._w = n._w || {}, t(input, n._w, n, r)
                }))
            }

            function Se(e, input, t) {
                null != input && l(we, e) && we[e](input, t._a, t, e)
            }

            function He(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var n, r = (t % (n = 12) + n) % n;
                return e += (t - r) / 12, 1 === r ? X(e) ? 29 : 28 : 31 - r % 7 % 2
            }

            ve = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
                var i;
                for (i = 0; i < this.length; ++i) if (this[i] === e) return i;
                return -1
            }, J("M", ["MM", 2], "Mo", (function () {
                return this.month() + 1
            })), J("MMM", 0, 0, (function (e) {
                return this.localeData().monthsShort(this, e)
            })), J("MMMM", 0, 0, (function (e) {
                return this.localeData().months(this, e)
            })), V("month", "M"), Z("month", 8), ge("M", ue), ge("MM", ue, ie), ge("MMM", (function (e, t) {
                return t.monthsShortRegex(e)
            })), ge("MMMM", (function (e, t) {
                return t.monthsRegex(e)
            })), be(["M", "MM"], (function (input, e) {
                e[1] = ee(input) - 1
            })), be(["MMM", "MMMM"], (function (input, e, t, n) {
                var r = t._locale.monthsParse(input, n, t._strict);
                null != r ? e[1] = r : L(t).invalidMonth = input
            }));
            var je = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                xe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                Pe = Ye, Ee = Ye;

            function We(e, t, n) {
                var i, r, o, d = e.toLocaleLowerCase();
                if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) o = y([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (r = ve.call(this._shortMonthsParse, d)) ? r : null : -1 !== (r = ve.call(this._longMonthsParse, d)) ? r : null : "MMM" === t ? -1 !== (r = ve.call(this._shortMonthsParse, d)) || -1 !== (r = ve.call(this._longMonthsParse, d)) ? r : null : -1 !== (r = ve.call(this._longMonthsParse, d)) || -1 !== (r = ve.call(this._shortMonthsParse, d)) ? r : null
            }

            function Ae(e, t) {
                var n;
                if (!e.isValid()) return e;
                if ("string" == typeof t) if (/^\d+$/.test(t)) t = ee(t); else if (!h(t = e.localeData().monthsParse(t))) return e;
                return n = Math.min(e.date(), He(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function Fe(e) {
                return null != e ? (Ae(this, e), o.updateOffset(this, !0), this) : ne(this, "Month")
            }

            function ze() {
                function e(a, b) {
                    return b.length - a.length
                }

                var i, t, n = [], r = [], o = [];
                for (i = 0; i < 12; i++) t = y([2e3, i]), n.push(this.monthsShort(t, "")), r.push(this.months(t, "")), o.push(this.months(t, "")), o.push(this.monthsShort(t, ""));
                for (n.sort(e), r.sort(e), o.sort(e), i = 0; i < 12; i++) n[i] = De(n[i]), r[i] = De(r[i]);
                for (i = 0; i < 24; i++) o[i] = De(o[i]);
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
            }

            function Ne(e) {
                return X(e) ? 366 : 365
            }

            J("Y", 0, 0, (function () {
                var e = this.year();
                return e <= 9999 ? F(e, 4) : "+" + e
            })), J(0, ["YY", 2], 0, (function () {
                return this.year() % 100
            })), J(0, ["YYYY", 4], 0, "year"), J(0, ["YYYYY", 5], 0, "year"), J(0, ["YYYYYY", 6, !0], 0, "year"), V("year", "y"), Z("year", 1), ge("Y", pe), ge("YY", ue, ie), ge("YYYY", he, de), ge("YYYYY", fe, _e), ge("YYYYYY", fe, _e), be(["YYYYY", "YYYYYY"], 0), be("YYYY", (function (input, e) {
                e[0] = 2 === input.length ? o.parseTwoDigitYear(input) : ee(input)
            })), be("YY", (function (input, e) {
                e[0] = o.parseTwoDigitYear(input)
            })), be("Y", (function (input, e) {
                e[0] = parseInt(input, 10)
            })), o.parseTwoDigitYear = function (input) {
                return ee(input) + (ee(input) > 68 ? 1900 : 2e3)
            };
            var Ce = te("FullYear", !0);

            function Re(e, t, n, r, o, s, d) {
                var _;
                return e < 100 && e >= 0 ? (_ = new Date(e + 400, t, n, r, o, s, d), isFinite(_.getFullYear()) && _.setFullYear(e)) : _ = new Date(e, t, n, r, o, s, d), _
            }

            function Je(e) {
                var t, n;
                return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
            }

            function Ie(e, t, n) {
                var r = 7 + t - n;
                return -(7 + Je(e, 0, r).getUTCDay() - t) % 7 + r - 1
            }

            function Ue(e, t, n, r, o) {
                var d, _, l = 1 + 7 * (t - 1) + (7 + n - r) % 7 + Ie(e, r, o);
                return l <= 0 ? _ = Ne(d = e - 1) + l : l > Ne(e) ? (d = e + 1, _ = l - Ne(e)) : (d = e, _ = l), {
                    year: d,
                    dayOfYear: _
                }
            }

            function $e(e, t, n) {
                var r, o, d = Ie(e.year(), t, n), _ = Math.floor((e.dayOfYear() - d - 1) / 7) + 1;
                return _ < 1 ? r = _ + Ve(o = e.year() - 1, t, n) : _ > Ve(e.year(), t, n) ? (r = _ - Ve(e.year(), t, n), o = e.year() + 1) : (o = e.year(), r = _), {
                    week: r,
                    year: o
                }
            }

            function Ve(e, t, n) {
                var r = Ie(e, t, n), o = Ie(e + 1, t, n);
                return (Ne(e) - r + o) / 7
            }

            function Be(e, t) {
                return e.slice(t, 7).concat(e.slice(0, t))
            }

            J("w", ["ww", 2], "wo", "week"), J("W", ["WW", 2], "Wo", "isoWeek"), V("week", "w"), V("isoWeek", "W"), Z("week", 5), Z("isoWeek", 5), ge("w", ue), ge("ww", ue, ie), ge("W", ue), ge("WW", ue, ie), Te(["w", "ww", "W", "WW"], (function (input, e, t, n) {
                e[n.substr(0, 1)] = ee(input)
            })), J("d", 0, "do", "day"), J("dd", 0, 0, (function (e) {
                return this.localeData().weekdaysMin(this, e)
            })), J("ddd", 0, 0, (function (e) {
                return this.localeData().weekdaysShort(this, e)
            })), J("dddd", 0, 0, (function (e) {
                return this.localeData().weekdays(this, e)
            })), J("e", 0, 0, "weekday"), J("E", 0, 0, "isoWeekday"), V("day", "d"), V("weekday", "e"), V("isoWeekday", "E"), Z("day", 11), Z("weekday", 11), Z("isoWeekday", 11), ge("d", ue), ge("e", ue), ge("E", ue), ge("dd", (function (e, t) {
                return t.weekdaysMinRegex(e)
            })), ge("ddd", (function (e, t) {
                return t.weekdaysShortRegex(e)
            })), ge("dddd", (function (e, t) {
                return t.weekdaysRegex(e)
            })), Te(["dd", "ddd", "dddd"], (function (input, e, t, n) {
                var r = t._locale.weekdaysParse(input, n, t._strict);
                null != r ? e.d = r : L(t).invalidWeekday = input
            })), Te(["d", "e", "E"], (function (input, e, t, n) {
                e[n] = ee(input)
            }));
            var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ze = Ye, Xe = Ye,
                Qe = Ye;

            function et(e, t, n) {
                var i, r, o, d = e.toLocaleLowerCase();
                if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) o = y([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (r = ve.call(this._weekdaysParse, d)) ? r : null : "ddd" === t ? -1 !== (r = ve.call(this._shortWeekdaysParse, d)) ? r : null : -1 !== (r = ve.call(this._minWeekdaysParse, d)) ? r : null : "dddd" === t ? -1 !== (r = ve.call(this._weekdaysParse, d)) || -1 !== (r = ve.call(this._shortWeekdaysParse, d)) || -1 !== (r = ve.call(this._minWeekdaysParse, d)) ? r : null : "ddd" === t ? -1 !== (r = ve.call(this._shortWeekdaysParse, d)) || -1 !== (r = ve.call(this._weekdaysParse, d)) || -1 !== (r = ve.call(this._minWeekdaysParse, d)) ? r : null : -1 !== (r = ve.call(this._minWeekdaysParse, d)) || -1 !== (r = ve.call(this._weekdaysParse, d)) || -1 !== (r = ve.call(this._shortWeekdaysParse, d)) ? r : null
            }

            function tt() {
                function e(a, b) {
                    return b.length - a.length
                }

                var i, t, n, r, o, d = [], _ = [], l = [], m = [];
                for (i = 0; i < 7; i++) t = y([2e3, 1]).day(i), n = De(this.weekdaysMin(t, "")), r = De(this.weekdaysShort(t, "")), o = De(this.weekdays(t, "")), d.push(n), _.push(r), l.push(o), m.push(n), m.push(r), m.push(o);
                d.sort(e), _.sort(e), l.sort(e), m.sort(e), this._weekdaysRegex = new RegExp("^(" + m.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
            }

            function nt() {
                return this.hours() % 12 || 12
            }

            function at(e, t) {
                J(e, 0, 0, (function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                }))
            }

            function st(e, t) {
                return t._meridiemParse
            }

            J("H", ["HH", 2], 0, "hour"), J("h", ["hh", 2], 0, nt), J("k", ["kk", 2], 0, (function () {
                return this.hours() || 24
            })), J("hmm", 0, 0, (function () {
                return "" + nt.apply(this) + F(this.minutes(), 2)
            })), J("hmmss", 0, 0, (function () {
                return "" + nt.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2)
            })), J("Hmm", 0, 0, (function () {
                return "" + this.hours() + F(this.minutes(), 2)
            })), J("Hmmss", 0, 0, (function () {
                return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2)
            })), at("a", !0), at("A", !1), V("hour", "h"), Z("hour", 13), ge("a", st), ge("A", st), ge("H", ue), ge("h", ue), ge("k", ue), ge("HH", ue, ie), ge("hh", ue, ie), ge("kk", ue, ie), ge("hmm", le), ge("hmmss", me), ge("Hmm", le), ge("Hmmss", me), be(["H", "HH"], 3), be(["k", "kk"], (function (input, e, t) {
                var n = ee(input);
                e[3] = 24 === n ? 0 : n
            })), be(["a", "A"], (function (input, e, t) {
                t._isPm = t._locale.isPM(input), t._meridiem = input
            })), be(["h", "hh"], (function (input, e, t) {
                e[3] = ee(input), L(t).bigHour = !0
            })), be("hmm", (function (input, e, t) {
                var n = input.length - 2;
                e[3] = ee(input.substr(0, n)), e[4] = ee(input.substr(n)), L(t).bigHour = !0
            })), be("hmmss", (function (input, e, t) {
                var n = input.length - 4, r = input.length - 2;
                e[3] = ee(input.substr(0, n)), e[4] = ee(input.substr(n, 2)), e[5] = ee(input.substr(r)), L(t).bigHour = !0
            })), be("Hmm", (function (input, e, t) {
                var n = input.length - 2;
                e[3] = ee(input.substr(0, n)), e[4] = ee(input.substr(n))
            })), be("Hmmss", (function (input, e, t) {
                var n = input.length - 4, r = input.length - 2;
                e[3] = ee(input.substr(0, n)), e[4] = ee(input.substr(n, 2)), e[5] = ee(input.substr(r))
            }));
            var it, ot = te("Hours", !0), _t = {
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    w: "a week",
                    ww: "%d weeks",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                months: je,
                monthsShort: xe,
                week: {dow: 0, doy: 6},
                weekdays: Ge,
                weekdaysMin: Ke,
                weekdaysShort: qe,
                meridiemParse: /[ap]\.?m?\.?/i
            }, ut = {}, lt = {};

            function mt(e, t) {
                var i, n = Math.min(e.length, t.length);
                for (i = 0; i < n; i += 1) if (e[i] !== t[i]) return i;
                return n
            }

            function ct(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function ht(t) {
                var r = null;
                if (void 0 === ut[t] && void 0 !== e && e && e.exports) try {
                    r = it._abbr, n(307)("./" + t), ft(r)
                } catch (e) {
                    ut[t] = null
                }
                return ut[t]
            }

            function ft(e, t) {
                var data;
                return e && ((data = c(t) ? pt(e) : Mt(e, t)) ? it = data : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), it._abbr
            }

            function Mt(e, t) {
                if (null !== t) {
                    var n, r = _t;
                    if (t.abbr = e, null != ut[e]) P("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = ut[e]._config; else if (null != t.parentLocale) if (null != ut[t.parentLocale]) r = ut[t.parentLocale]._config; else {
                        if (null == (n = ht(t.parentLocale))) return lt[t.parentLocale] || (lt[t.parentLocale] = []), lt[t.parentLocale].push({
                            name: e,
                            config: t
                        }), null;
                        r = n._config
                    }
                    return ut[e] = new A(W(r, t)), lt[e] && lt[e].forEach((function (e) {
                        Mt(e.name, e.config)
                    })), ft(e), ut[e]
                }
                return delete ut[e], null
            }

            function pt(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return it;
                if (!d(e)) {
                    if (t = ht(e)) return t;
                    e = [e]
                }
                return function (e) {
                    for (var t, n, r, o, i = 0; i < e.length;) {
                        for (t = (o = ct(e[i]).split("-")).length, n = (n = ct(e[i + 1])) ? n.split("-") : null; t > 0;) {
                            if (r = ht(o.slice(0, t).join("-"))) return r;
                            if (n && n.length >= t && mt(o, n) >= t - 1) break;
                            t--
                        }
                        i++
                    }
                    return it
                }(e)
            }

            function yt(e) {
                var t, a = e._a;
                return a && -2 === L(e).overflow && (t = a[1] < 0 || a[1] > 11 ? 1 : a[2] < 1 || a[2] > He(a[0], a[1]) ? 2 : a[3] < 0 || a[3] > 24 || 24 === a[3] && (0 !== a[4] || 0 !== a[5] || 0 !== a[6]) ? 3 : a[4] < 0 || a[4] > 59 ? 4 : a[5] < 0 || a[5] > 59 ? 5 : a[6] < 0 || a[6] > 999 ? 6 : -1, L(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), L(e)._overflowWeeks && -1 === t && (t = 7), L(e)._overflowWeekday && -1 === t && (t = 8), L(e).overflow = t), e
            }

            var Lt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Yt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                gt = /Z|[+-]\d\d(?::?\d\d)?/,
                kt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]],
                Dt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                vt = /^\/?Date\((-?\d+)/i,
                wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                bt = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };

            function Tt(e) {
                var i, t, n, r, o, d, _ = e._i, l = Lt.exec(_) || Yt.exec(_);
                if (l) {
                    for (L(e).iso = !0, i = 0, t = kt.length; i < t; i++) if (kt[i][1].exec(l[1])) {
                        r = kt[i][0], n = !1 !== kt[i][2];
                        break
                    }
                    if (null == r) return void (e._isValid = !1);
                    if (l[3]) {
                        for (i = 0, t = Dt.length; i < t; i++) if (Dt[i][1].exec(l[3])) {
                            o = (l[2] || " ") + Dt[i][0];
                            break
                        }
                        if (null == o) return void (e._isValid = !1)
                    }
                    if (!n && null != o) return void (e._isValid = !1);
                    if (l[4]) {
                        if (!gt.exec(l[4])) return void (e._isValid = !1);
                        d = "Z"
                    }
                    e._f = r + (o || "") + (d || ""), Ot(e)
                } else e._isValid = !1
            }

            function St(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }

            function Ht(e) {
                var t, n, r, o, d, _, l, m,
                    c = wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (c) {
                    if (n = c[4], r = c[3], o = c[2], d = c[5], _ = c[6], l = c[7], m = [St(n), xe.indexOf(r), parseInt(o, 10), parseInt(d, 10), parseInt(_, 10)], l && m.push(parseInt(l, 10)), t = m, !function (e, t, n) {
                        return !e || qe.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (L(n).weekdayMismatch = !0, n._isValid = !1, !1)
                    }(c[1], t, e)) return;
                    e._a = t, e._tzm = function (e, t, n) {
                        if (e) return bt[e];
                        if (t) return 0;
                        var r = parseInt(n, 10), o = r % 100;
                        return (r - o) / 100 * 60 + o
                    }(c[8], c[9], c[10]), e._d = Je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), L(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function jt(a, b, e) {
                return null != a ? a : null != b ? b : e
            }

            function xt(e) {
                var i, t, n, r, d, input = [];
                if (!e._d) {
                    for (n = function (e) {
                        var t = new Date(o.now());
                        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                    }(e), e._w && null == e._a[2] && null == e._a[1] && function (e) {
                        var t, n, r, o, d, _, l, m, c;
                        null != (t = e._w).GG || null != t.W || null != t.E ? (d = 1, _ = 4, n = jt(t.GG, e._a[0], $e(Wt(), 1, 4).year), r = jt(t.W, 1), ((o = jt(t.E, 1)) < 1 || o > 7) && (m = !0)) : (d = e._locale._week.dow, _ = e._locale._week.doy, c = $e(Wt(), d, _), n = jt(t.gg, e._a[0], c.year), r = jt(t.w, c.week), null != t.d ? ((o = t.d) < 0 || o > 6) && (m = !0) : null != t.e ? (o = t.e + d, (t.e < 0 || t.e > 6) && (m = !0)) : o = d), r < 1 || r > Ve(n, d, _) ? L(e)._overflowWeeks = !0 : null != m ? L(e)._overflowWeekday = !0 : (l = Ue(n, r, o, d, _), e._a[0] = l.year, e._dayOfYear = l.dayOfYear)
                    }(e), null != e._dayOfYear && (d = jt(e._a[0], n[0]), (e._dayOfYear > Ne(d) || 0 === e._dayOfYear) && (L(e)._overflowDayOfYear = !0), t = Je(d, 0, e._dayOfYear), e._a[1] = t.getUTCMonth(), e._a[2] = t.getUTCDate()), i = 0; i < 3 && null == e._a[i]; ++i) e._a[i] = input[i] = n[i];
                    for (; i < 7; i++) e._a[i] = input[i] = null == e._a[i] ? 2 === i ? 1 : 0 : e._a[i];
                    24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? Je : Re).apply(null, input), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (L(e).weekdayMismatch = !0)
                }
            }

            function Ot(e) {
                if (e._f !== o.ISO_8601) if (e._f !== o.RFC_2822) {
                    e._a = [], L(e).empty = !0;
                    var i, t, n, r, d, _, l = "" + e._i, m = l.length, c = 0;
                    for (n = U(e._f, e._locale).match(z) || [], i = 0; i < n.length; i++) r = n[i], (t = (l.match(ke(r, e)) || [])[0]) && ((d = l.substr(0, l.indexOf(t))).length > 0 && L(e).unusedInput.push(d), l = l.slice(l.indexOf(t) + t.length), c += t.length), R[r] ? (t ? L(e).empty = !1 : L(e).unusedTokens.push(r), Se(r, t, e)) : e._strict && !t && L(e).unusedTokens.push(r);
                    L(e).charsLeftOver = m - c, l.length > 0 && L(e).unusedInput.push(l), e._a[3] <= 12 && !0 === L(e).bigHour && e._a[3] > 0 && (L(e).bigHour = void 0), L(e).parsedDateParts = e._a.slice(0), L(e).meridiem = e._meridiem, e._a[3] = function (e, t, n) {
                        var r;
                        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
                    }(e._locale, e._a[3], e._meridiem), null !== (_ = L(e).era) && (e._a[0] = e._locale.erasConvertYear(_, e._a[0])), xt(e), yt(e)
                } else Ht(e); else Tt(e)
            }

            function Pt(e) {
                var input = e._i, t = e._f;
                return e._locale = e._locale || pt(e._l), null === input || void 0 === t && "" === input ? k({nullInput: !0}) : ("string" == typeof input && (e._i = input = e._locale.preparse(input)), S(input) ? new T(yt(input)) : (f(input) ? e._d = input : d(t) ? function (e) {
                    var t, n, r, i, o, d, _ = !1;
                    if (0 === e._f.length) return L(e).invalidFormat = !0, void (e._d = new Date(NaN));
                    for (i = 0; i < e._f.length; i++) o = 0, d = !1, t = w({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Ot(t), Y(t) && (d = !0), o += L(t).charsLeftOver, o += 10 * L(t).unusedTokens.length, L(t).score = o, _ ? o < r && (r = o, n = t) : (null == r || o < r || d) && (r = o, n = t, d && (_ = !0));
                    M(e, n || t)
                }(e) : t ? Ot(e) : function (e) {
                    var input = e._i;
                    c(input) ? e._d = new Date(o.now()) : f(input) ? e._d = new Date(input.valueOf()) : "string" == typeof input ? function (e) {
                        var t = vt.exec(e._i);
                        null === t ? (Tt(e), !1 === e._isValid && (delete e._isValid, Ht(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : o.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                    }(e) : d(input) ? (e._a = map(input.slice(0), (function (e) {
                        return parseInt(e, 10)
                    })), xt(e)) : _(input) ? function (e) {
                        if (!e._d) {
                            var i = G(e._i), t = void 0 === i.day ? i.date : i.day;
                            e._a = map([i.year, i.month, t, i.hour, i.minute, i.second, i.millisecond], (function (e) {
                                return e && parseInt(e, 10)
                            })), xt(e)
                        }
                    }(e) : h(input) ? e._d = new Date(input) : o.createFromInputFallback(e)
                }(e), Y(e) || (e._d = null), e))
            }

            function Et(input, e, t, n, r) {
                var o, l = {};
                return !0 !== e && !1 !== e || (n = e, e = void 0), !0 !== t && !1 !== t || (n = t, t = void 0), (_(input) && m(input) || d(input) && 0 === input.length) && (input = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = r, l._l = t, l._i = input, l._f = e, l._strict = n, (o = new T(yt(Pt(l))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
            }

            function Wt(input, e, t, n) {
                return Et(input, e, t, n, !1)
            }

            o.createFromInputFallback = j("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function (e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            })), o.ISO_8601 = function () {
            }, o.RFC_2822 = function () {
            };
            var At = j("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                    var e = Wt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : k()
                })),
                Ft = j("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                    var e = Wt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : k()
                }));

            function zt(e, t) {
                var n, i;
                if (1 === t.length && d(t[0]) && (t = t[0]), !t.length) return Wt();
                for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]);
                return n
            }

            var Nt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function Ct(e) {
                var t = G(e), n = t.year || 0, r = t.quarter || 0, o = t.month || 0, d = t.week || t.isoWeek || 0,
                    _ = t.day || 0, m = t.hour || 0, c = t.minute || 0, h = t.second || 0, f = t.millisecond || 0;
                this._isValid = function (e) {
                    var t, i, n = !1;
                    for (t in e) if (l(e, t) && (-1 === ve.call(Nt, t) || null != e[t] && isNaN(e[t]))) return !1;
                    for (i = 0; i < Nt.length; ++i) if (e[Nt[i]]) {
                        if (n) return !1;
                        parseFloat(e[Nt[i]]) !== ee(e[Nt[i]]) && (n = !0)
                    }
                    return !0
                }(t), this._milliseconds = +f + 1e3 * h + 6e4 * c + 1e3 * m * 60 * 60, this._days = +_ + 7 * d, this._months = +o + 3 * r + 12 * n, this._data = {}, this._locale = pt(), this._bubble()
            }

            function Rt(e) {
                return e instanceof Ct
            }

            function Jt(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function It(e, t) {
                J(e, 0, 0, (function () {
                    var e = this.utcOffset(), n = "+";
                    return e < 0 && (e = -e, n = "-"), n + F(~~(e / 60), 2) + t + F(~~e % 60, 2)
                }))
            }

            It("Z", ":"), It("ZZ", ""), ge("Z", Le), ge("ZZ", Le), be(["Z", "ZZ"], (function (input, e, t) {
                t._useUTC = !0, t._tzm = $t(Le, input)
            }));
            var Ut = /([\+\-]|\d\d)/gi;

            function $t(e, t) {
                var n, r, o = (t || "").match(e);
                return null === o ? null : 0 === (r = 60 * (n = ((o[o.length - 1] || []) + "").match(Ut) || ["-", 0, 0])[1] + ee(n[2])) ? 0 : "+" === n[0] ? r : -r
            }

            function Vt(input, e) {
                var t, n;
                return e._isUTC ? (t = e.clone(), n = (S(input) || f(input) ? input.valueOf() : Wt(input).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + n), o.updateOffset(t, !1), t) : Wt(input).local()
            }

            function Bt(e) {
                return -Math.round(e._d.getTimezoneOffset())
            }

            function Gt() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }

            o.updateOffset = function () {
            };
            var qt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                Kt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function Zt(input, e) {
                var t, n, r, base, o, d, _ = input, m = null;
                return Rt(input) ? _ = {
                    ms: input._milliseconds,
                    d: input._days,
                    M: input._months
                } : h(input) || !isNaN(+input) ? (_ = {}, e ? _[e] = +input : _.milliseconds = +input) : (m = qt.exec(input)) ? (t = "-" === m[1] ? -1 : 1, _ = {
                    y: 0,
                    d: ee(m[2]) * t,
                    h: ee(m[3]) * t,
                    m: ee(m[4]) * t,
                    s: ee(m[5]) * t,
                    ms: ee(Jt(1e3 * m[6])) * t
                }) : (m = Kt.exec(input)) ? (t = "-" === m[1] ? -1 : 1, _ = {
                    y: Xt(m[2], t),
                    M: Xt(m[3], t),
                    w: Xt(m[4], t),
                    d: Xt(m[5], t),
                    h: Xt(m[6], t),
                    m: Xt(m[7], t),
                    s: Xt(m[8], t)
                }) : null == _ ? _ = {} : "object" == typeof _ && ("from" in _ || "to" in _) && (base = Wt(_.from), o = Wt(_.to), r = base.isValid() && o.isValid() ? (o = Vt(o, base), base.isBefore(o) ? d = Qt(base, o) : ((d = Qt(o, base)).milliseconds = -d.milliseconds, d.months = -d.months), d) : {
                    milliseconds: 0,
                    months: 0
                }, (_ = {}).ms = r.milliseconds, _.M = r.months), n = new Ct(_), Rt(input) && l(input, "_locale") && (n._locale = input._locale), Rt(input) && l(input, "_isValid") && (n._isValid = input._isValid), n
            }

            function Xt(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function Qt(base, e) {
                var t = {};
                return t.months = e.month() - base.month() + 12 * (e.year() - base.year()), base.clone().add(t.months, "M").isAfter(e) && --t.months, t.milliseconds = +e - +base.clone().add(t.months, "M"), t
            }

            function en(e, t) {
                return function (n, r) {
                    var o;
                    return null === r || isNaN(+r) || (P(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = r, r = o), tn(this, Zt(n, r), e), this
                }
            }

            function tn(e, t, n, r) {
                var d = t._milliseconds, _ = Jt(t._days), l = Jt(t._months);
                e.isValid() && (r = null == r || r, l && Ae(e, ne(e, "Month") + l * n), _ && ae(e, "Date", ne(e, "Date") + _ * n), d && e._d.setTime(e._d.valueOf() + d * n), r && o.updateOffset(e, _ || l))
            }

            Zt.fn = Ct.prototype, Zt.invalid = function () {
                return Zt(NaN)
            };
            var nn = en(1, "add"), an = en(-1, "subtract");

            function sn(input) {
                return "string" == typeof input || input instanceof String
            }

            function rn(input) {
                return S(input) || f(input) || sn(input) || h(input) || function (input) {
                    var e = d(input), t = !1;
                    return e && (t = 0 === input.filter((function (e) {
                        return !h(e) && sn(input)
                    })).length), e && t
                }(input) || function (input) {
                    var i, e, t = _(input) && !m(input), n = !1,
                        r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
                    for (i = 0; i < r.length; i += 1) e = r[i], n = n || l(input, e);
                    return t && n
                }(input) || null == input
            }

            function on(input) {
                var i, e = _(input) && !m(input), t = !1,
                    n = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                for (i = 0; i < n.length; i += 1) t = t || l(input, n[i]);
                return e && t
            }

            function dn(a, b) {
                if (a.date() < b.date()) return -dn(b, a);
                var e = 12 * (b.year() - a.year()) + (b.month() - a.month()), t = a.clone().add(e, "months");
                return -(e + (b - t < 0 ? (b - t) / (t - a.clone().add(e - 1, "months")) : (b - t) / (a.clone().add(e + 1, "months") - t))) || 0
            }

            function _n(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = pt(e)) && (this._locale = t), this)
            }

            o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var un = j("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function (e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            }));

            function ln() {
                return this._locale
            }

            function mn(e, t) {
                return (e % t + t) % t
            }

            function cn(e, t, n) {
                return e < 100 && e >= 0 ? new Date(e + 400, t, n) - 126227808e5 : new Date(e, t, n).valueOf()
            }

            function hn(e, t, n) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - 126227808e5 : Date.UTC(e, t, n)
            }

            function fn(e, t) {
                return t.erasAbbrRegex(e)
            }

            function Mn() {
                var i, e, t = [], n = [], r = [], o = [], d = this.eras();
                for (i = 0, e = d.length; i < e; ++i) n.push(De(d[i].name)), t.push(De(d[i].abbr)), r.push(De(d[i].narrow)), o.push(De(d[i].name)), o.push(De(d[i].abbr)), o.push(De(d[i].narrow));
                this._erasRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function pn(e, t) {
                J(0, [e, e.length], 0, t)
            }

            function yn(input, e, t, n, r) {
                var o;
                return null == input ? $e(this, n, r).year : (e > (o = Ve(input, n, r)) && (e = o), Ln.call(this, input, e, t, n, r))
            }

            function Ln(e, t, n, r, o) {
                var d = Ue(e, t, n, r, o), _ = Je(d.year, 0, d.dayOfYear);
                return this.year(_.getUTCFullYear()), this.month(_.getUTCMonth()), this.date(_.getUTCDate()), this
            }

            J("N", 0, 0, "eraAbbr"), J("NN", 0, 0, "eraAbbr"), J("NNN", 0, 0, "eraAbbr"), J("NNNN", 0, 0, "eraName"), J("NNNNN", 0, 0, "eraNarrow"), J("y", ["y", 1], "yo", "eraYear"), J("y", ["yy", 2], 0, "eraYear"), J("y", ["yyy", 3], 0, "eraYear"), J("y", ["yyyy", 4], 0, "eraYear"), ge("N", fn), ge("NN", fn), ge("NNN", fn), ge("NNNN", (function (e, t) {
                return t.erasNameRegex(e)
            })), ge("NNNNN", (function (e, t) {
                return t.erasNarrowRegex(e)
            })), be(["N", "NN", "NNN", "NNNN", "NNNNN"], (function (input, e, t, n) {
                var r = t._locale.erasParse(input, n, t._strict);
                r ? L(t).era = r : L(t).invalidEra = input
            })), ge("y", Me), ge("yy", Me), ge("yyy", Me), ge("yyyy", Me), ge("yo", (function (e, t) {
                return t._eraYearOrdinalRegex || Me
            })), be(["y", "yy", "yyy", "yyyy"], 0), be(["yo"], (function (input, e, t, n) {
                var r;
                t._locale._eraYearOrdinalRegex && (r = input.match(t._locale._eraYearOrdinalRegex)), t._locale.eraYearOrdinalParse ? e[0] = t._locale.eraYearOrdinalParse(input, r) : e[0] = parseInt(input, 10)
            })), J(0, ["gg", 2], 0, (function () {
                return this.weekYear() % 100
            })), J(0, ["GG", 2], 0, (function () {
                return this.isoWeekYear() % 100
            })), pn("gggg", "weekYear"), pn("ggggg", "weekYear"), pn("GGGG", "isoWeekYear"), pn("GGGGG", "isoWeekYear"), V("weekYear", "gg"), V("isoWeekYear", "GG"), Z("weekYear", 1), Z("isoWeekYear", 1), ge("G", pe), ge("g", pe), ge("GG", ue, ie), ge("gg", ue, ie), ge("GGGG", he, de), ge("gggg", he, de), ge("GGGGG", fe, _e), ge("ggggg", fe, _e), Te(["gggg", "ggggg", "GGGG", "GGGGG"], (function (input, e, t, n) {
                e[n.substr(0, 2)] = ee(input)
            })), Te(["gg", "GG"], (function (input, e, t, n) {
                e[n] = o.parseTwoDigitYear(input)
            })), J("Q", 0, "Qo", "quarter"), V("quarter", "Q"), Z("quarter", 7), ge("Q", re), be("Q", (function (input, e) {
                e[1] = 3 * (ee(input) - 1)
            })), J("D", ["DD", 2], "Do", "date"), V("date", "D"), Z("date", 9), ge("D", ue), ge("DD", ue, ie), ge("Do", (function (e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            })), be(["D", "DD"], 2), be("Do", (function (input, e) {
                e[2] = ee(input.match(ue)[0])
            }));
            var Yn = te("Date", !0);
            J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), V("dayOfYear", "DDD"), Z("dayOfYear", 4), ge("DDD", ce), ge("DDDD", oe), be(["DDD", "DDDD"], (function (input, e, t) {
                t._dayOfYear = ee(input)
            })), J("m", ["mm", 2], 0, "minute"), V("minute", "m"), Z("minute", 14), ge("m", ue), ge("mm", ue, ie), be(["m", "mm"], 4);
            var gn = te("Minutes", !1);
            J("s", ["ss", 2], 0, "second"), V("second", "s"), Z("second", 15), ge("s", ue), ge("ss", ue, ie), be(["s", "ss"], 5);
            var kn, Dn, vn = te("Seconds", !1);
            for (J("S", 0, 0, (function () {
                return ~~(this.millisecond() / 100)
            })), J(0, ["SS", 2], 0, (function () {
                return ~~(this.millisecond() / 10)
            })), J(0, ["SSS", 3], 0, "millisecond"), J(0, ["SSSS", 4], 0, (function () {
                return 10 * this.millisecond()
            })), J(0, ["SSSSS", 5], 0, (function () {
                return 100 * this.millisecond()
            })), J(0, ["SSSSSS", 6], 0, (function () {
                return 1e3 * this.millisecond()
            })), J(0, ["SSSSSSS", 7], 0, (function () {
                return 1e4 * this.millisecond()
            })), J(0, ["SSSSSSSS", 8], 0, (function () {
                return 1e5 * this.millisecond()
            })), J(0, ["SSSSSSSSS", 9], 0, (function () {
                return 1e6 * this.millisecond()
            })), V("millisecond", "ms"), Z("millisecond", 16), ge("S", ce, re), ge("SS", ce, ie), ge("SSS", ce, oe), kn = "SSSS"; kn.length <= 9; kn += "S") ge(kn, Me);

            function wn(input, e) {
                e[6] = ee(1e3 * ("0." + input))
            }

            for (kn = "S"; kn.length <= 9; kn += "S") be(kn, wn);
            Dn = te("Milliseconds", !1), J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
            var bn = T.prototype;

            function Tn(e) {
                return e
            }

            bn.add = nn, bn.calendar = function (time, e) {
                1 === arguments.length && (rn(arguments[0]) ? (time = arguments[0], e = void 0) : on(arguments[0]) && (e = arguments[0], time = void 0));
                var t = time || Wt(), n = Vt(t, this).startOf("day"), r = o.calendarFormat(this, n) || "sameElse",
                    output = e && (E(e[r]) ? e[r].call(this, t) : e[r]);
                return this.format(output || this.localeData().calendar(r, this, Wt(t)))
            }, bn.clone = function () {
                return new T(this)
            }, bn.diff = function (input, e, t) {
                var n, r, output;
                if (!this.isValid()) return NaN;
                if (!(n = Vt(input, this)).isValid()) return NaN;
                switch (r = 6e4 * (n.utcOffset() - this.utcOffset()), e = B(e)) {
                    case"year":
                        output = dn(this, n) / 12;
                        break;
                    case"month":
                        output = dn(this, n);
                        break;
                    case"quarter":
                        output = dn(this, n) / 3;
                        break;
                    case"second":
                        output = (this - n) / 1e3;
                        break;
                    case"minute":
                        output = (this - n) / 6e4;
                        break;
                    case"hour":
                        output = (this - n) / 36e5;
                        break;
                    case"day":
                        output = (this - n - r) / 864e5;
                        break;
                    case"week":
                        output = (this - n - r) / 6048e5;
                        break;
                    default:
                        output = this - n
                }
                return t ? output : Q(output)
            }, bn.endOf = function (e) {
                var time, t;
                if (void 0 === (e = B(e)) || "millisecond" === e || !this.isValid()) return this;
                switch (t = this._isUTC ? hn : cn, e) {
                    case"year":
                        time = t(this.year() + 1, 0, 1) - 1;
                        break;
                    case"quarter":
                        time = t(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case"month":
                        time = t(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case"week":
                        time = t(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case"isoWeek":
                        time = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case"day":
                    case"date":
                        time = t(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case"hour":
                        time = this._d.valueOf(), time += 36e5 - mn(time + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                        break;
                    case"minute":
                        time = this._d.valueOf(), time += 6e4 - mn(time, 6e4) - 1;
                        break;
                    case"second":
                        time = this._d.valueOf(), time += 1e3 - mn(time, 1e3) - 1
                }
                return this._d.setTime(time), o.updateOffset(this, !0), this
            }, bn.format = function (e) {
                e || (e = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
                var output = I(this, e);
                return this.localeData().postformat(output)
            }, bn.from = function (time, e) {
                return this.isValid() && (S(time) && time.isValid() || Wt(time).isValid()) ? Zt({
                    to: this,
                    from: time
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }, bn.fromNow = function (e) {
                return this.from(Wt(), e)
            }, bn.to = function (time, e) {
                return this.isValid() && (S(time) && time.isValid() || Wt(time).isValid()) ? Zt({
                    from: this,
                    to: time
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }, bn.toNow = function (e) {
                return this.to(Wt(), e)
            }, bn.get = function (e) {
                return E(this[e = B(e)]) ? this[e]() : this
            }, bn.invalidAt = function () {
                return L(this).overflow
            }, bn.isAfter = function (input, e) {
                var t = S(input) ? input : Wt(input);
                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (e = B(e) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(e).valueOf())
            }, bn.isBefore = function (input, e) {
                var t = S(input) ? input : Wt(input);
                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (e = B(e) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(e).valueOf() < t.valueOf())
            }, bn.isBetween = function (e, t, n, r) {
                var o = S(e) ? e : Wt(e), d = S(t) ? t : Wt(t);
                return !!(this.isValid() && o.isValid() && d.isValid()) && (("(" === (r = r || "()")[0] ? this.isAfter(o, n) : !this.isBefore(o, n)) && (")" === r[1] ? this.isBefore(d, n) : !this.isAfter(d, n)))
            }, bn.isSame = function (input, e) {
                var t, n = S(input) ? input : Wt(input);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = B(e) || "millisecond") ? this.valueOf() === n.valueOf() : (t = n.valueOf(), this.clone().startOf(e).valueOf() <= t && t <= this.clone().endOf(e).valueOf()))
            }, bn.isSameOrAfter = function (input, e) {
                return this.isSame(input, e) || this.isAfter(input, e)
            }, bn.isSameOrBefore = function (input, e) {
                return this.isSame(input, e) || this.isBefore(input, e)
            }, bn.isValid = function () {
                return Y(this)
            }, bn.lang = un, bn.locale = _n, bn.localeData = ln, bn.max = Ft, bn.min = At, bn.parsingFlags = function () {
                return M({}, L(this))
            }, bn.set = function (e, t) {
                if ("object" == typeof e) {
                    var i, n = function (e) {
                        var u, t = [];
                        for (u in e) l(e, u) && t.push({unit: u, priority: K[u]});
                        return t.sort((function (a, b) {
                            return a.priority - b.priority
                        })), t
                    }(e = G(e));
                    for (i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit])
                } else if (E(this[e = B(e)])) return this[e](t);
                return this
            }, bn.startOf = function (e) {
                var time, t;
                if (void 0 === (e = B(e)) || "millisecond" === e || !this.isValid()) return this;
                switch (t = this._isUTC ? hn : cn, e) {
                    case"year":
                        time = t(this.year(), 0, 1);
                        break;
                    case"quarter":
                        time = t(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case"month":
                        time = t(this.year(), this.month(), 1);
                        break;
                    case"week":
                        time = t(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case"isoWeek":
                        time = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case"day":
                    case"date":
                        time = t(this.year(), this.month(), this.date());
                        break;
                    case"hour":
                        time = this._d.valueOf(), time -= mn(time + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                        break;
                    case"minute":
                        time = this._d.valueOf(), time -= mn(time, 6e4);
                        break;
                    case"second":
                        time = this._d.valueOf(), time -= mn(time, 1e3)
                }
                return this._d.setTime(time), o.updateOffset(this, !0), this
            }, bn.subtract = an, bn.toArray = function () {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }, bn.toObject = function () {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }, bn.toDate = function () {
                return new Date(this.valueOf())
            }, bn.toISOString = function (e) {
                if (!this.isValid()) return null;
                var t = !0 !== e, n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? I(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", I(n, "Z")) : I(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, bn.inspect = function () {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e, t, n, r = "moment", o = "";
                return this.isLocal() || (r = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", o = "Z"), e = "[" + r + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = o + '[")]', this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
            }, "undefined" != typeof Symbol && null != Symbol.for && (bn[Symbol.for("nodejs.util.inspect.custom")] = function () {
                return "Moment<" + this.format() + ">"
            }), bn.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
            }, bn.toString = function () {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, bn.unix = function () {
                return Math.floor(this.valueOf() / 1e3)
            }, bn.valueOf = function () {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, bn.creationData = function () {
                return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
            }, bn.eraName = function () {
                var i, e, t, n = this.localeData().eras();
                for (i = 0, e = n.length; i < e; ++i) {
                    if (t = this.startOf("day").valueOf(), n[i].since <= t && t <= n[i].until) return n[i].name;
                    if (n[i].until <= t && t <= n[i].since) return n[i].name
                }
                return ""
            }, bn.eraNarrow = function () {
                var i, e, t, n = this.localeData().eras();
                for (i = 0, e = n.length; i < e; ++i) {
                    if (t = this.startOf("day").valueOf(), n[i].since <= t && t <= n[i].until) return n[i].narrow;
                    if (n[i].until <= t && t <= n[i].since) return n[i].narrow
                }
                return ""
            }, bn.eraAbbr = function () {
                var i, e, t, n = this.localeData().eras();
                for (i = 0, e = n.length; i < e; ++i) {
                    if (t = this.startOf("day").valueOf(), n[i].since <= t && t <= n[i].until) return n[i].abbr;
                    if (n[i].until <= t && t <= n[i].since) return n[i].abbr
                }
                return ""
            }, bn.eraYear = function () {
                var i, e, t, n, r = this.localeData().eras();
                for (i = 0, e = r.length; i < e; ++i) if (t = r[i].since <= r[i].until ? 1 : -1, n = this.startOf("day").valueOf(), r[i].since <= n && n <= r[i].until || r[i].until <= n && n <= r[i].since) return (this.year() - o(r[i].since).year()) * t + r[i].offset;
                return this.year()
            }, bn.year = Ce, bn.isLeapYear = function () {
                return X(this.year())
            }, bn.weekYear = function (input) {
                return yn.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, bn.isoWeekYear = function (input) {
                return yn.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, bn.quarter = bn.quarters = function (input) {
                return null == input ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (input - 1) + this.month() % 3)
            }, bn.month = Fe, bn.daysInMonth = function () {
                return He(this.year(), this.month())
            }, bn.week = bn.weeks = function (input) {
                var e = this.localeData().week(this);
                return null == input ? e : this.add(7 * (input - e), "d")
            }, bn.isoWeek = bn.isoWeeks = function (input) {
                var e = $e(this, 1, 4).week;
                return null == input ? e : this.add(7 * (input - e), "d")
            }, bn.weeksInYear = function () {
                var e = this.localeData()._week;
                return Ve(this.year(), e.dow, e.doy)
            }, bn.weeksInWeekYear = function () {
                var e = this.localeData()._week;
                return Ve(this.weekYear(), e.dow, e.doy)
            }, bn.isoWeeksInYear = function () {
                return Ve(this.year(), 1, 4)
            }, bn.isoWeeksInISOWeekYear = function () {
                return Ve(this.isoWeekYear(), 1, 4)
            }, bn.date = Yn, bn.day = bn.days = function (input) {
                if (!this.isValid()) return null != input ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != input ? (input = function (input, e) {
                    return "string" != typeof input ? input : isNaN(input) ? "number" == typeof (input = e.weekdaysParse(input)) ? input : null : parseInt(input, 10)
                }(input, this.localeData()), this.add(input - e, "d")) : e
            }, bn.weekday = function (input) {
                if (!this.isValid()) return null != input ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == input ? e : this.add(input - e, "d")
            }, bn.isoWeekday = function (input) {
                if (!this.isValid()) return null != input ? this : NaN;
                if (null != input) {
                    var e = function (input, e) {
                        return "string" == typeof input ? e.weekdaysParse(input) % 7 || 7 : isNaN(input) ? null : input
                    }(input, this.localeData());
                    return this.day(this.day() % 7 ? e : e - 7)
                }
                return this.day() || 7
            }, bn.dayOfYear = function (input) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == input ? e : this.add(input - e, "d")
            }, bn.hour = bn.hours = ot, bn.minute = bn.minutes = gn, bn.second = bn.seconds = vn, bn.millisecond = bn.milliseconds = Dn, bn.utcOffset = function (input, e, t) {
                var n, r = this._offset || 0;
                if (!this.isValid()) return null != input ? this : NaN;
                if (null != input) {
                    if ("string" == typeof input) {
                        if (null === (input = $t(Le, input))) return this
                    } else Math.abs(input) < 16 && !t && (input *= 60);
                    return !this._isUTC && e && (n = Bt(this)), this._offset = input, this._isUTC = !0, null != n && this.add(n, "m"), r !== input && (!e || this._changeInProgress ? tn(this, Zt(input - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, o.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? r : Bt(this)
            }, bn.utc = function (e) {
                return this.utcOffset(0, e)
            }, bn.local = function (e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Bt(this), "m")), this
            }, bn.parseZone = function () {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
                    var e = $t(ye, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }, bn.hasAlignedHourOffset = function (input) {
                return !!this.isValid() && (input = input ? Wt(input).utcOffset() : 0, (this.utcOffset() - input) % 60 == 0)
            }, bn.isDST = function () {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, bn.isLocal = function () {
                return !!this.isValid() && !this._isUTC
            }, bn.isUtcOffset = function () {
                return !!this.isValid() && this._isUTC
            }, bn.isUtc = Gt, bn.isUTC = Gt, bn.zoneAbbr = function () {
                return this._isUTC ? "UTC" : ""
            }, bn.zoneName = function () {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, bn.dates = j("dates accessor is deprecated. Use date instead.", Yn), bn.months = j("months accessor is deprecated. Use month instead", Fe), bn.years = j("years accessor is deprecated. Use year instead", Ce), bn.zone = j("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function (input, e) {
                return null != input ? ("string" != typeof input && (input = -input), this.utcOffset(input, e), this) : -this.utcOffset()
            })), bn.isDSTShifted = j("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function () {
                if (!c(this._isDSTShifted)) return this._isDSTShifted;
                var e, t = {};
                return w(t, this), (t = Pt(t))._a ? (e = t._isUTC ? y(t._a) : Wt(t._a), this._isDSTShifted = this.isValid() && function (e, t, n) {
                    var i, r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), d = 0;
                    for (i = 0; i < r; i++) (n && e[i] !== t[i] || !n && ee(e[i]) !== ee(t[i])) && d++;
                    return d + o
                }(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
            }));
            var Sn = A.prototype;

            function Hn(e, t, n, r) {
                var o = pt(), d = y().set(r, t);
                return o[n](d, e)
            }

            function jn(e, t, n) {
                if (h(e) && (t = e, e = void 0), e = e || "", null != t) return Hn(e, t, n, "month");
                var i, r = [];
                for (i = 0; i < 12; i++) r[i] = Hn(e, i, n, "month");
                return r
            }

            function xn(e, t, n, r) {
                "boolean" == typeof e ? (h(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, h(t) && (n = t, t = void 0), t = t || "");
                var i, o = pt(), d = e ? o._week.dow : 0, _ = [];
                if (null != n) return Hn(t, (n + d) % 7, r, "day");
                for (i = 0; i < 7; i++) _[i] = Hn(t, (i + d) % 7, r, "day");
                return _
            }

            Sn.calendar = function (e, t, n) {
                var output = this._calendar[e] || this._calendar.sameElse;
                return E(output) ? output.call(t, n) : output
            }, Sn.longDateFormat = function (e) {
                var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.match(z).map((function (e) {
                    return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
                })).join(""), this._longDateFormat[e])
            }, Sn.invalidDate = function () {
                return this._invalidDate
            }, Sn.ordinal = function (e) {
                return this._ordinal.replace("%d", e)
            }, Sn.preparse = Tn, Sn.postformat = Tn, Sn.relativeTime = function (e, t, n, r) {
                var output = this._relativeTime[n];
                return E(output) ? output(e, t, n, r) : output.replace(/%d/i, e)
            }, Sn.pastFuture = function (e, output) {
                var t = this._relativeTime[e > 0 ? "future" : "past"];
                return E(t) ? t(output) : t.replace(/%s/i, output)
            }, Sn.set = function (e) {
                var t, i;
                for (i in e) l(e, i) && (E(t = e[i]) ? this[i] = t : this["_" + i] = t);
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, Sn.eras = function (e, t) {
                var i, n, r, d = this._eras || pt("en")._eras;
                for (i = 0, n = d.length; i < n; ++i) {
                    switch (typeof d[i].since) {
                        case"string":
                            r = o(d[i].since).startOf("day"), d[i].since = r.valueOf()
                    }
                    switch (typeof d[i].until) {
                        case"undefined":
                            d[i].until = 1 / 0;
                            break;
                        case"string":
                            r = o(d[i].until).startOf("day").valueOf(), d[i].until = r.valueOf()
                    }
                }
                return d
            }, Sn.erasParse = function (e, t, n) {
                var i, r, o, abbr, d, _ = this.eras();
                for (e = e.toUpperCase(), i = 0, r = _.length; i < r; ++i) if (o = _[i].name.toUpperCase(), abbr = _[i].abbr.toUpperCase(), d = _[i].narrow.toUpperCase(), n) switch (t) {
                    case"N":
                    case"NN":
                    case"NNN":
                        if (abbr === e) return _[i];
                        break;
                    case"NNNN":
                        if (o === e) return _[i];
                        break;
                    case"NNNNN":
                        if (d === e) return _[i]
                } else if ([o, abbr, d].indexOf(e) >= 0) return _[i]
            }, Sn.erasConvertYear = function (e, t) {
                var n = e.since <= e.until ? 1 : -1;
                return void 0 === t ? o(e.since).year() : o(e.since).year() + (t - e.offset) * n
            }, Sn.erasAbbrRegex = function (e) {
                return l(this, "_erasAbbrRegex") || Mn.call(this), e ? this._erasAbbrRegex : this._erasRegex
            }, Sn.erasNameRegex = function (e) {
                return l(this, "_erasNameRegex") || Mn.call(this), e ? this._erasNameRegex : this._erasRegex
            }, Sn.erasNarrowRegex = function (e) {
                return l(this, "_erasNarrowRegex") || Mn.call(this), e ? this._erasNarrowRegex : this._erasRegex
            }, Sn.months = function (e, t) {
                return e ? d(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Oe).test(t) ? "format" : "standalone"][e.month()] : d(this._months) ? this._months : this._months.standalone
            }, Sn.monthsShort = function (e, t) {
                return e ? d(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Oe.test(t) ? "format" : "standalone"][e.month()] : d(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, Sn.monthsParse = function (e, t, n) {
                var i, r, o;
                if (this._monthsParseExact) return We.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                    if (r = y([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                    if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                    if (!n && this._monthsParse[i].test(e)) return i
                }
            }, Sn.monthsRegex = function (e) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Ee), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }, Sn.monthsShortRegex = function (e) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Pe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, Sn.week = function (e) {
                return $e(e, this._week.dow, this._week.doy).week
            }, Sn.firstDayOfYear = function () {
                return this._week.doy
            }, Sn.firstDayOfWeek = function () {
                return this._week.dow
            }, Sn.weekdays = function (e, t) {
                var n = d(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? Be(n, this._week.dow) : e ? n[e.day()] : n
            }, Sn.weekdaysMin = function (e) {
                return !0 === e ? Be(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }, Sn.weekdaysShort = function (e) {
                return !0 === e ? Be(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }, Sn.weekdaysParse = function (e, t, n) {
                var i, r, o;
                if (this._weekdaysParseExact) return et.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                    if (r = y([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
                    if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
                    if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
                    if (!n && this._weekdaysParse[i].test(e)) return i
                }
            }, Sn.weekdaysRegex = function (e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Ze), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, Sn.weekdaysShortRegex = function (e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, Sn.weekdaysMinRegex = function (e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, Sn.isPM = function (input) {
                return "p" === (input + "").toLowerCase().charAt(0)
            }, Sn.meridiem = function (e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }, ft("en", {
                eras: [{
                    since: "0001-01-01",
                    until: 1 / 0,
                    offset: 1,
                    name: "Anno Domini",
                    narrow: "AD",
                    abbr: "AD"
                }, {since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC"}],
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 === ee(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                }
            }), o.lang = j("moment.lang is deprecated. Use moment.locale instead.", ft), o.langData = j("moment.langData is deprecated. Use moment.localeData instead.", pt);
            var On = Math.abs;

            function Pn(e, input, t, n) {
                var r = Zt(input, t);
                return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble()
            }

            function En(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function Wn(e) {
                return 4800 * e / 146097
            }

            function An(e) {
                return 146097 * e / 4800
            }

            function Fn(e) {
                return function () {
                    return this.as(e)
                }
            }

            var zn = Fn("ms"), Nn = Fn("s"), Cn = Fn("m"), Rn = Fn("h"), Jn = Fn("d"), In = Fn("w"), Un = Fn("M"),
                $n = Fn("Q"), Vn = Fn("y");

            function Bn(e) {
                return function () {
                    return this.isValid() ? this._data[e] : NaN
                }
            }

            var Gn = Bn("milliseconds"), qn = Bn("seconds"), Kn = Bn("minutes"), Zn = Bn("hours"), Xn = Bn("days"),
                Qn = Bn("months"), ea = Bn("years"), ta = Math.round,
                na = {ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11};

            function aa(e, t, n, r, o) {
                return o.relativeTime(t || 1, !!n, e, r)
            }

            var sa = Math.abs;

            function ra(e) {
                return (e > 0) - (e < 0) || +e
            }

            function ia() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, n, s, r, o, d, _, l = sa(this._milliseconds) / 1e3, m = sa(this._days), c = sa(this._months),
                    h = this.asSeconds();
                return h ? (e = Q(l / 60), t = Q(e / 60), l %= 60, e %= 60, n = Q(c / 12), c %= 12, s = l ? l.toFixed(3).replace(/\.?0+$/, "") : "", r = h < 0 ? "-" : "", o = ra(this._months) !== ra(h) ? "-" : "", d = ra(this._days) !== ra(h) ? "-" : "", _ = ra(this._milliseconds) !== ra(h) ? "-" : "", r + "P" + (n ? o + n + "Y" : "") + (c ? o + c + "M" : "") + (m ? d + m + "D" : "") + (t || e || l ? "T" : "") + (t ? _ + t + "H" : "") + (e ? _ + e + "M" : "") + (l ? _ + s + "S" : "")) : "P0D"
            }

            var oa = Ct.prototype;
            return oa.isValid = function () {
                return this._isValid
            }, oa.abs = function () {
                var data = this._data;
                return this._milliseconds = On(this._milliseconds), this._days = On(this._days), this._months = On(this._months), data.milliseconds = On(data.milliseconds), data.seconds = On(data.seconds), data.minutes = On(data.minutes), data.hours = On(data.hours), data.months = On(data.months), data.years = On(data.years), this
            }, oa.add = function (input, e) {
                return Pn(this, input, e, 1)
            }, oa.subtract = function (input, e) {
                return Pn(this, input, e, -1)
            }, oa.as = function (e) {
                if (!this.isValid()) return NaN;
                var t, n, r = this._milliseconds;
                if ("month" === (e = B(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, n = this._months + Wn(t), e) {
                    case"month":
                        return n;
                    case"quarter":
                        return n / 3;
                    case"year":
                        return n / 12
                } else switch (t = this._days + Math.round(An(this._months)), e) {
                    case"week":
                        return t / 7 + r / 6048e5;
                    case"day":
                        return t + r / 864e5;
                    case"hour":
                        return 24 * t + r / 36e5;
                    case"minute":
                        return 1440 * t + r / 6e4;
                    case"second":
                        return 86400 * t + r / 1e3;
                    case"millisecond":
                        return Math.floor(864e5 * t) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, oa.asMilliseconds = zn, oa.asSeconds = Nn, oa.asMinutes = Cn, oa.asHours = Rn, oa.asDays = Jn, oa.asWeeks = In, oa.asMonths = Un, oa.asQuarters = $n, oa.asYears = Vn, oa.valueOf = function () {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * ee(this._months / 12) : NaN
            }, oa._bubble = function () {
                var e, t, n, r, o, d = this._milliseconds, _ = this._days, l = this._months, data = this._data;
                return d >= 0 && _ >= 0 && l >= 0 || d <= 0 && _ <= 0 && l <= 0 || (d += 864e5 * En(An(l) + _), _ = 0, l = 0), data.milliseconds = d % 1e3, e = Q(d / 1e3), data.seconds = e % 60, t = Q(e / 60), data.minutes = t % 60, n = Q(t / 60), data.hours = n % 24, _ += Q(n / 24), o = Q(Wn(_)), l += o, _ -= En(An(o)), r = Q(l / 12), l %= 12, data.days = _, data.months = l, data.years = r, this
            }, oa.clone = function () {
                return Zt(this)
            }, oa.get = function (e) {
                return e = B(e), this.isValid() ? this[e + "s"]() : NaN
            }, oa.milliseconds = Gn, oa.seconds = qn, oa.minutes = Kn, oa.hours = Zn, oa.days = Xn, oa.weeks = function () {
                return Q(this.days() / 7)
            }, oa.months = Qn, oa.years = ea, oa.humanize = function (e, t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var n, output, r = !1, th = na;
                return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (r = e), "object" == typeof t && (th = Object.assign({}, na, t), null != t.s && null == t.ss && (th.ss = t.s - 1)), n = this.localeData(), output = function (e, t, n, r) {
                    var o = Zt(e).abs(), d = ta(o.as("s")), _ = ta(o.as("m")), l = ta(o.as("h")), m = ta(o.as("d")),
                        c = ta(o.as("M")), h = ta(o.as("w")), f = ta(o.as("y")),
                        a = d <= n.ss && ["s", d] || d < n.s && ["ss", d] || _ <= 1 && ["m"] || _ < n.m && ["mm", _] || l <= 1 && ["h"] || l < n.h && ["hh", l] || m <= 1 && ["d"] || m < n.d && ["dd", m];
                    return null != n.w && (a = a || h <= 1 && ["w"] || h < n.w && ["ww", h]), (a = a || c <= 1 && ["M"] || c < n.M && ["MM", c] || f <= 1 && ["y"] || ["yy", f])[2] = t, a[3] = +e > 0, a[4] = r, aa.apply(null, a)
                }(this, !r, th, n), r && (output = n.pastFuture(+this, output)), n.postformat(output)
            }, oa.toISOString = ia, oa.toString = ia, oa.toJSON = ia, oa.locale = _n, oa.localeData = ln, oa.toIsoString = j("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ia), oa.lang = un, J("X", 0, 0, "unix"), J("x", 0, 0, "valueOf"), ge("x", pe), ge("X", /[+-]?\d+(\.\d{1,3})?/), be("X", (function (input, e, t) {
                t._d = new Date(1e3 * parseFloat(input))
            })), be("x", (function (input, e, t) {
                t._d = new Date(ee(input))
            })), o.version = "2.27.0", t = Wt, o.fn = bn, o.min = function () {
                var e = [].slice.call(arguments, 0);
                return zt("isBefore", e)
            }, o.max = function () {
                var e = [].slice.call(arguments, 0);
                return zt("isAfter", e)
            }, o.now = function () {
                return Date.now ? Date.now() : +new Date
            }, o.utc = y, o.unix = function (input) {
                return Wt(1e3 * input)
            }, o.months = function (e, t) {
                return jn(e, t, "months")
            }, o.isDate = f, o.locale = ft, o.invalid = k, o.duration = Zt, o.isMoment = S, o.weekdays = function (e, t, n) {
                return xn(e, t, n, "weekdays")
            }, o.parseZone = function () {
                return Wt.apply(null, arguments).parseZone()
            }, o.localeData = pt, o.isDuration = Rt, o.monthsShort = function (e, t) {
                return jn(e, t, "monthsShort")
            }, o.weekdaysMin = function (e, t, n) {
                return xn(e, t, n, "weekdaysMin")
            }, o.defineLocale = Mt, o.updateLocale = function (e, t) {
                if (null != t) {
                    var n, r, o = _t;
                    null != ut[e] && null != ut[e].parentLocale ? ut[e].set(W(ut[e]._config, t)) : (null != (r = ht(e)) && (o = r._config), t = W(o, t), null == r && (t.abbr = e), (n = new A(t)).parentLocale = ut[e], ut[e] = n), ft(e)
                } else null != ut[e] && (null != ut[e].parentLocale ? (ut[e] = ut[e].parentLocale, e === ft() && ft(e)) : null != ut[e] && delete ut[e]);
                return ut[e]
            }, o.locales = function () {
                return x(ut)
            }, o.weekdaysShort = function (e, t, n) {
                return xn(e, t, n, "weekdaysShort")
            }, o.normalizeUnits = B, o.relativeTimeRounding = function (e) {
                return void 0 === e ? ta : "function" == typeof e && (ta = e, !0)
            }, o.relativeTimeThreshold = function (e, t) {
                return void 0 !== na[e] && (void 0 === t ? na[e] : (na[e] = t, "s" === e && (na.ss = t - 1), !0))
            }, o.calendarFormat = function (e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }, o.prototype = bn, o.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, o
        }()
    }).call(this, n(306)(e))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    var r = {
        name: "NoSsr",
        functional: !0,
        props: {placeholder: String, placeholderTag: {type: String, default: "div"}},
        render: function (e, t) {
            var n = t.parent, r = t.slots, o = t.props, d = r(), _ = d.default;
            void 0 === _ && (_ = []);
            var l = d.placeholder;
            return n._isMounted ? _ : (n.$once("hook:mounted", (function () {
                n.$forceUpdate()
            })), o.placeholderTag && (o.placeholder || l) ? e(o.placeholderTag, {class: ["no-ssr-placeholder"]}, o.placeholder || l) : _.length > 0 ? _.map((function () {
                return e(!1)
            })) : e(!1))
        }
    };
    e.exports = r
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map((function (t) {
                var content = function (e, t) {
                    var content = e[1] || "", n = e[3];
                    if (!n) return content;
                    if (t && "function" == typeof btoa) {
                        var r = (d = n, _ = btoa(unescape(encodeURIComponent(JSON.stringify(d)))), data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(_), "/*# ".concat(data, " */")),
                            o = n.sources.map((function (source) {
                                return "/*# sourceURL=".concat(n.sourceRoot || "").concat(source, " */")
                            }));
                        return [content].concat(o).concat([r]).join("\n")
                    }
                    var d, _, data;
                    return [content].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], " {").concat(content, "}") : content
            })).join("")
        }, t.i = function (e, n, r) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var o = {};
            if (r) for (var i = 0; i < this.length; i++) {
                var d = this[i][0];
                null != d && (o[d] = !0)
            }
            for (var _ = 0; _ < e.length; _++) {
                var l = [].concat(e[_]);
                r && o[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l))
            }
        }, t
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
            var o = t[i], d = o[0], _ = {id: e + ":" + i, css: o[1], media: o[2], sourceMap: o[3]};
            r[d] ? r[d].parts.push(_) : n.push(r[d] = {id: d, parts: [_]})
        }
        return n
    }

    n.r(t), n.d(t, "default", (function () {
        return M
    }));
    var o = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var d = {}, head = o && (document.head || document.getElementsByTagName("head")[0]), _ = null, l = 0, m = !1,
        c = function () {
        }, h = null, f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function M(e, t, n, o) {
        m = n, h = o || {};
        var _ = r(e, t);
        return y(_), function (t) {
            for (var n = [], i = 0; i < _.length; i++) {
                var o = _[i];
                (l = d[o.id]).refs--, n.push(l)
            }
            t ? y(_ = r(e, t)) : _ = [];
            for (i = 0; i < n.length; i++) {
                var l;
                if (0 === (l = n[i]).refs) {
                    for (var m = 0; m < l.parts.length; m++) l.parts[m]();
                    delete d[l.id]
                }
            }
        }
    }

    function y(e) {
        for (var i = 0; i < e.length; i++) {
            var t = e[i], n = d[t.id];
            if (n) {
                n.refs++;
                for (var r = 0; r < n.parts.length; r++) n.parts[r](t.parts[r]);
                for (; r < t.parts.length; r++) n.parts.push(Y(t.parts[r]));
                n.parts.length > t.parts.length && (n.parts.length = t.parts.length)
            } else {
                var o = [];
                for (r = 0; r < t.parts.length; r++) o.push(Y(t.parts[r]));
                d[t.id] = {id: t.id, refs: 1, parts: o}
            }
        }
    }

    function L() {
        var e = document.createElement("style");
        return e.type = "text/css", head.appendChild(e), e
    }

    function Y(e) {
        var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
        if (r) {
            if (m) return c;
            r.parentNode.removeChild(r)
        }
        if (f) {
            var o = l++;
            r = _ || (_ = L()), t = v.bind(null, r, o, !1), n = v.bind(null, r, o, !0)
        } else r = L(), t = w.bind(null, r), n = function () {
            r.parentNode.removeChild(r)
        };
        return t(e), function (r) {
            if (r) {
                if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                t(e = r)
            } else n()
        }
    }

    var k, D = (k = [], function (e, t) {
        return k[e] = t, k.filter(Boolean).join("\n")
    });

    function v(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = D(t, o); else {
            var d = document.createTextNode(o), _ = e.childNodes;
            _[t] && e.removeChild(_[t]), _.length ? e.insertBefore(d, _[t]) : e.appendChild(d)
        }
    }

    function w(e, t) {
        var n = t.css, r = t.media, o = t.sourceMap;
        if (r && e.setAttribute("media", r), h.ssrId && e.setAttribute("data-vue-ssr-id", t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n; else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    var r = {
        name: "ClientOnly",
        functional: !0,
        props: {placeholder: String, placeholderTag: {type: String, default: "div"}},
        render: function (e, t) {
            var n = t.parent, r = t.slots, o = t.props, d = r(), _ = d.default;
            void 0 === _ && (_ = []);
            var l = d.placeholder;
            return n._isMounted ? _ : (n.$once("hook:mounted", (function () {
                n.$forceUpdate()
            })), o.placeholderTag && (o.placeholder || l) ? e(o.placeholderTag, {class: ["client-only-placeholder"]}, o.placeholder || l) : _.length > 0 ? _.map((function () {
                return e(!1)
            })) : e(!1))
        }
    };
    e.exports = r
}, , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (input) {
                return /^nm$/i.test(input)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
            n = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"},
            r = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }, o = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, d = function (u) {
                return function (e, t, n, d) {
                    var _ = r(e), l = o[u][r(e)];
                    return 2 === _ && (l = l[t ? 0 : 1]), l.replace(/%d/i, e)
                }
            },
            _ = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar", {
            months: _,
            monthsShort: _,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (input) {
                return "م" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: d("s"),
                ss: d("s"),
                m: d("m"),
                mm: d("m"),
                h: d("h"),
                hh: d("h"),
                d: d("d"),
                dd: d("d"),
                M: d("M"),
                MM: d("M"),
                y: d("y"),
                yy: d("y")
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                    return n[e]
                })).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }, n = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, r = function (u) {
                return function (e, r, o, d) {
                    var _ = t(e), l = n[u][t(e)];
                    return 2 === _ && (l = l[r ? 0 : 1]), l.replace(/%d/i, e)
                }
            },
            o = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-dz", {
            months: o,
            monthsShort: o,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (input) {
                return "م" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: r("s"),
                ss: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 0, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ar-kw", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 0, doy: 12}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0"}, n = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }, r = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, o = function (u) {
                return function (e, t, o, d) {
                    var _ = n(e), l = r[u][n(e)];
                    return 2 === _ && (l = l[t ? 0 : 1]), l.replace(/%d/i, e)
                }
            },
            d = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-ly", {
            months: d,
            monthsShort: d,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (input) {
                return "م" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: o("s"),
                ss: o("s"),
                m: o("m"),
                mm: o("m"),
                h: o("h"),
                hh: o("h"),
                d: o("d"),
                dd: o("d"),
                M: o("M"),
                MM: o("M"),
                y: o("y"),
                yy: o("y")
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 6, doy: 12}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
            n = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"};
        e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (input) {
                return "م" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                    return n[e]
                })).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function (input) {
                return /^(gündüz|axşam)$/.test(input)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function (e) {
                if (0 === e) return e + "-ıncı";
                var a = e % 10;
                return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n) {
            var r, o;
            return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (r = +e, o = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            }[n].split("_"), r % 10 == 1 && r % 100 != 11 ? o[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? o[1] : o[2])
        }

        e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function () {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "дзень",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function (input) {
                return /^(дня|вечара)$/.test(input)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                    case"D":
                        return e + "-га";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Миналата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Миналия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10, n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০"},
            n = {"১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0"};
        e.defineLocale("bn", {
            months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function (e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠"},
            n = {"༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0"};
        e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
            monthsShortRegex: /^(ཟླ་\d{1,2})/,
            monthsParseExact: !0,
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function (e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n) {
            return e + " " + function (text, e) {
                return 2 === e ? function (text) {
                    var e = {m: "v", b: "v", d: "z"};
                    return void 0 === e[text.charAt(0)] ? text : e[text.charAt(0)] + text.substring(1)
                }(text) : text
            }({mm: "munutenn", MM: "miz", dd: "devezh"}[n], e)
        }

        var n = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
            r = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            o = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
        e.defineLocale("br", {
            months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParse: o,
            fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
            shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
            minWeekdaysParse: o,
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
            monthsShortStrictRegex: /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY HH:mm",
                LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warcʼhoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Decʼh da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s ʼzo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function (e) {
                    switch (function e(t) {
                        return t > 9 ? e(t % 10) : t
                    }(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function (e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {dow: 1, doy: 4},
            meridiemParse: /a.m.|g.m./,
            isPM: function (e) {
                return "g.m." === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "a.m." : "g.m."
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
                case"ss":
                    return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case"m":
                    return t ? "jedna minuta" : "jedne minute";
                case"mm":
                    return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case"h":
                    return t ? "jedan sat" : "jednog sata";
                case"hh":
                    return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case"dd":
                    return r += 1 === e ? "dan" : "dana";
                case"MM":
                    return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case"yy":
                    return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[jučer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextDay: function () {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastDay: function () {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
                var output = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (output = "a"), e + output
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
            r = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
            o = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

        function d(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function _(e, t, n, r) {
            var o = e + " ";
            switch (n) {
                case"s":
                    return t || r ? "pár sekund" : "pár sekundami";
                case"ss":
                    return t || r ? o + (d(e) ? "sekundy" : "sekund") : o + "sekundami";
                case"m":
                    return t ? "minuta" : r ? "minutu" : "minutou";
                case"mm":
                    return t || r ? o + (d(e) ? "minuty" : "minut") : o + "minutami";
                case"h":
                    return t ? "hodina" : r ? "hodinu" : "hodinou";
                case"hh":
                    return t || r ? o + (d(e) ? "hodiny" : "hodin") : o + "hodinami";
                case"d":
                    return t || r ? "den" : "dnem";
                case"dd":
                    return t || r ? o + (d(e) ? "dny" : "dní") : o + "dny";
                case"M":
                    return t || r ? "měsíc" : "měsícem";
                case"MM":
                    return t || r ? o + (d(e) ? "měsíce" : "měsíců") : o + "měsíci";
                case"y":
                    return t || r ? "rok" : "rokem";
                case"yy":
                    return t || r ? o + (d(e) ? "roky" : "let") : o + "lety"
            }
        }

        e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                }, lastDay: "[včera v] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: _,
                ss: _,
                m: _,
                mm: _,
                h: _,
                hh: _,
                d: _,
                dd: _,
                M: _,
                MM: _,
                y: _,
                yy: _
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function (output) {
                    return output + (/сехет$/i.exec(output) ? "рен" : /ҫул$/i.exec(output) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (e) {
                var output = "";
                return e > 20 ? output = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (output = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + output
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n, r) {
            var o = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? o[n][0] : o[n][1]
        }

        e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n, r) {
            var o = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? o[n][0] : o[n][1]
        }

        e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n, r) {
            var o = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? o[n][0] : o[n][1]
        }

        e.defineLocale("de-ch", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function (input) {
                return "މފ" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 7, doy: 12}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function (e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function (input) {
                return "μ" === (input + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function (e, t) {
                var input, output = this._calendarEl[e], n = t && t.hours();
                return input = output, ("undefined" != typeof Function && input instanceof Function || "[object Function]" === Object.prototype.toString.call(input)) && (output = output.apply(t)), output.replace("{}", n % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {dow: 0, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("en-in", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("en-sg", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
            weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "[la] D[-an de] MMMM, YYYY",
                LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (input) {
                return "p" === input.charAt(0).toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd[n je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasintan] dddd[n je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "kelkaj sekundoj",
                ss: "%d sekundoj",
                m: "unu minuto",
                mm: "%d minutoj",
                h: "unu horo",
                hh: "%d horoj",
                d: "unu tago",
                dd: "%d tagoj",
                M: "unu monato",
                MM: "%d monatoj",
                y: "unu jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4},
            invalidDate: "Fecha invalida"
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n, r) {
            var o = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? o[n][2] ? o[n][2] : o[n][1] : r ? o[n][0] : o[n][1]
        }

        e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰"},
            n = {"۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0"};
        e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (input) {
                return /بعد از ظهر/.test(input)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "%d ثانیه",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/[۰-۹]/g, (function (e) {
                    return n[e]
                })).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {dow: 6, doy: 12}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

        function r(e, r, o, d) {
            var _ = "";
            switch (o) {
                case"s":
                    return d ? "muutaman sekunnin" : "muutama sekunti";
                case"ss":
                    _ = d ? "sekunnin" : "sekuntia";
                    break;
                case"m":
                    return d ? "minuutin" : "minuutti";
                case"mm":
                    _ = d ? "minuutin" : "minuuttia";
                    break;
                case"h":
                    return d ? "tunnin" : "tunti";
                case"hh":
                    _ = d ? "tunnin" : "tuntia";
                    break;
                case"d":
                    return d ? "päivän" : "päivä";
                case"dd":
                    _ = d ? "päivän" : "päivää";
                    break;
                case"M":
                    return d ? "kuukauden" : "kuukausi";
                case"MM":
                    _ = d ? "kuukauden" : "kuukautta";
                    break;
                case"y":
                    return d ? "vuoden" : "vuosi";
                case"yy":
                    _ = d ? "vuoden" : "vuotta"
            }
            return _ = function (e, r) {
                return e < 10 ? r ? n[e] : t[e] : e
            }(e, d) + " " + _
        }

        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("fil", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaður",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
            n = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
        e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsRegex: t,
            monthsShortRegex: t,
            monthsStrictRegex: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
            monthsShortStrictRegex: /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
                switch (t) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
                switch (t) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ga", {
            months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"],
            monthsShort: ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"],
            monthsParseExact: !0,
            weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
            weekdaysShort: ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
            weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[Amárach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[Inné ag] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s ó shin",
                s: "cúpla soicind",
                ss: "%d soicind",
                m: "nóiméad",
                mm: "%d nóiméad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "lá",
                dd: "%d lá",
                M: "mí",
                MM: "%d míonna",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            monthsParseExact: !0,
            weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                }, nextDay: function () {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                }, nextWeek: function () {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                }, lastDay: function () {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                }, lastWeek: function () {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n, r) {
            var o = {
                s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
                ss: [e + " सॅकंडांनी", e + " सॅकंड"],
                m: ["एका मिणटान", "एक मिनूट"],
                mm: [e + " मिणटांनी", e + " मिणटां"],
                h: ["एका वरान", "एक वर"],
                hh: [e + " वरांनी", e + " वरां"],
                d: ["एका दिसान", "एक दीस"],
                dd: [e + " दिसांनी", e + " दीस"],
                M: ["एका म्हयन्यान", "एक म्हयनो"],
                MM: [e + " म्हयन्यानी", e + " म्हयने"],
                y: ["एका वर्सान", "एक वर्स"],
                yy: [e + " वर्सांनी", e + " वर्सां"]
            };
            return r ? o[n][0] : o[n][1]
        }

        e.defineLocale("gom-deva", {
            months: {
                standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
            weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
            weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [वाजतां]",
                LTS: "A h:mm:ss [वाजतां]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [वाजतां]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
                llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
            },
            calendar: {
                sameDay: "[आयज] LT",
                nextDay: "[फाल्यां] LT",
                nextWeek: "[फुडलो] dddd[,] LT",
                lastDay: "[काल] LT",
                lastWeek: "[फाटलो] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s आदीं",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"D":
                        return e + "वेर";
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                    case"w":
                    case"W":
                        return e
                }
            },
            week: {dow: 1, doy: 4},
            meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "राती" === t ? e < 4 ? e : e + 12 : "सकाळीं" === t ? e : "दनपारां" === t ? e > 12 ? e : e + 12 : "सांजे" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "राती" : e < 12 ? "सकाळीं" : e < 16 ? "दनपारां" : e < 20 ? "सांजे" : "राती"
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n, r) {
            var o = {
                s: ["thoddea sekondamni", "thodde sekond"],
                ss: [e + " sekondamni", e + " sekond"],
                m: ["eka mintan", "ek minut"],
                mm: [e + " mintamni", e + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [e + " voramni", e + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disamni", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineamni", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsamni", e + " vorsam"]
            };
            return r ? o[n][0] : o[n][1]
        }

        e.defineLocale("gom-latn", {
            months: {
                standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Fuddlo] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fattlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"D":
                        return e + "er";
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                    case"w":
                    case"W":
                        return e
                }
            },
            week: {dow: 1, doy: 4},
            meridiemParse: /rati|sokallim|donparam|sanje/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "૧", 2: "૨", 3: "૩", 4: "૪", 5: "૫", 6: "૬", 7: "૭", 8: "૮", 9: "૯", 0: "૦"},
            n = {"૧": "1", "૨": "2", "૩": "3", "૪": "4", "૫": "5", "૬": "6", "૭": "7", "૮": "8", "૯": "9", "૦": "0"};
        e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પહેલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function (e) {
                return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function (e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function (e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function (e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function (e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function (input) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input)
            },
            meridiem: function (e, t, n) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
        e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
                case"ss":
                    return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case"m":
                    return t ? "jedna minuta" : "jedne minute";
                case"mm":
                    return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case"h":
                    return t ? "jedan sat" : "jednog sata";
                case"hh":
                    return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case"dd":
                    return r += 1 === e ? "dan" : "dana";
                case"MM":
                    return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case"yy":
                    return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM YYYY",
                LLL: "Do MMMM YYYY H:mm",
                LLLL: "dddd, Do MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[jučer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prošlu] [nedjelju] [u] LT";
                        case 3:
                            return "[prošlu] [srijedu] [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

        function n(e, t, n, r) {
            var o = e;
            switch (n) {
                case"s":
                    return r || t ? "néhány másodperc" : "néhány másodperce";
                case"ss":
                    return o + (r || t) ? " másodperc" : " másodperce";
                case"m":
                    return "egy" + (r || t ? " perc" : " perce");
                case"mm":
                    return o + (r || t ? " perc" : " perce");
                case"h":
                    return "egy" + (r || t ? " óra" : " órája");
                case"hh":
                    return o + (r || t ? " óra" : " órája");
                case"d":
                    return "egy" + (r || t ? " nap" : " napja");
                case"dd":
                    return o + (r || t ? " nap" : " napja");
                case"M":
                    return "egy" + (r || t ? " hónap" : " hónapja");
                case"MM":
                    return o + (r || t ? " hónap" : " hónapja");
                case"y":
                    return "egy" + (r || t ? " év" : " éve");
                case"yy":
                    return o + (r || t ? " év" : " éve")
            }
            return ""
        }

        function r(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }

        e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function (input) {
                return "u" === input.charAt(1).toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                    return r.call(this, !0)
                }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
                    return r.call(this, !1)
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function () {
                    return "dddd [օրը ժամը] LT"
                }, lastWeek: function () {
                    return "[անցած] dddd [օրը ժամը] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function (input) {
                return /^(ցերեկվա|երեկոյան)$/.test(input)
            },
            meridiem: function (e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"DDD":
                    case"w":
                    case"W":
                    case"DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function n(e, n, r, o) {
            var d = e + " ";
            switch (r) {
                case"s":
                    return n || o ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case"ss":
                    return t(e) ? d + (n || o ? "sekúndur" : "sekúndum") : d + "sekúnda";
                case"m":
                    return n ? "mínúta" : "mínútu";
                case"mm":
                    return t(e) ? d + (n || o ? "mínútur" : "mínútum") : n ? d + "mínúta" : d + "mínútu";
                case"hh":
                    return t(e) ? d + (n || o ? "klukkustundir" : "klukkustundum") : d + "klukkustund";
                case"d":
                    return n ? "dagur" : o ? "dag" : "degi";
                case"dd":
                    return t(e) ? n ? d + "dagar" : d + (o ? "daga" : "dögum") : n ? d + "dagur" : d + (o ? "dag" : "degi");
                case"M":
                    return n ? "mánuður" : o ? "mánuð" : "mánuði";
                case"MM":
                    return t(e) ? n ? d + "mánuðir" : d + (o ? "mánuði" : "mánuðum") : n ? d + "mánuður" : d + (o ? "mánuð" : "mánuði");
                case"y":
                    return n || o ? "ár" : "ári";
                case"yy":
                    return t(e) ? d + (n || o ? "ár" : "árum") : d + (n || o ? "ár" : "ári")
            }
        }

        e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, nextDay: function () {
                    return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, nextWeek: function () {
                    return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, lastDay: function () {
                    return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                }, lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT";
                        default:
                            return "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "tra %s",
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (s) {
                    return (/^[0-9].+$/.test(s) ? "tra" : "in") + " " + s
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ja", {
            eras: [{since: "2019-05-01", offset: 1, name: "令和", narrow: "㋿", abbr: "R"}, {
                since: "1989-01-08",
                until: "2019-04-30",
                offset: 1,
                name: "平成",
                narrow: "㍻",
                abbr: "H"
            }, {
                since: "1926-12-25",
                until: "1989-01-07",
                offset: 1,
                name: "昭和",
                narrow: "㍼",
                abbr: "S"
            }, {
                since: "1912-07-30",
                until: "1926-12-24",
                offset: 1,
                name: "大正",
                narrow: "㍽",
                abbr: "T"
            }, {
                since: "1873-01-01",
                until: "1912-07-29",
                offset: 6,
                name: "明治",
                narrow: "㍾",
                abbr: "M"
            }, {
                since: "0001-01-01",
                until: "1873-12-31",
                offset: 1,
                name: "西暦",
                narrow: "AD",
                abbr: "AD"
            }, {since: "0000-12-31", until: -1 / 0, offset: 1, name: "紀元前", narrow: "BC", abbr: "BC"}],
            eraYearOrdinalRegex: /(元|\d+)年/,
            eraYearOrdinalParse: function (input, e) {
                return "元" === e[1] ? 1 : parseInt(e[1] || input, 10)
            },
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日(ddd) HH:mm"
            },
            meridiemParse: /午前|午後/i,
            isPM: function (input) {
                return "午後" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: function (e) {
                    return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
                }, lastDay: "[昨日] LT", lastWeek: function (e) {
                    return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT"
                }, sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function (e, t) {
                switch (t) {
                    case"y":
                        return 1 === e ? "元年" : e + "年";
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ka", {
            months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function (s) {
                    return s.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, (function (e, t, n) {
                        return "ი" === n ? t + "ში" : t + n + "ში"
                    }))
                },
                past: function (s) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(s) ? s.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(s) ? s.replace(/წელი$/, "წლის წინ") : s
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "១", 2: "២", 3: "៣", 4: "៤", 5: "៥", 6: "៦", 7: "៧", 8: "៨", 9: "៩", 0: "០"},
            n = {"១": "1", "២": "2", "៣": "3", "៤": "4", "៥": "5", "៦": "6", "៧": "7", "៨": "8", "៩": "9", "០": "0"};
        e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function (input) {
                return "ល្ងាច" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ព្រឹក" : "ល្ងាច"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function (e) {
                return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦"},
            n = {"೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0"};
        e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function (e) {
                return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function (e) {
                return e + "ನೇ"
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "일";
                    case"M":
                        return e + "월";
                    case"w":
                    case"W":
                        return e + "주";
                    default:
                        return e
                }
            },
            meridiemParse: /오전|오후/,
            isPM: function (e) {
                return "오후" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "오전" : "오후"
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
            n = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"},
            r = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
        e.defineLocale("ku", {
            months: r,
            monthsShort: r,
            weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function (input) {
                return /ئێواره‌/.test(input)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "به‌یانی" : "ئێواره‌"
            },
            calendar: {
                sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                nextDay: "[به‌یانی كاتژمێر] LT",
                nextWeek: "dddd [كاتژمێر] LT",
                lastDay: "[دوێنێ كاتژمێر] LT",
                lastWeek: "dddd [كاتژمێر] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "له‌ %s",
                past: "%s",
                s: "چه‌ند چركه‌یه‌ك",
                ss: "چركه‌ %d",
                m: "یه‌ك خوله‌ك",
                mm: "%d خوله‌ك",
                h: "یه‌ك كاتژمێر",
                hh: "%d كاتژمێر",
                d: "یه‌ك ڕۆژ",
                dd: "%d ڕۆژ",
                M: "یه‌ك مانگ",
                MM: "%d مانگ",
                y: "یه‌ك ساڵ",
                yy: "%d ساڵ"
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                    return n[e]
                })).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кечээ саат] LT",
                lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function (e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n, r) {
            var o = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? o[n][0] : o[n][1]
        }

        function n(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10;
                return n(0 === t ? e / 10 : t)
            }
            if (e < 1e4) {
                for (; e >= 10;) e /= 10;
                return n(e)
            }
            return n(e /= 1e3)
        }

        e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function (e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function (e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function (input) {
                return "ຕອນແລງ" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function (e) {
                return "ທີ່" + e
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };

        function n(e, t, n, r) {
            return t ? o(n)[0] : r ? o(n)[1] : o(n)[2]
        }

        function r(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }

        function o(e) {
            return t[e].split("_")
        }

        function d(e, t, d, _) {
            var l = e + " ";
            return 1 === e ? l + n(0, t, d[0], _) : t ? l + (r(e) ? o(d)[1] : o(d)[0]) : _ ? l + o(d)[1] : l + (r(e) ? o(d)[1] : o(d)[2])
        }

        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s", past: "prieš %s", s: function (e, t, n, r) {
                    return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
                }, ss: d, m: n, mm: d, h: n, hh: d, d: n, dd: d, M: n, MM: d, y: n, yy: d
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
                return e + "-oji"
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };

        function n(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }

        function r(e, r, o) {
            return e + " " + n(t[o], e, r)
        }

        function o(e, r, o) {
            return n(t[o], e, r)
        }

        e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s", past: "pirms %s", s: function (e, t) {
                    return t ? "dažas sekundes" : "dažām sekundēm"
                }, ss: r, m: o, mm: r, h: o, hh: r, d: o, dd: r, M: o, MM: r, y: o, yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, n, r) {
                var o = t.words[r];
                return 1 === r.length ? n ? o[0] : o[1] : e + " " + t.correctGrammaticalCase(e, o)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juče u] LT", lastWeek: function () {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "една минута",
                mm: "%d минути",
                h: "еден час",
                hh: "%d часа",
                d: "еден ден",
                dd: "%d дена",
                M: "еден месец",
                MM: "%d месеци",
                y: "една година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10, n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n, r) {
            switch (n) {
                case"s":
                    return t ? "хэдхэн секунд" : "хэдхэн секундын";
                case"ss":
                    return e + (t ? " секунд" : " секундын");
                case"m":
                case"mm":
                    return e + (t ? " минут" : " минутын");
                case"h":
                case"hh":
                    return e + (t ? " цаг" : " цагийн");
                case"d":
                case"dd":
                    return e + (t ? " өдөр" : " өдрийн");
                case"M":
                case"MM":
                    return e + (t ? " сар" : " сарын");
                case"y":
                case"yy":
                    return e + (t ? " жил" : " жилийн");
                default:
                    return e
            }
        }

        e.defineLocale("mn", {
            months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
            monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
            monthsParseExact: !0,
            weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
            weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
            weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY оны MMMMын D",
                LLL: "YYYY оны MMMMын D HH:mm",
                LLLL: "dddd, YYYY оны MMMMын D HH:mm"
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function (input) {
                return "ҮХ" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ҮӨ" : "ҮХ"
            },
            calendar: {
                sameDay: "[Өнөөдөр] LT",
                nextDay: "[Маргааш] LT",
                nextWeek: "[Ирэх] dddd LT",
                lastDay: "[Өчигдөр] LT",
                lastWeek: "[Өнгөрсөн] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s дараа",
                past: "%s өмнө",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + " өдөр";
                    default:
                        return e
                }
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};

        function r(e, t, n, r) {
            var output = "";
            if (t) switch (n) {
                case"s":
                    output = "काही सेकंद";
                    break;
                case"ss":
                    output = "%d सेकंद";
                    break;
                case"m":
                    output = "एक मिनिट";
                    break;
                case"mm":
                    output = "%d मिनिटे";
                    break;
                case"h":
                    output = "एक तास";
                    break;
                case"hh":
                    output = "%d तास";
                    break;
                case"d":
                    output = "एक दिवस";
                    break;
                case"dd":
                    output = "%d दिवस";
                    break;
                case"M":
                    output = "एक महिना";
                    break;
                case"MM":
                    output = "%d महिने";
                    break;
                case"y":
                    output = "एक वर्ष";
                    break;
                case"yy":
                    output = "%d वर्षे"
            } else switch (n) {
                case"s":
                    output = "काही सेकंदां";
                    break;
                case"ss":
                    output = "%d सेकंदां";
                    break;
                case"m":
                    output = "एका मिनिटा";
                    break;
                case"mm":
                    output = "%d मिनिटां";
                    break;
                case"h":
                    output = "एका तासा";
                    break;
                case"hh":
                    output = "%d तासां";
                    break;
                case"d":
                    output = "एका दिवसा";
                    break;
                case"dd":
                    output = "%d दिवसां";
                    break;
                case"M":
                    output = "एका महिन्या";
                    break;
                case"MM":
                    output = "%d महिन्यां";
                    break;
                case"y":
                    output = "एका वर्षा";
                    break;
                case"yy":
                    output = "%d वर्षां"
            }
            return output.replace(/%d/i, e)
        }

        e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "पहाटे" === t || "सकाळी" === t ? e : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t ? e >= 12 ? e : e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e >= 0 && e < 6 ? "पहाटे" : e < 12 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀"},
            n = {"၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0"};
        e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function (e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
        e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            o = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            o = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, r) {
                return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("oc-lnc", {
            months: {
                standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),
                format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: "[uèi a] LT",
                nextDay: "[deman a] LT",
                nextWeek: "dddd [a] LT",
                lastDay: "[ièr a] LT",
                lastWeek: "dddd [passat a] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "unas segondas",
                ss: "%d segondas",
                m: "una minuta",
                mm: "%d minutas",
                h: "una ora",
                hh: "%d oras",
                d: "un jorn",
                dd: "%d jorns",
                M: "un mes",
                MM: "%d meses",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
                var output = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (output = "a"), e + output
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦"},
            n = {"੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0"};
        e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "[ਅਗਲਾ] dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function (e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

        function r(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function o(e, t, n) {
            var o = e + " ";
            switch (n) {
                case"ss":
                    return o + (r(e) ? "sekundy" : "sekund");
                case"m":
                    return t ? "minuta" : "minutę";
                case"mm":
                    return o + (r(e) ? "minuty" : "minut");
                case"h":
                    return t ? "godzina" : "godzinę";
                case"hh":
                    return o + (r(e) ? "godziny" : "godzin");
                case"MM":
                    return o + (r(e) ? "miesiące" : "miesięcy");
                case"yy":
                    return o + (r(e) ? "lata" : "lat")
            }
        }

        e.defineLocale("pl", {
            months: function (e, r) {
                return e ? "" === r ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(r) ? n[e.month()] : t[e.month()] : t
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                }, lastDay: "[Wczoraj o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: o,
                m: o,
                mm: o,
                h: o,
                hh: o,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: o,
                y: "rok",
                yy: o
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("pt", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("pt-br", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
            weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n) {
            var r = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }[n]
        }

        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n) {
            var r, o;
            return "m" === n ? t ? "минута" : "минуту" : e + " " + (r = +e, o = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[n].split("_"), r % 10 == 1 && r % 100 != 11 ? o[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? o[1] : o[2])
        }

        var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня, в] LT",
                nextDay: "[Завтра, в] LT",
                lastDay: "[Вчера, в] LT",
                nextWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd, [в] LT"
                    }
                },
                lastWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd, [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: t,
                m: t,
                mm: t,
                h: "час",
                hh: t,
                d: "день",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (input) {
                return /^(дня|вечера)$/.test(input)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                        return e + "-й";
                    case"D":
                        return e + "-го";
                    case"w":
                    case"W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
            n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (input) {
                return "شام" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function (e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function (input) {
                return "ප.ව." === input || "පස් වරු" === input
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

        function r(e) {
            return e > 1 && e < 5
        }

        function o(e, t, n, o) {
            var d = e + " ";
            switch (n) {
                case"s":
                    return t || o ? "pár sekúnd" : "pár sekundami";
                case"ss":
                    return t || o ? d + (r(e) ? "sekundy" : "sekúnd") : d + "sekundami";
                case"m":
                    return t ? "minúta" : o ? "minútu" : "minútou";
                case"mm":
                    return t || o ? d + (r(e) ? "minúty" : "minút") : d + "minútami";
                case"h":
                    return t ? "hodina" : o ? "hodinu" : "hodinou";
                case"hh":
                    return t || o ? d + (r(e) ? "hodiny" : "hodín") : d + "hodinami";
                case"d":
                    return t || o ? "deň" : "dňom";
                case"dd":
                    return t || o ? d + (r(e) ? "dni" : "dní") : d + "dňami";
                case"M":
                    return t || o ? "mesiac" : "mesiacom";
                case"MM":
                    return t || o ? d + (r(e) ? "mesiace" : "mesiacov") : d + "mesiacmi";
                case"y":
                    return t || o ? "rok" : "rokom";
                case"yy":
                    return t || o ? d + (r(e) ? "roky" : "rokov") : d + "rokmi"
            }
        }

        e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                }, lastDay: "[včera o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: o,
                ss: o,
                m: o,
                mm: o,
                h: o,
                hh: o,
                d: o,
                dd: o,
                M: o,
                MM: o,
                y: o,
                yy: o
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n, r) {
            var o = e + " ";
            switch (n) {
                case"s":
                    return t || r ? "nekaj sekund" : "nekaj sekundami";
                case"ss":
                    return o += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || r ? "sekundi" : "sekundah" : e < 5 ? t || r ? "sekunde" : "sekundah" : "sekund";
                case"m":
                    return t ? "ena minuta" : "eno minuto";
                case"mm":
                    return o += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
                case"h":
                    return t ? "ena ura" : "eno uro";
                case"hh":
                    return o += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
                case"d":
                    return t || r ? "en dan" : "enim dnem";
                case"dd":
                    return o += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
                case"M":
                    return t || r ? "en mesec" : "enim mesecem";
                case"MM":
                    return o += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
                case"y":
                    return t || r ? "eno leto" : "enim letom";
                case"yy":
                    return o += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
            }
        }

        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                }, lastDay: "[včeraj ob] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (input) {
                return "M" === input.charAt(0)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, n, r) {
                var o = t.words[r];
                return 1 === r.length ? n ? o[0] : o[1] : e + " " + t.correctGrammaticalCase(e, o)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juče u] LT", lastWeek: function () {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, n, r) {
                var o = t.words[r];
                return 1 === r.length ? n ? o[0] : o[1] : e + " " + t.correctGrammaticalCase(e, o)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                }, lastDay: "[јуче у] LT", lastWeek: function () {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
            ordinal: function (e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === b || 2 === b ? ":a" : ":e")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "hh:mm A",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "siku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦"},
            n = {"௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0"};
        e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function (e) {
                return e + "வது"
            },
            preparse: function (e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function (e) {
                    return n[e]
                }))
            },
            postformat: function (e) {
                return e.replace(/\d/g, (function (e) {
                    return t[e]
                }))
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (e, t, n) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t || "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {dow: 0, doy: 6}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "segundu balun",
                ss: "segundu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум"
        };
        e.defineLocale("tg", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Имрӯз соати] LT",
                nextDay: "[Пагоҳ соати] LT",
                lastDay: "[Дирӯз соати] LT",
                nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "баъди %s",
                past: "%s пеш",
                s: "якчанд сония",
                m: "як дақиқа",
                mm: "%d дақиқа",
                h: "як соат",
                hh: "%d соат",
                d: "як рӯз",
                dd: "%d рӯз",
                M: "як моҳ",
                MM: "%d моҳ",
                y: "як сол",
                yy: "%d сол"
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function (e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (input) {
                return "หลังเที่ยง" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {
            1: "'inji",
            5: "'inji",
            8: "'inji",
            70: "'inji",
            80: "'inji",
            2: "'nji",
            7: "'nji",
            20: "'nji",
            50: "'nji",
            3: "'ünji",
            4: "'ünji",
            100: "'ünji",
            6: "'njy",
            9: "'unjy",
            10: "'unjy",
            30: "'unjy",
            60: "'ynjy",
            90: "'ynjy"
        };
        e.defineLocale("tk", {
            months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),
            monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
            weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
            weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
            weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün sagat] LT",
                nextDay: "[ertir sagat] LT",
                nextWeek: "[indiki] dddd [sagat] LT",
                lastDay: "[düýn] LT",
                lastWeek: "[geçen] dddd [sagat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s soň",
                past: "%s öň",
                s: "birnäçe sekunt",
                m: "bir minut",
                mm: "%d minut",
                h: "bir sagat",
                hh: "%d sagat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir aý",
                MM: "%d aý",
                y: "bir ýyl",
                yy: "%d ýyl"
            },
            ordinal: function (e, n) {
                switch (n) {
                    case"d":
                    case"D":
                    case"Do":
                    case"DD":
                        return e;
                    default:
                        if (0 === e) return e + "'unjy";
                        var a = e % 10;
                        return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function n(e, n, r, o) {
            var d = function (e) {
                var n = Math.floor(e % 1e3 / 100), r = Math.floor(e % 100 / 10), o = e % 10, d = "";
                return n > 0 && (d += t[n] + "vatlh"), r > 0 && (d += ("" !== d ? " " : "") + t[r] + "maH"), o > 0 && (d += ("" !== d ? " " : "") + t[o]), "" === d ? "pagh" : d
            }(e);
            switch (r) {
                case"ss":
                    return d + " lup";
                case"mm":
                    return d + " tup";
                case"hh":
                    return d + " rep";
                case"dd":
                    return d + " jaj";
                case"MM":
                    return d + " jar";
                case"yy":
                    return d + " DIS"
            }
        }

        e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function (output) {
                    var time = output;
                    return time = -1 !== output.indexOf("jaj") ? time.slice(0, -3) + "leS" : -1 !== output.indexOf("jar") ? time.slice(0, -3) + "waQ" : -1 !== output.indexOf("DIS") ? time.slice(0, -3) + "nem" : time + " pIq"
                },
                past: function (output) {
                    var time = output;
                    return time = -1 !== output.indexOf("jaj") ? time.slice(0, -3) + "Hu’" : -1 !== output.indexOf("jar") ? time.slice(0, -3) + "wen" : -1 !== output.indexOf("DIS") ? time.slice(0, -3) + "ben" : time + " ret"
                },
                s: "puS lup",
                ss: n,
                m: "wa’ tup",
                mm: n,
                h: "wa’ rep",
                hh: n,
                d: "wa’ jaj",
                dd: n,
                M: "wa’ jar",
                MM: n,
                y: "wa’ DIS",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            meridiem: function (e, t, n) {
                return e < 12 ? n ? "öö" : "ÖÖ" : n ? "ös" : "ÖS"
            },
            meridiemParse: /öö|ÖÖ|ös|ÖS/,
            isPM: function (input) {
                return "ös" === input || "ÖS" === input
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function (e, n) {
                switch (n) {
                    case"d":
                    case"D":
                    case"Do":
                    case"DD":
                        return e;
                    default:
                        if (0 === e) return e + "'ıncı";
                        var a = e % 10;
                        return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n, r) {
            var o = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return r || t ? o[n][0] : o[n][1]
        }

        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (input) {
                return "d'o" === input.toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {dow: 6, doy: 12}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {dow: 6, doy: 12}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("ug-cn", {
            months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
            weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function (e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "يېرىم كېچە" : r < 900 ? "سەھەر" : r < 1130 ? "چۈشتىن بۇرۇن" : r < 1230 ? "چۈش" : r < 1800 ? "چۈشتىن كېيىن" : "كەچ"
            },
            calendar: {
                sameDay: "[بۈگۈن سائەت] LT",
                nextDay: "[ئەتە سائەت] LT",
                nextWeek: "[كېلەركى] dddd [سائەت] LT",
                lastDay: "[تۆنۈگۈن] LT",
                lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s كېيىن",
                past: "%s بۇرۇن",
                s: "نەچچە سېكونت",
                ss: "%d سېكونت",
                m: "بىر مىنۇت",
                mm: "%d مىنۇت",
                h: "بىر سائەت",
                hh: "%d سائەت",
                d: "بىر كۈن",
                dd: "%d كۈن",
                M: "بىر ئاي",
                MM: "%d ئاي",
                y: "بىر يىل",
                yy: "%d يىل"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "-كۈنى";
                    case"w":
                    case"W":
                        return e + "-ھەپتە";
                    default:
                        return e
                }
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";

        function t(e, t, n) {
            var r, o;
            return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (r = +e, o = {
                ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            }[n].split("_"), r % 10 == 1 && r % 100 != 11 ? o[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? o[1] : o[2])
        }

        function n(e) {
            return function () {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }

        e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: function (e, t) {
                var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
            },
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: n("[Сьогодні "),
                nextDay: n("[Завтра "),
                lastDay: n("[Вчора "),
                nextWeek: n("[У] dddd ["),
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return n("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return n("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: t,
                m: t,
                mm: t,
                h: "годину",
                hh: t,
                d: "день",
                dd: t,
                M: "місяць",
                MM: t,
                y: "рік",
                yy: t
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (input) {
                return /^(дня|вечора)$/.test(input)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return e + "-й";
                    case"D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
            n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (input) {
                return "شام" === input
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {dow: 1, doy: 7}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function (input) {
                return /^ch$/i.test(input)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần trước lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
                var b = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function (e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: function (e) {
                    return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
                }, lastDay: "[昨天]LT", lastWeek: function (e) {
                    return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT"
                }, sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s后",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {dow: 1, doy: 4}
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1200 ? "上午" : 1200 === r ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("zh-mo", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "D/M/YYYY",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(0))
}, function (e, t, n) {
    !function (e) {
        "use strict";
        e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                var r = 100 * e + t;
                return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(n(0))
}, function (e, t, n) {
    "use strict";
    t.a = function (e, t) {
        return t = t || {}, new Promise((function (n, r) {
            var s = new XMLHttpRequest, o = [], u = [], i = {}, a = function () {
                return {
                    ok: 2 == (s.status / 100 | 0),
                    statusText: s.statusText,
                    status: s.status,
                    url: s.responseURL,
                    text: function () {
                        return Promise.resolve(s.responseText)
                    },
                    json: function () {
                        return Promise.resolve(JSON.parse(s.responseText))
                    },
                    blob: function () {
                        return Promise.resolve(new Blob([s.response]))
                    },
                    clone: a,
                    headers: {
                        keys: function () {
                            return o
                        }, entries: function () {
                            return u
                        }, get: function (e) {
                            return i[e.toLowerCase()]
                        }, has: function (e) {
                            return e.toLowerCase() in i
                        }
                    }
                }
            };
            for (var d in s.open(t.method || "get", e, !0), s.onload = function () {
                s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function (e, t, n) {
                    o.push(t = t.toLowerCase()), u.push([t, n]), i[t] = i[t] ? i[t] + "," + n : n
                })), n(a())
            }, s.onerror = r, s.withCredentials = "include" == t.credentials, t.headers) s.setRequestHeader(d, t.headers[d]);
            s.send(t.body || null)
        }))
    }
}, , function (e, t, n) {
    "use strict";
    var r = function (e) {
        return function (e) {
            return !!e && "object" == typeof e
        }(e) && !function (e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function (e) {
                return e.$$typeof === o
            }(e)
        }(e)
    };
    var o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

    function d(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? h((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
        var n
    }

    function _(e, source, t) {
        return e.concat(source).map((function (element) {
            return d(element, t)
        }))
    }

    function l(e) {
        return Object.keys(e).concat(function (e) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function (symbol) {
                return e.propertyIsEnumerable(symbol)
            })) : []
        }(e))
    }

    function m(object, e) {
        try {
            return e in object
        } catch (e) {
            return !1
        }
    }

    function c(e, source, t) {
        var n = {};
        return t.isMergeableObject(e) && l(e).forEach((function (r) {
            n[r] = d(e[r], t)
        })), l(source).forEach((function (r) {
            (function (e, t) {
                return m(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, r) || (m(e, r) && t.isMergeableObject(source[r]) ? n[r] = function (e, t) {
                if (!t.customMerge) return h;
                var n = t.customMerge(e);
                return "function" == typeof n ? n : h
            }(r, t)(e[r], source[r], t) : n[r] = d(source[r], t))
        })), n
    }

    function h(e, source, t) {
        (t = t || {}).arrayMerge = t.arrayMerge || _, t.isMergeableObject = t.isMergeableObject || r, t.cloneUnlessOtherwiseSpecified = d;
        var n = Array.isArray(source);
        return n === Array.isArray(e) ? n ? t.arrayMerge(e, source, t) : c(e, source, t) : d(source, t)
    }

    h.all = function (e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function (e, n) {
            return h(e, n, t)
        }), {})
    };
    var f = h;
    e.exports = f
}, function (e, t) {
    e.exports = function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 0)
    }([function (e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = n(1);
        e.exports = function (t, n) {
            var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                a = "object" === ("undefined" == typeof document ? "undefined" : r(document)) && "string" == typeof document.cookie,
                s = "object" === (void 0 === t ? "undefined" : r(t)) && "object" === (void 0 === n ? "undefined" : r(n)) && void 0 !== e,
                u = !a && !s || a && s, d = function (e) {
                    if (s) {
                        var r = t.headers.cookie || "";
                        return e && (r = (r = n.getHeaders())["set-cookie"] ? r["set-cookie"].map((function (e) {
                            return e.split(";")[0]
                        })).join(";") : ""), r
                    }
                    if (a) return document.cookie || ""
                }, _ = function () {
                    var e = n.getHeader("Set-Cookie");
                    return (e = "string" == typeof e ? [e] : e) || []
                }, p = function (e) {
                    return n.setHeader("Set-Cookie", e)
                }, l = function (e, t) {
                    if (!t) return e;
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return e
                    }
                }, m = {
                    parseJSON: i, set: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {path: "/"};
                        if (!u) if (t = "object" === (void 0 === t ? "undefined" : r(t)) ? JSON.stringify(t) : t, s) {
                            var i = _();
                            i.push(o.serialize(e, t, n)), p(i)
                        } else document.cookie = o.serialize(e, t, n)
                    }, setAll: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        u || Array.isArray(e) && e.forEach((function (e) {
                            var t = e.name, n = void 0 === t ? "" : t, r = e.value, o = void 0 === r ? "" : r, i = e.opts,
                                a = void 0 === i ? {path: "/"} : i;
                            m.set(n, o, a)
                        }))
                    }, get: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                fromRes: !1,
                                parseJSON: m.parseJSON
                            };
                        if (u) return "";
                        var n = o.parse(d(t.fromRes)), r = n[e];
                        return l(r, t.parseJSON)
                    }, getAll: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            fromRes: !1,
                            parseJSON: m.parseJSON
                        };
                        if (u) return {};
                        var t = o.parse(d(e.fromRes));
                        for (var n in t) t[n] = l(t[n], e.parseJSON);
                        return t
                    }, remove: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {path: "/"};
                        if (!u) {
                            var n = m.get(e);
                            t.expires = new Date(0), void 0 !== n && m.set(e, "", t)
                        }
                    }, removeAll: function () {
                        if (!u) {
                            var e = o.parse(d());
                            for (var t in e) m.remove(t)
                        }
                    }, nodeCookie: o
                };
            return m
        }
    }, function (e, t, n) {
        "use strict";

        function i(e, t) {
            try {
                return t(e)
            } catch (t) {
                return e
            }
        }

        t.parse = function (e, t) {
            if ("string" != typeof e) throw new TypeError("argument str must be a string");
            for (var n = {}, r = t || {}, o = e.split(u), s = r.decode || a, d = 0; d < o.length; d++) {
                var _ = o[d], p = _.indexOf("=");
                if (!(p < 0)) {
                    var l = _.substr(0, p).trim(), m = _.substr(++p, _.length).trim();
                    '"' == m[0] && (m = m.slice(1, -1)), null == n[l] && (n[l] = i(m, s))
                }
            }
            return n
        }, t.serialize = function (e, t, n) {
            var o = n || {}, d = o.encode || s;
            if ("function" != typeof d) throw new TypeError("option encode is invalid");
            if (!r.test(e)) throw new TypeError("argument name is invalid");
            var i = d(t);
            if (i && !r.test(i)) throw new TypeError("argument val is invalid");
            var a = e + "=" + i;
            if (null != o.maxAge) {
                var u = o.maxAge - 0;
                if (isNaN(u)) throw new Error("maxAge should be a Number");
                a += "; Max-Age=" + Math.floor(u)
            }
            if (o.domain) {
                if (!r.test(o.domain)) throw new TypeError("option domain is invalid");
                a += "; Domain=" + o.domain
            }
            if (o.path) {
                if (!r.test(o.path)) throw new TypeError("option path is invalid");
                a += "; Path=" + o.path
            }
            if (o.expires) {
                if ("function" != typeof o.expires.toUTCString) throw new TypeError("option expires is invalid");
                a += "; Expires=" + o.expires.toUTCString()
            }
            if (o.httpOnly && (a += "; HttpOnly"), o.secure && (a += "; Secure"), o.sameSite) switch ("string" == typeof o.sameSite ? o.sameSite.toLowerCase() : o.sameSite) {
                case!0:
                    a += "; SameSite=Strict";
                    break;
                case"lax":
                    a += "; SameSite=Lax";
                    break;
                case"strict":
                    a += "; SameSite=Strict";
                    break;
                case"none":
                    a += "; SameSite=None";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid")
            }
            return a
        };
        var a = decodeURIComponent, s = encodeURIComponent, u = /; */, r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
    }])
}, , , function (e, t, n) {
    "undefined" != typeof self && self, e.exports = function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "/", n(n.s = 8)
    }([function (e, t, n) {
        var r = n(4), i = n(5), o = n(6);
        e.exports = function (e) {
            return r(e) || i(e) || o()
        }
    }, function (e, t) {
        function n(t) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function (e) {
                return typeof e
            } : e.exports = n = function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, n(t)
        }

        e.exports = n
    }, function (e, t, n) {
    }, function (e, t) {
        e.exports = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }
    }, function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(2);
        n.n(r).a
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0), i = n.n(r), o = n(1), s = n.n(o), a = n(3), d = n.n(a), _ = {
            props: {autoscroll: {type: Boolean, default: !0}}, watch: {
                typeAheadPointer: function () {
                    this.autoscroll && this.maybeAdjustScroll()
                }
            }, methods: {
                maybeAdjustScroll: function () {
                    var e,
                        t = (null === (e = this.$refs.dropdownMenu) || void 0 === e ? void 0 : e.children[this.typeAheadPointer]) || !1;
                    if (t) {
                        var n = this.getDropdownViewport(), r = t.getBoundingClientRect(), i = r.top, o = r.bottom,
                            s = r.height;
                        if (i < n.top) return this.$refs.dropdownMenu.scrollTop = t.offsetTop;
                        if (o > n.bottom) return this.$refs.dropdownMenu.scrollTop = t.offsetTop - (n.height - s)
                    }
                }, getDropdownViewport: function () {
                    return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
                        height: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        }, u = {
            data: function () {
                return {typeAheadPointer: -1}
            }, watch: {
                filteredOptions: function () {
                    for (var e = 0; e < this.filteredOptions.length; e++) if (this.selectable(this.filteredOptions[e])) {
                        this.typeAheadPointer = e;
                        break
                    }
                }
            }, methods: {
                typeAheadUp: function () {
                    for (var e = this.typeAheadPointer - 1; e >= 0; e--) if (this.selectable(this.filteredOptions[e])) {
                        this.typeAheadPointer = e;
                        break
                    }
                }, typeAheadDown: function () {
                    for (var e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++) if (this.selectable(this.filteredOptions[e])) {
                        this.typeAheadPointer = e;
                        break
                    }
                }, typeAheadSelect: function () {
                    var e = this.filteredOptions[this.typeAheadPointer];
                    e && this.select(e)
                }
            }
        }, p = {
            props: {loading: {type: Boolean, default: !1}}, data: function () {
                return {mutableLoading: !1}
            }, watch: {
                search: function () {
                    this.$emit("search", this.search, this.toggleLoading)
                }, loading: function (e) {
                    this.mutableLoading = e
                }
            }, methods: {
                toggleLoading: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return this.mutableLoading = null == e ? !this.mutableLoading : e
                }
            }
        };

        function l(e, t, n, r, i, o, s, a) {
            var d, _ = "function" == typeof e ? e.options : e;
            if (t && (_.render = t, _.staticRenderFns = n, _._compiled = !0), r && (_.functional = !0), o && (_._scopeId = "data-v-" + o), s ? (d = function (e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
            }, _._ssrRegister = d) : i && (d = a ? function () {
                i.call(this, this.$root.$options.shadowRoot)
            } : i), d) if (_.functional) {
                _._injectStyles = d;
                var u = _.render;
                _.render = function (e, t) {
                    return d.call(t), u(e, t)
                }
            } else {
                var p = _.beforeCreate;
                _.beforeCreate = p ? [].concat(p, d) : [d]
            }
            return {exports: e, options: _}
        }

        var m = {
            Deselect: l({}, (function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "10",
                        height: "10"
                    }
                }, [t("path", {attrs: {d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])
            }), [], !1, null, null, null).exports, OpenIndicator: l({}, (function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "14",
                        height: "10"
                    }
                }, [t("path", {attrs: {d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])
            }), [], !1, null, null, null).exports
        }, c = {
            inserted: function (e, t, n) {
                var r = n.context;
                if (r.appendToBody) {
                    var i = r.$refs.toggle.getBoundingClientRect(), o = i.height, s = i.top, a = i.left, d = i.width,
                        _ = window.scrollX || window.pageXOffset, u = window.scrollY || window.pageYOffset;
                    e.unbindPosition = r.calculatePosition(e, r, {
                        width: d + "px",
                        left: _ + a + "px",
                        top: u + s + o + "px"
                    }), document.body.appendChild(e)
                }
            }, unbind: function (e, t, n) {
                n.context.appendToBody && (e.unbindPosition && "function" == typeof e.unbindPosition && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e))
            }
        }, b = 0;

        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function (t) {
                    d()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var M = {
            components: f({}, m), mixins: [_, u, p], directives: {appendToBody: c}, props: {
                value: {},
                components: {
                    type: Object, default: function () {
                        return {}
                    }
                },
                options: {
                    type: Array, default: function () {
                        return []
                    }
                },
                disabled: {type: Boolean, default: !1},
                clearable: {type: Boolean, default: !0},
                searchable: {type: Boolean, default: !0},
                multiple: {type: Boolean, default: !1},
                placeholder: {type: String, default: ""},
                transition: {type: String, default: "vs__fade"},
                clearSearchOnSelect: {type: Boolean, default: !0},
                closeOnSelect: {type: Boolean, default: !0},
                label: {type: String, default: "label"},
                autocomplete: {type: String, default: "off"},
                reduce: {
                    type: Function, default: function (e) {
                        return e
                    }
                },
                selectable: {
                    type: Function, default: function (e) {
                        return !0
                    }
                },
                getOptionLabel: {
                    type: Function, default: function (e) {
                        return "object" === s()(e) ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn('[vue-select warn]: Label key "option.'.concat(this.label, '" does not') + " exist in options object ".concat(JSON.stringify(e), ".\n") + "https://vue-select.org/api/props.html#getoptionlabel") : e
                    }
                },
                getOptionKey: {
                    type: Function, default: function (e) {
                        if ("object" !== s()(e)) return e;
                        try {
                            return e.hasOwnProperty("id") ? e.id : function (e) {
                                var t = {};
                                return Object.keys(e).sort().forEach((function (n) {
                                    t[n] = e[n]
                                })), JSON.stringify(t)
                            }(e)
                        } catch (t) {
                            return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey", e, t)
                        }
                    }
                },
                onTab: {
                    type: Function, default: function () {
                        this.selectOnTab && !this.isComposing && this.typeAheadSelect()
                    }
                },
                taggable: {type: Boolean, default: !1},
                tabindex: {type: Number, default: null},
                pushTags: {type: Boolean, default: !1},
                filterable: {type: Boolean, default: !0},
                filterBy: {
                    type: Function, default: function (e, t, n) {
                        return (t || "").toLowerCase().indexOf(n.toLowerCase()) > -1
                    }
                },
                filter: {
                    type: Function, default: function (e, t) {
                        var n = this;
                        return e.filter((function (e) {
                            var r = n.getOptionLabel(e);
                            return "number" == typeof r && (r = r.toString()), n.filterBy(e, r, t)
                        }))
                    }
                },
                createOption: {
                    type: Function, default: function (e) {
                        return "object" === s()(this.optionList[0]) ? d()({}, this.label, e) : e
                    }
                },
                resetOnOptionsChange: {
                    default: !1, validator: function (e) {
                        return ["function", "boolean"].includes(s()(e))
                    }
                },
                clearSearchOnBlur: {
                    type: Function, default: function (e) {
                        var t = e.clearSearchOnSelect, n = e.multiple;
                        return t && !n
                    }
                },
                noDrop: {type: Boolean, default: !1},
                inputId: {type: String},
                dir: {type: String, default: "auto"},
                selectOnTab: {type: Boolean, default: !1},
                selectOnKeyCodes: {
                    type: Array, default: function () {
                        return [13]
                    }
                },
                searchInputQuerySelector: {type: String, default: "[type=search]"},
                mapKeydown: {
                    type: Function, default: function (e, t) {
                        return e
                    }
                },
                appendToBody: {type: Boolean, default: !1},
                calculatePosition: {
                    type: Function, default: function (e, t, n) {
                        var r = n.width, i = n.top, o = n.left;
                        e.style.top = i, e.style.left = o, e.style.width = r
                    }
                }
            }, data: function () {
                return {uid: ++b, search: "", open: !1, isComposing: !1, pushedTags: [], _value: []}
            }, watch: {
                options: function (e, t) {
                    var n = this;
                    !this.taggable && ("function" == typeof n.resetOnOptionsChange ? n.resetOnOptionsChange(e, t, n.selectedValue) : n.resetOnOptionsChange) && this.clearSelection(), this.value && this.isTrackingValues && this.setInternalValueFromOptions(this.value)
                }, value: function (e) {
                    this.isTrackingValues && this.setInternalValueFromOptions(e)
                }, multiple: function () {
                    this.clearSelection()
                }, open: function (e) {
                    this.$emit(e ? "open" : "close")
                }
            }, created: function () {
                this.mutableLoading = this.loading, void 0 !== this.value && this.isTrackingValues && this.setInternalValueFromOptions(this.value), this.$on("option:created", this.pushTag)
            }, methods: {
                setInternalValueFromOptions: function (e) {
                    var t = this;
                    Array.isArray(e) ? this.$data._value = e.map((function (e) {
                        return t.findOptionFromReducedValue(e)
                    })) : this.$data._value = this.findOptionFromReducedValue(e)
                }, select: function (e) {
                    this.isOptionSelected(e) || (this.taggable && !this.optionExists(e) && this.$emit("option:created", e), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e)), this.onAfterSelect(e)
                }, deselect: function (e) {
                    var t = this;
                    this.updateValue(this.selectedValue.filter((function (n) {
                        return !t.optionComparator(n, e)
                    })))
                }, clearSelection: function () {
                    this.updateValue(this.multiple ? [] : null)
                }, onAfterSelect: function (e) {
                    this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "")
                }, updateValue: function (e) {
                    var t = this;
                    void 0 === this.value && (this.$data._value = e), null !== e && (e = Array.isArray(e) ? e.map((function (e) {
                        return t.reduce(e)
                    })) : this.reduce(e)), this.$emit("input", e)
                }, toggleDropdown: function (e) {
                    var t = e.target !== this.searchEl;
                    t && e.preventDefault(), [].concat(i()(this.$refs.deselectButtons || []), i()([this.$refs.clearButton] || !1)).some((function (t) {
                        return t.contains(e.target) || t === e.target
                    })) ? e.preventDefault() : this.open && t ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus())
                }, isOptionSelected: function (e) {
                    var t = this;
                    return this.selectedValue.some((function (n) {
                        return t.optionComparator(n, e)
                    }))
                }, optionComparator: function (e, t) {
                    return this.getOptionKey(e) === this.getOptionKey(t)
                }, findOptionFromReducedValue: function (e) {
                    var t = this, n = [].concat(i()(this.options), i()(this.pushedTags)).filter((function (n) {
                        return JSON.stringify(t.reduce(n)) === JSON.stringify(e)
                    }));
                    return 1 === n.length ? n[0] : n.find((function (e) {
                        return t.optionComparator(e, t.$data._value)
                    })) || e
                }, closeSearchOptions: function () {
                    this.open = !1, this.$emit("search:blur")
                }, maybeDeleteValue: function () {
                    if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
                        var e = null;
                        this.multiple && (e = i()(this.selectedValue.slice(0, this.selectedValue.length - 1))), this.updateValue(e)
                    }
                }, optionExists: function (e) {
                    var t = this;
                    return this.optionList.some((function (n) {
                        return t.optionComparator(n, e)
                    }))
                }, normalizeOptionForSlot: function (e) {
                    return "object" === s()(e) ? e : d()({}, this.label, e)
                }, pushTag: function (e) {
                    this.pushedTags.push(e)
                }, onEscape: function () {
                    this.search.length ? this.search = "" : this.searchEl.blur()
                }, onSearchBlur: function () {
                    if (!this.mousedown || this.searching) {
                        var e = this.clearSearchOnSelect, t = this.multiple;
                        return this.clearSearchOnBlur({
                            clearSearchOnSelect: e,
                            multiple: t
                        }) && (this.search = ""), void this.closeSearchOptions()
                    }
                    this.mousedown = !1, 0 !== this.search.length || 0 !== this.options.length || this.closeSearchOptions()
                }, onSearchFocus: function () {
                    this.open = !0, this.$emit("search:focus")
                }, onMousedown: function () {
                    this.mousedown = !0
                }, onMouseUp: function () {
                    this.mousedown = !1
                }, onSearchKeyDown: function (e) {
                    var t = this, n = function (e) {
                        return e.preventDefault(), !t.isComposing && t.typeAheadSelect()
                    }, r = {
                        8: function (e) {
                            return t.maybeDeleteValue()
                        }, 9: function (e) {
                            return t.onTab()
                        }, 27: function (e) {
                            return t.onEscape()
                        }, 38: function (e) {
                            return e.preventDefault(), t.typeAheadUp()
                        }, 40: function (e) {
                            return e.preventDefault(), t.typeAheadDown()
                        }
                    };
                    this.selectOnKeyCodes.forEach((function (e) {
                        return r[e] = n
                    }));
                    var i = this.mapKeydown(r, this);
                    if ("function" == typeof i[e.keyCode]) return i[e.keyCode](e)
                }
            }, computed: {
                isTrackingValues: function () {
                    return void 0 === this.value || this.$options.propsData.hasOwnProperty("reduce")
                }, selectedValue: function () {
                    var e = this.value;
                    return this.isTrackingValues && (e = this.$data._value), e ? [].concat(e) : []
                }, optionList: function () {
                    return this.options.concat(this.pushTags ? this.pushedTags : [])
                }, searchEl: function () {
                    return this.$scopedSlots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search
                }, scope: function () {
                    var e = this, t = {
                        search: this.search,
                        loading: this.loading,
                        searching: this.searching,
                        filteredOptions: this.filteredOptions
                    };
                    return {
                        search: {
                            attributes: f({
                                disabled: this.disabled,
                                placeholder: this.searchPlaceholder,
                                tabindex: this.tabindex,
                                readonly: !this.searchable,
                                id: this.inputId,
                                "aria-autocomplete": "list",
                                "aria-labelledby": "vs".concat(this.uid, "__combobox"),
                                "aria-controls": "vs".concat(this.uid, "__listbox"),
                                ref: "search",
                                type: "search",
                                autocomplete: this.autocomplete,
                                value: this.search
                            }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {"aria-activedescendant": "vs".concat(this.uid, "__option-").concat(this.typeAheadPointer)} : {}),
                            events: {
                                compositionstart: function () {
                                    return e.isComposing = !0
                                },
                                compositionend: function () {
                                    return e.isComposing = !1
                                },
                                keydown: this.onSearchKeyDown,
                                blur: this.onSearchBlur,
                                focus: this.onSearchFocus,
                                input: function (t) {
                                    return e.search = t.target.value
                                }
                            }
                        },
                        spinner: {loading: this.mutableLoading},
                        noOptions: {search: this.search, loading: this.loading, searching: this.searching},
                        openIndicator: {
                            attributes: {
                                ref: "openIndicator",
                                role: "presentation",
                                class: "vs__open-indicator"
                            }
                        },
                        listHeader: t,
                        listFooter: t,
                        header: f({}, t, {deselect: this.deselect}),
                        footer: f({}, t, {deselect: this.deselect})
                    }
                }, childComponents: function () {
                    return f({}, m, {}, this.components)
                }, stateClasses: function () {
                    return {
                        "vs--open": this.dropdownOpen,
                        "vs--single": !this.multiple,
                        "vs--searching": this.searching && !this.noDrop,
                        "vs--searchable": this.searchable && !this.noDrop,
                        "vs--unsearchable": !this.searchable,
                        "vs--loading": this.mutableLoading,
                        "vs--disabled": this.disabled
                    }
                }, searching: function () {
                    return !!this.search
                }, dropdownOpen: function () {
                    return !this.noDrop && this.open && !this.mutableLoading
                }, searchPlaceholder: function () {
                    if (this.isValueEmpty && this.placeholder) return this.placeholder
                }, filteredOptions: function () {
                    var e = [].concat(this.optionList);
                    if (!this.filterable && !this.taggable) return e;
                    var t = this.search.length ? this.filter(e, this.search, this) : e;
                    if (this.taggable && this.search.length) {
                        var n = this.createOption(this.search);
                        this.optionExists(n) || t.unshift(n)
                    }
                    return t
                }, isValueEmpty: function () {
                    return 0 === this.selectedValue.length
                }, showClearButton: function () {
                    return !this.multiple && this.clearable && !this.open && !this.isValueEmpty
                }
            }
        }, y = (n(7), l(M, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "v-select",
                class: e.stateClasses,
                attrs: {dir: e.dir}
            }, [e._t("header", null, null, e.scope.header), e._v(" "), n("div", {
                ref: "toggle",
                staticClass: "vs__dropdown-toggle",
                attrs: {
                    id: "vs" + e.uid + "__combobox",
                    role: "combobox",
                    "aria-expanded": e.dropdownOpen.toString(),
                    "aria-owns": "vs" + e.uid + "__listbox",
                    "aria-label": "Search for option"
                },
                on: {
                    mousedown: function (t) {
                        return e.toggleDropdown(t)
                    }
                }
            }, [n("div", {
                ref: "selectedOptions",
                staticClass: "vs__selected-options"
            }, [e._l(e.selectedValue, (function (t) {
                return e._t("selected-option-container", [n("span", {
                    key: e.getOptionKey(t),
                    staticClass: "vs__selected"
                }, [e._t("selected-option", [e._v("\n            " + e._s(e.getOptionLabel(t)) + "\n          ")], null, e.normalizeOptionForSlot(t)), e._v(" "), e.multiple ? n("button", {
                    ref: "deselectButtons",
                    refInFor: !0,
                    staticClass: "vs__deselect",
                    attrs: {
                        disabled: e.disabled,
                        type: "button",
                        title: "Deselect " + e.getOptionLabel(t),
                        "aria-label": "Deselect " + e.getOptionLabel(t)
                    },
                    on: {
                        click: function (n) {
                            return e.deselect(t)
                        }
                    }
                }, [n(e.childComponents.Deselect, {tag: "component"})], 1) : e._e()], 2)], {
                    option: e.normalizeOptionForSlot(t),
                    deselect: e.deselect,
                    multiple: e.multiple,
                    disabled: e.disabled
                })
            })), e._v(" "), e._t("search", [n("input", e._g(e._b({staticClass: "vs__search"}, "input", e.scope.search.attributes, !1), e.scope.search.events))], null, e.scope.search)], 2), e._v(" "), n("div", {
                ref: "actions",
                staticClass: "vs__actions"
            }, [n("button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showClearButton,
                    expression: "showClearButton"
                }],
                ref: "clearButton",
                staticClass: "vs__clear",
                attrs: {disabled: e.disabled, type: "button", title: "Clear Selected", "aria-label": "Clear Selected"},
                on: {click: e.clearSelection}
            }, [n(e.childComponents.Deselect, {tag: "component"})], 1), e._v(" "), e._t("open-indicator", [e.noDrop ? e._e() : n(e.childComponents.OpenIndicator, e._b({tag: "component"}, "component", e.scope.openIndicator.attributes, !1))], null, e.scope.openIndicator), e._v(" "), e._t("spinner", [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.mutableLoading,
                    expression: "mutableLoading"
                }], staticClass: "vs__spinner"
            }, [e._v("Loading...")])], null, e.scope.spinner)], 2)]), e._v(" "), n("transition", {attrs: {name: e.transition}}, [e.dropdownOpen ? n("ul", {
                directives: [{
                    name: "append-to-body",
                    rawName: "v-append-to-body"
                }],
                key: "vs" + e.uid + "__listbox",
                ref: "dropdownMenu",
                staticClass: "vs__dropdown-menu",
                attrs: {id: "vs" + e.uid + "__listbox", role: "listbox"},
                on: {
                    mousedown: function (t) {
                        return t.preventDefault(), e.onMousedown(t)
                    }, mouseup: e.onMouseUp
                }
            }, [e._t("list-header", null, null, e.scope.listHeader), e._v(" "), e._l(e.filteredOptions, (function (t, r) {
                return n("li", {
                    key: e.getOptionKey(t),
                    staticClass: "vs__dropdown-option",
                    class: {
                        "vs__dropdown-option--selected": e.isOptionSelected(t),
                        "vs__dropdown-option--highlight": r === e.typeAheadPointer,
                        "vs__dropdown-option--disabled": !e.selectable(t)
                    },
                    attrs: {
                        role: "option",
                        id: "vs" + e.uid + "__option-" + r,
                        "aria-selected": r === e.typeAheadPointer || null
                    },
                    on: {
                        mouseover: function (n) {
                            e.selectable(t) && (e.typeAheadPointer = r)
                        }, mousedown: function (n) {
                            n.preventDefault(), n.stopPropagation(), e.selectable(t) && e.select(t)
                        }
                    }
                }, [e._t("option", [e._v("\n          " + e._s(e.getOptionLabel(t)) + "\n        ")], null, e.normalizeOptionForSlot(t))], 2)
            })), e._v(" "), 0 === e.filteredOptions.length ? n("li", {staticClass: "vs__no-options"}, [e._t("no-options", [e._v("Sorry, no matching options.")], null, e.scope.noOptions)], 2) : e._e(), e._v(" "), e._t("list-footer", null, null, e.scope.listFooter)], 2) : n("ul", {
                staticStyle: {
                    display: "none",
                    visibility: "hidden"
                }, attrs: {id: "vs" + e.uid + "__listbox", role: "listbox"}
            })]), e._v(" "), e._t("footer", null, null, e.scope.footer)], 2)
        }), [], !1, null, null, null).exports), L = {ajax: p, pointer: u, pointerScroll: _};
        n.d(t, "VueSelect", (function () {
            return y
        })), n.d(t, "mixins", (function () {
            return L
        })), t.default = y
    }])
}, function (e, t, n) {
    e.exports = function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (object, e) {
            return Object.prototype.hasOwnProperty.call(object, e)
        }, n.p = "", n(n.s = "+xUi")
    }({
        "+xUi": function (e, t, n) {
            "use strict";
            n.r(t);
            n("HrLf");
            var r = n("i7/w"), o = n.n(r), d = n("wy2R"), _ = n.n(d);
            o.a.config.productionTip = !1;
            var l = {
                install: function (e, t) {
                    var n = (t || {}).moment || _.a || window.moment;
                    if (!n) throw new Error("A momentJS instance was not found.");
                    var r = n.unix, o = n.utc, d = n.parseZone, l = n.duration, m = n.isDuration;
                    e.prototype.$moment = e.moment = n, e.prototype.$time = e.time = n, e.prototype.$unix = e.unix = r, e.prototype.$utc = e.utc = o, e.prototype.$zone = e.zone = d, e.prototype.$duration = e.duration = l, e.prototype.$isDuration = e.isDuration = m;
                    var c = function (e) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                        return n.apply(void 0, [e].concat(r))
                    };
                    e.filter("moment", c), e.filter("time", c), e.filter("unix", (function (e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                        return r.apply(void 0, [e].concat(n))
                    })), e.filter("utc", (function (e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return o.apply(void 0, [e].concat(n))
                    })), e.filter("zone", (function (e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return d.apply(void 0, [e].concat(n))
                    })), e.filter("duration", (function (e, t) {
                        return l(e, t)
                    }))
                }
            };
            "undefined" != typeof window && window.Vue && window.Vue.use(l);
            var main = l;
            t.default = main
        }, HrLf: function (e, t, n) {
            if ("undefined" != typeof window) {
                let i;
                (i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/)) && (n.p = i[1])
            }
        }, "i7/w": function (e, t) {
            e.exports = n(1)
        }, wy2R: function (e, t) {
            e.exports = n(0)
        }
    })
}, function (e, t) {
    e.exports = function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (object, e) {
            return Object.prototype.hasOwnProperty.call(object, e)
        }, n.p = "", n(n.s = "fb15")
    }({
        f6fd: function (e, t) {
            !function (e) {
                var t = e.getElementsByTagName("script");
                "currentScript" in e || Object.defineProperty(e, "currentScript", {
                    get: function () {
                        try {
                            throw new Error
                        } catch (n) {
                            var i, e = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(n.stack) || [!1])[1];
                            for (i in t) if (t[i].src == e || "interactive" == t[i].readyState) return t[i];
                            return null
                        }
                    }
                })
            }(document)
        }, fb15: function (e, t, n) {
            "use strict";
            var i;
            (n.r(t), "undefined" != typeof window) && (n("f6fd"), (i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)) && (n.p = i[1]));
            var r = function (e, t, n, r, o, d, _, l) {
                var m, c = "function" == typeof e ? e.options : e;
                if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), d && (c._scopeId = "data-v-" + d), _ ? (m = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(_)
                }, c._ssrRegister = m) : o && (m = l ? function () {
                    o.call(this, this.$root.$options.shadowRoot)
                } : o), m) if (c.functional) {
                    c._injectStyles = m;
                    var h = c.render;
                    c.render = function (e, t) {
                        return m.call(t), h(e, t)
                    }
                } else {
                    var f = c.beforeCreate;
                    c.beforeCreate = f ? [].concat(f, m) : [m]
                }
                return {exports: e, options: c}
            }({
                name: "vue-awesome-countdown",
                props: {
                    startTime: {
                        type: [String, Number, Date], default: null, validator: function (e) {
                            return "Invalid Date" !== new Date(e).toString()
                        }
                    },
                    endTime: {
                        type: [String, Number, Date], default: null, validator: function (e) {
                            return "Invalid Date" !== new Date(e).toString()
                        }
                    },
                    leftTime: {type: Number, default: 0},
                    autoStart: {type: Boolean, default: !0},
                    speed: {
                        type: Number, default: 1e3, validator: function (e) {
                            return e >= 0
                        }
                    },
                    tag: {type: String, default: "span"}
                },
                data: function () {
                    return {
                        state: "beforeStart",
                        attrs: {},
                        actualStartTime: null,
                        actualEndTime: null,
                        timeObj: {},
                        countdownTimer: null,
                        runTimes: 0,
                        usedTime: 0,
                        remainingTime: 0
                    }
                },
                watch: {
                    speed(e, t) {
                        const n = this;
                        if (e < 0 && (e = 0), e !== t) {
                            clearTimeout(n.countdownTimer);
                            const t = (new Date).getTime(), r = Math.floor((t - n.actualStartTime) / e), o = t % e;
                            n.runTimes = r, n.$nextTick(() => {
                                n.countdownTimer = setTimeout(n.doCountdown, o)
                            })
                        }
                    }
                },
                created() {
                    const e = this, t = e.startTime && new Date(e.startTime).getTime() || 0,
                        n = t && t - (new Date).getTime() || 0;
                    e.autoStart && (e.state = "preheat", setTimeout(() => {
                        e.startCountdown(!0)
                    }, n))
                },
                methods: {
                    startCountdown(e) {
                        const t = this;
                        ("beforeStart" === t.state || "stopped" === t.state || "paused" === t.state || e) && (e && (Object.assign(t.$data, t.$options.data.call(t)), t.$emit("start", t)), "stopped" === t.state && (t.remainingTime = t.actualEndTime - (new Date).getTime()), t.actualEndTime || (t.actualEndTime = t.endTime || (new Date).getTime() + (t.remainingTime || t.leftTime)), "paused" === t.state && (t.actualEndTime = (new Date).getTime() + t.remainingTime), t.state = "process", t.doCountdown())
                    }, stopCountdown() {
                        const e = this;
                        "process" === e.state && (clearTimeout(e.countdownTimer), e.$emit("stop", e), e.state = "stopped")
                    }, pauseCountdown() {
                        const e = this;
                        "process" === e.state && (clearTimeout(e.countdownTimer), e.remainingTime = e.actualEndTime - (new Date).getTime(), e.$emit("paused", e), e.state = "paused")
                    }, switchCountdown() {
                        const e = this;
                        return "stopped" === e.state || "beforeStart" === e.state ? e.startCountdown() : "process" === e.state ? e.stopCountdown() : void 0
                    }, finishCountdown() {
                        const e = this;
                        e.state = "finished", e.timeObj = {}, e.usedTime = (new Date).getTime() - e.actualStartTime, e.$emit("finish", e)
                    }, doCountdown() {
                        const e = this;
                        if ("process" !== e.state) return;
                        e.actualStartTime || (e.actualStartTime = (new Date).getTime());
                        let t = new Date(e.actualEndTime).getTime() - (new Date).getTime();
                        if (!(t > 0)) return void e.finishCountdown();
                        {
                            const n = {}, r = t / 1e3,
                                o = {d: r / 60 / 60 / 24, h: r / 60 / 60 % 24, m: r / 60 % 60, s: r % 60, ms: t % 1e3},
                                d = {
                                    d: parseInt(o.d, 10).toString(),
                                    h: parseInt(o.h, 10).toString().padStart(2, 0),
                                    m: parseInt(o.m, 10).toString().padStart(2, 0),
                                    s: parseInt(o.s, 10).toString().padStart(2, 0),
                                    ms: o.ms.toString().padStart(3, 0)
                                }, _ = {
                                    d: parseInt(Math.ceil(r / 60 / 60 / 24), 10),
                                    h: parseInt(Math.ceil(r / 60 / 60), 10),
                                    m: parseInt(Math.ceil(r / 60), 10),
                                    s: parseInt(Math.ceil(r), 10)
                                };
                            n.endTime = e.actualEndTime, n.speed = e.speed, e.usedTime = (new Date).getTime() - e.actualStartTime, n.leftTime = t, e.remainingTime = t, e.timeObj = Object.assign({}, n, d, {
                                org: o,
                                ceil: _
                            }), e.timeObj.org = o, e.timeObj.ceil = _, e.$emit("process", e)
                        }
                        let n = e.speed + (e.actualStartTime + e.runTimes++ * e.speed - (new Date).getTime());
                        n < 0 && (n += e.speed), e.countdownTimer = setTimeout(e.doCountdown, n)
                    }
                }
            }, (function () {
                var e = this, t = e.$createElement;
                return (e._self._c || t)(e.tag, e._g(e._b({tag: "components"}, "components", e.attrs, !1), e.$listeners), [e._t("prev", null, null, this._self), "beforeStart" === e.state ? e._t("before", null, null, this._self) : e._e(), "preheat" === e.state ? e._t("preheat", null, null, this._self) : e._e(), "process" === e.state || "stopped" === e.state || "paused" === e.state ? e._t("process", null, null, this._self) : e._e(), "finished" === e.state ? e._t("finish", null, null, this._self) : e._e(), e._t("default", null, null, this._self)], 2)
            }), [], !1, null, null, null).exports;
            const o = {
                install: function (e, t) {
                    const n = t || "vac";
                    e.component(n, r), e.component("countdown", r)
                }
            };
            "undefined" != typeof window && window.Vue && window.Vue.use(o);
            var d = o;
            t.default = d
        }
    })
}, function (e, t, n) {
    "undefined" != typeof self && self, e.exports = function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        n.r(t);
        var a = function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(n, !0).forEach((function (t) {
                    i(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(n).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }({}, {
            $vue: null,
            id: null,
            router: null,
            fields: {},
            customIdFields: {},
            ignoreRoutes: [],
            linkers: [],
            commands: {},
            disabled: !1,
            customResourceURL: null,
            set: [],
            require: [],
            ecommerce: {enabled: !1, options: null, enhanced: !1},
            autoTracking: {
                screenview: !1,
                shouldRouterUpdate: null,
                skipSamePath: !1,
                exception: !1,
                exceptionLogs: !0,
                page: !0,
                transformQueryString: !0,
                pageviewOnLoad: !0,
                pageviewTemplate: null,
                untracked: !0,
                prependBase: !0
            },
            debug: {enabled: !1, trace: !1, sendHitTask: !0},
            batch: {enabled: !1, delay: 500, amount: 2},
            checkDuplicatedScript: !1,
            disableScriptLoader: !1,
            beforeFirstHit: s,
            ready: s,
            untracked: []
        });

        function u(e) {
            !function e(t, n) {
                return Object.keys(n).forEach((function (r) {
                    var o = t[r] && Object.prototype.toString.call(t[r]);
                    "[object Object]" !== o && "[object Array]" !== o ? t[r] = n[r] : e(t[r], n[r])
                })), t
            }(a, e)
        }

        function o() {
            return a.id ? [].concat(a.id) : []
        }

        var d = a;

        function s() {
        }

        var p = function (e) {
            console.warn("[vue-analytics] ".concat(e))
        };

        function _(e, t) {
            return new Promise((function (n, r) {
                var o = document.head || document.getElementsByTagName("head")[0], i = document.createElement("script");
                if (i.async = !0, i.src = e, i.charset = "utf-8", t) {
                    var d = document.createElement("link");
                    d.href = t, d.rel = "preconnect", o.appendChild(d)
                }
                o.appendChild(i), i.onload = n, i.onerror = r
            }))
        }

        function l(e) {
            return e.name || e.replace(/-/gi, "")
        }

        function b(e, t) {
            if (o().length > 1) {
                var n = l(t);
                return "".concat(n, ".").concat(e)
            }
            return e
        }

        var m, c = function (e) {
            if (e.then) return e;
            if ("function" == typeof e) {
                var t = e();
                return t.then ? t : Promise.resolve(t)
            }
            return Promise.resolve(e)
        };

        function g(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        var h = [];

        function f(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            "undefined" != typeof window && o().forEach((function (t) {
                var r, o = {m: b(e, t), a: n};
                window.ga ? d.batch.enabled ? (h.push(o), m || (m = setInterval((function () {
                    h.length ? h.splice(0, d.batch.amount).forEach((function (e) {
                        var t;
                        (t = window).ga.apply(t, [e.m].concat(g(e.a)))
                    })) : (clearInterval(m), m = null)
                }), d.batch.delay))) : (r = window).ga.apply(r, [b(e, t)].concat(n)) : d.untracked.push(o)
            }))
        }

        function M(e) {
            return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function y() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            "object" !== M(t[0]) || t[0].constructor !== Object ? f("set", t[0], t[1]) : f("set", t[0])
        }

        function L(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Y(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var k = function () {
            2 != arguments.length ? f("require", arguments.length <= 0 ? void 0 : arguments[0]) : f("require", arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1])
        };

        function D(e) {
            return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function v() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = t[0];
            if (1 === t.length && "string" == typeof r) return f("send", "screenview", {screenName: r});
            f.apply(void 0, ["send", "screenview"].concat(t))
        }

        function w(e) {
            return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function q() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r;
            t.length && !t[0] || (t.length && t[0].currentRoute && (r = t[0].currentRoute), t.length && function (e) {
                return e.query && e.params
            }(t[0]) && (r = t[0]), r ? T(r) : (y("page", "object" === w(t[0]) ? t[0].page : t[0]), f.apply(void 0, ["send", "pageview"].concat(t))))
        }

        function T(e) {
            if (![(t = e).name, t.path].filter(Boolean).find((function (e) {
                return -1 !== d.ignoreRoutes.indexOf(e)
            }))) {
                var t, n = d.autoTracking, r = e.meta.analytics,
                    o = (void 0 === r ? {} : r).pageviewTemplate || n.pageviewTemplate;
                if (n.screenview && !e.name) throw new Error("[vue-analytics] Route name is mandatory when using screenview.");
                if (n.screenview) v(e.name); else if (o) q(o(e)); else {
                    var i = d.router, _ = d.autoTracking, a = _.transformQueryString, u = _.prependBase,
                        l = function (e) {
                            var t = Object.keys(e).reduce((function (t, n, r, o) {
                                var i = r === o.length - 1, d = e[n];
                                return null == d ? t : t += "".concat(n, "=").concat(d).concat(i ? "" : "&")
                            }), "");
                            return "" !== t ? "?".concat(t) : ""
                        }(e.query), s = i && i.options.base, p = u && s, m = e.path + (a ? l : "");
                    q(m = p ? function (e, t) {
                        var n = t.split("/"), r = e.split("/");
                        return "" === n[0] && "/" === e[e.length - 1] && n.shift(), r.join("/") + n.join("/")
                    }(s, m) : m)
                }
            }
        }

        var S = function () {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            "undefined" != typeof window && o().forEach((function (t) {
                window["ga-disable-".concat(t)] = e
            }))
        }, H = function () {
            if ("undefined" != typeof document && "undefined" != typeof window) {
                if (d.id) {
                    var e, t, n = [c(d.id), c(d.disabled)];
                    if (e = d.checkDuplicatedScript, t = d.disableScriptLoader, [Boolean(window && window.ga), e && !(Array.prototype.slice.call(document.getElementsByTagName("script")).filter((function (e) {
                        return -1 !== e.src.indexOf("analytics") || -1 !== e.src.indexOf("gtag")
                    })).length > 0), !t].some(Boolean)) {

                    }
                    return Promise.all(n).then((function (e) {
                        var t, n, r;
                        u({id: e[0], disabled: e[1]}), S(d.disabled), function () {
                            if (window.ga || !d.debug.enabled) {
                                if (window.ga) {
                                    var e = o();
                                    d.debug.enabled && (window.ga_debug = {trace: d.debug.trace}), e.forEach((function (t) {
                                        var n = l(t), r = d.customIdFields[t] || {}, o = e.length > 1 ? function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? L(n, !0).forEach((function (t) {
                                                    Y(e, t, n[t])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(n).forEach((function (t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                }))
                                            }
                                            return e
                                        }({}, d.fields, {}, r, {name: n}) : d.fields;
                                        window.ga("create", t.id || t, "auto", o)
                                    })), d.beforeFirstHit();
                                    var t = d.ecommerce;
                                    if (t.enabled) {
                                        var n = t.enhanced ? "ec" : "ecommerce";
                                        t.options ? f("require", n, t.options) : f("require", n)
                                    }
                                    d.linkers.length > 0 && (f("require", "linker"), f("linker:autoLink", d.linkers)), d.debug.sendHitTask || y("sendHitTask", null)
                                }
                            } else p("Google Analytics has probably been blocked.")
                        }(), function () {
                            var e;
                            d.set.forEach((function (e) {
                                var t = e.field, n = e.value;
                                if (void 0 === t || void 0 === n) throw new Error('[vue-analytics] Wrong configuration in the plugin options.\nThe "set" array requires each item to have a "field" and a "value" property.');
                                y(t, n)
                            })), e = ["ec", "ecommerce"], d.require.forEach((function (t) {
                                if (-1 !== e.indexOf(t) || -1 !== e.indexOf(t.name)) throw new Error("[vue-analytics] The ecommerce features are built-in in the plugin. \nFollow the ecommerce instructions available in the documentation.");
                                if ("string" != typeof t && "object" !== D(t)) throw new Error('[vue-analytics] Wrong configuration in the plugin options. \nThe "require" array requires each item to be a string or to have a "name" and an "options" property.');
                                var n = t.name || t;
                                t.options ? k(n, t.options) : k(n)
                            }))
                        }(), d.untracked.forEach((function (e) {
                            f.apply(void 0, [e.m].concat(function (e) {
                                return function (e) {
                                    if (Array.isArray(e)) {
                                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                                        return n
                                    }
                                }(e) || function (e) {
                                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                                }(e) || function () {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                                }()
                            }(e.a)))
                        })), t = d.router, n = d.autoTracking, r = d.$vue, n.page && t && t.onReady((function () {
                            n.pageviewOnLoad && t.history.ready && T(t.currentRoute), t.afterEach((function (e, o) {
                                var i = n.skipSamePath, d = n.shouldRouterUpdate;
                                i && e.path === o.path || ("function" != typeof d || d(e, o)) && r.nextTick().then((function () {
                                    T(t.currentRoute)
                                }))
                            }))
                        })), d.ready()
                    })).catch((function (e) {
                        d.debug.enabled && p(e.message)
                    }))
                }
                p('Missing the "id" parameter. Add at least one tracking domain ID')
            }
        }, j = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            f("send", "exception", {exDescription: e, exFatal: t})
        }, x = function (e) {
            if (d.autoTracking.exception) {
                window.addEventListener("error", (function (e) {
                    j(e.message)
                }));
                var t = e.config.errorHandler;
                e.config.errorHandler = function (e, n, r) {
                    j(e.message), d.autoTracking.exceptionLogs && console.error(e), "function" == typeof t && t.call(void 0, e, n, r)
                }
            }
        }, O = j;

        function P(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function E(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var W = function (e) {
                return "".concat(d.ecommerce.enhanced ? "ec" : "ecommerce", ":").concat(e)
            },
            A = ["addItem", "addTransaction", "addProduct", "addImpression", "setAction", "addPromo", "send"].reduce((function (e, t) {
                return function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? P(n, !0).forEach((function (t) {
                            E(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(n).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, e, E({}, t, (function () {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    f.apply(void 0, [W(t)].concat(n))
                })))
            }), {}), F = {
                event: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    f.apply(void 0, ["send", "event"].concat(t))
                }, exception: O, page: q, query: f, require: k, set: y, social: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    f.apply(void 0, ["send", "social"].concat(t))
                }, time: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    f.apply(void 0, ["send", "timing"].concat(t))
                }, screenview: v, ecommerce: A, disable: function () {
                    return S(!0)
                }, enable: function () {
                    return S(!1)
                }, commands: d.commands
            }, z = {
                inserted: function (e, t, n) {
                    var r = Object.keys(t.modifiers);
                    0 === r.length && r.push("click"), r.forEach((function (r) {
                        e.addEventListener(r, (function () {
                            var e = "string" == typeof t.value ? d.commands[t.value] : t.value;
                            if (!e) throw new Error("[vue-analytics] The value passed to v-ga is not defined in the commands list.");
                            e.apply(n.context)
                        }))
                    }))
                }
            };

        function N(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function C(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function R(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function J(e) {
            u(function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(n, !0).forEach((function (t) {
                        R(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(n).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({}, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {$vue: e})), e.directive("ga", z), e.prototype.$ga = e.$ga = F, x(e), H()
        }

        n.d(t, "default", (function () {
            return J
        })), n.d(t, "analyticsMiddleware", (function () {
            return I
        })), n.d(t, "onAnalyticsReady", (function () {
            return U
        })), n.d(t, "event", (function () {
            return $
        })), n.d(t, "ecommerce", (function () {
            return V
        })), n.d(t, "set", (function () {
            return B
        })), n.d(t, "page", (function () {
            return G
        })), n.d(t, "query", (function () {
            return K
        })), n.d(t, "screenview", (function () {
            return Z
        })), n.d(t, "time", (function () {
            return X
        })), n.d(t, "require", (function () {
            return Q
        })), n.d(t, "exception", (function () {
            return ee
        })), n.d(t, "social", (function () {
            return te
        }));
        var I = function (e) {
                e.subscribe((function (e) {
                    var t = e.payload;
                    if (t && t.meta && t.meta.analytics) {
                        var n = t.meta.analytics;
                        if (!Array.isArray(n)) throw new Error('The "analytics" property needs to be an array');
                        n.forEach((function (e) {
                            var t, n, r = e.shift(), o = e;
                            if (r.includes(":")) {
                                var i = function (e, t) {
                                    return function (e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function (e, t) {
                                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                                            var n = [], r = !0, o = !1, i = void 0;
                                            try {
                                                for (var d, a = e[Symbol.iterator](); !(r = (d = a.next()).done) && (n.push(d.value), !t || n.length !== t); r = !0) ;
                                            } catch (e) {
                                                o = !0, i = e
                                            } finally {
                                                try {
                                                    r || null == a.return || a.return()
                                                } finally {
                                                    if (o) throw i
                                                }
                                            }
                                            return n
                                        }
                                    }(e, t) || function () {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                    }()
                                }(r.split(":"), 2);
                                r = i[0], t = i[1]
                            }
                            if (!(r in F)) throw new Error('[vue-analytics:vuex] The type "'.concat(r, "\" doesn't exist."));
                            if (t && !(t in F[r])) throw new Error('[vue-analytics:vuex] The type "'.concat(r, '" has not method "').concat(t, '".'));
                            if ("ecommerce" === r && !t) throw new Error('[vue-analytics:vuex] The type "'.concat(r, '" needs to call a method. Check documentation.'));
                            t ? (n = F[r])[t].apply(n, N(o)) : F[r].apply(F, N(o))
                        }))
                    }
                }))
            }, U = function () {
                return new Promise((function (e, t) {
                    var n = setInterval((function () {
                        "undefined" != typeof window && window.ga && (e(), clearInterval(n))
                    }), 10)
                }))
            }, $ = F.event, V = F.ecommerce, B = F.set, G = F.page, K = F.query, Z = F.screenview, X = F.time,
            Q = F.require, ee = F.exception, te = F.social
    }])
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var o = !1;
    if ("undefined" != typeof window) {
        var d = {
            get passive() {
                o = !0
            }
        };
        window.addEventListener("testPassive", null, d), window.removeEventListener("testPassive", null, d)
    }
    var _, i,
        l = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
        m = [], c = !1, h = -1, s = function (e) {
            return m.some((function (t) {
                return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
            }))
        }, a = function (e) {
            var t = e || window.event;
            return !!s(t.target) || t.touches.length > 1 || (t.preventDefault && t.preventDefault(), !1)
        }, u = {
            enableBodyScroll: function (e) {
                if (l) {
                    if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                    e.ontouchstart = null, e.ontouchmove = null, m = m.filter((function (t) {
                        return t.targetElement !== e
                    })), c && 0 === m.length && (document.removeEventListener("touchmove", a, o ? {passive: !1} : void 0), c = !1)
                } else (m = m.filter((function (t) {
                    return t.targetElement !== e
                }))).length || setTimeout((function () {
                    void 0 !== i && (document.body.style.paddingRight = i, i = void 0), void 0 !== _ && (document.body.style.overflow = _, _ = void 0)
                }))
            }, disableBodyScroll: function (e, u) {
                if (l) {
                    if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                    if (e && !m.some((function (t) {
                        return t.targetElement === e
                    }))) {
                        var t = {targetElement: e, options: u || {}};
                        m = [].concat(r(m), [t]), e.ontouchstart = function (e) {
                            1 === e.targetTouches.length && (h = e.targetTouches[0].clientY)
                        }, e.ontouchmove = function (t) {
                            1 === t.targetTouches.length && function (e, t) {
                                var n = e.targetTouches[0].clientY - h;
                                !s(e.target) && (t && 0 === t.scrollTop && n > 0 || function (e) {
                                    return !!e && e.scrollHeight - e.scrollTop <= e.clientHeight
                                }(t) && n < 0 ? a(e) : e.stopPropagation())
                            }(t, e)
                        }, c || (document.addEventListener("touchmove", a, o ? {passive: !1} : void 0), c = !0)
                    }
                } else {
                    !function (e) {
                        setTimeout((function () {
                            if (void 0 === i) {
                                var t = !!e && !0 === e.reserveScrollBarGap,
                                    n = window.innerWidth - document.documentElement.clientWidth;
                                t && n > 0 && (i = document.body.style.paddingRight, document.body.style.paddingRight = "".concat(n, "px"))
                            }
                            void 0 === _ && (_ = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }))
                    }(u);
                    var n = {targetElement: e, options: u || {}};
                    m = [].concat(r(m), [n])
                }
            }, install: function (e, t) {
                if (t) {
                    var n = t.enableBodyScroll, r = t.disableBodyScroll, i = t.bodyScrollOptions;
                    n && (this.enableBodyScroll = n), r && (this.disableBodyScroll = r), i && (this.bodyScrollOptions = i)
                }
                e.directive("scroll-lock", {
                    inserted: this.inserted.bind(this),
                    componentUpdated: this.componentUpdated.bind(this),
                    unbind: this.unbind.bind(this)
                })
            }, inserted: function (e, t) {
                t.value && this.disableBodyScroll(e, this.bodyScrollOptions)
            }, componentUpdated: function (e, t) {
                t.value ? this.disableBodyScroll(e, this.bodyScrollOptions) : this.enableBodyScroll(e)
            }, unbind: function (e) {
                this.enableBodyScroll(e)
            }
        };
    "undefined" != typeof window && window.Vue && window.Vue.use(u), t.a = u
}, function (e, t, n) {
    function r(e) {
        return -1 !== e.type.indexOf("mouse") ? e.clientX : e.touches[0].clientX
    }

    function o(e) {
        return -1 !== e.type.indexOf("mouse") ? e.clientY : e.touches[0].clientY
    }

    var d = function () {
        var e = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function () {
                    e = !0
                }
            });
            window.addEventListener("test", null, t)
        } catch (e) {
        }
        return e
    }(), _ = {
        install: function (e, t) {
            var n = Object.assign({}, {
                disableClick: !1,
                tapTolerance: 10,
                swipeTolerance: 30,
                touchHoldTolerance: 400,
                longTapTimeInterval: 400,
                touchClass: ""
            }, t);

            function _(e) {
                var t = this.$$touchObj, n = e.type.indexOf("touch") >= 0, d = e.type.indexOf("mouse") >= 0, _ = this;
                n && (t.lastTouchStartTime = e.timeStamp), d && t.lastTouchStartTime && e.timeStamp - t.lastTouchStartTime < 350 || t.touchStarted || (y(this), t.touchStarted = !0, t.touchMoved = !1, t.swipeOutBounded = !1, t.startX = r(e), t.startY = o(e), t.currentX = 0, t.currentY = 0, t.touchStartTime = e.timeStamp, t.touchHoldTimer = setTimeout((function () {
                    M(e, _, "touchhold")
                }), t.options.touchHoldTolerance), M(e, this, "start"))
            }

            function l(e) {
                var t = this.$$touchObj;
                if (t.currentX = r(e), t.currentY = o(e), t.touchMoved) {
                    if (!t.swipeOutBounded) {
                        var n = t.options.swipeTolerance;
                        t.swipeOutBounded = Math.abs(t.startX - t.currentX) > n && Math.abs(t.startY - t.currentY) > n
                    }
                } else {
                    var d = t.options.tapTolerance;
                    t.touchMoved = Math.abs(t.startX - t.currentX) > d || Math.abs(t.startY - t.currentY) > d, t.touchMoved && (Y(t), M(e, this, "moved"))
                }
                t.touchMoved && M(e, this, "moving")
            }

            function m() {
                var e = this.$$touchObj;
                Y(e), L(this), e.touchStarted = e.touchMoved = !1, e.startX = e.startY = 0
            }

            function c(e) {
                var t = this.$$touchObj, n = e.type.indexOf("touch") >= 0, r = e.type.indexOf("mouse") >= 0;
                if (n && (t.lastTouchEndTime = e.timeStamp), Y(t), !(r && t.lastTouchEndTime && e.timeStamp - t.lastTouchEndTime < 350)) if (t.touchStarted = !1, L(this), M(e, this, "end"), t.touchMoved) {
                    if (!t.swipeOutBounded) {
                        var o, d = t.options.swipeTolerance;
                        o = Math.abs(t.startX - t.currentX) < d ? t.startY > t.currentY ? "top" : "bottom" : t.startX > t.currentX ? "left" : "right", t.callbacks["swipe." + o] ? M(e, this, "swipe." + o, o) : M(e, this, "swipe", o)
                    }
                } else t.callbacks.longtap && e.timeStamp - t.touchStartTime > t.options.longTapTimeInterval ? (e.preventDefault(), M(e, this, "longtap")) : M(e, this, "tap")
            }

            function h() {
                y(this)
            }

            function f() {
                L(this)
            }

            function M(e, t, n, param) {
                var r = t.$$touchObj.callbacks[n] || [];
                if (0 === r.length) return null;
                for (var i = 0; i < r.length; i++) {
                    var o = r[i];
                    o.modifiers.stop && e.stopPropagation(), o.modifiers.prevent && e.preventDefault(), o.modifiers.self && e.target !== e.currentTarget || "function" == typeof o.value && (param ? o.value(param, e) : o.value(e))
                }
            }

            function y(e) {
                var t = e.$$touchObj.options.touchClass;
                t && e.classList.add(t)
            }

            function L(e) {
                var t = e.$$touchObj.options.touchClass;
                t && e.classList.remove(t)
            }

            function Y(e) {
                e.touchHoldTimer && (clearTimeout(e.touchHoldTimer), e.touchHoldTimer = null)
            }

            function k(e, t) {
                var r = e.$$touchObj || {callbacks: {}, hasBindTouchEvents: !1, options: n};
                return t && (r.options = Object.assign({}, r.options, t)), e.$$touchObj = r, e.$$touchObj
            }

            e.directive("touch", {
                bind: function (e, t) {
                    var n = k(e), r = t.arg || "tap";
                    switch (r) {
                        case"swipe":
                            var o = t.modifiers;
                            if (o.left || o.right || o.top || o.bottom) {
                                for (var i in t.modifiers) if (["left", "right", "top", "bottom"].indexOf(i) >= 0) {
                                    var M = "swipe." + i;
                                    n.callbacks[M] = n.callbacks[M] || [], n.callbacks[M].push(t)
                                }
                            } else n.callbacks.swipe = n.callbacks.swipe || [], n.callbacks.swipe.push(t);
                            break;
                        default:
                            n.callbacks[r] = n.callbacks[r] || [], n.callbacks[r].push(t)
                    }
                    if (!n.hasBindTouchEvents) {
                        var y = !!d && {passive: !0};
                        e.addEventListener("touchstart", _, y), e.addEventListener("touchmove", l, y), e.addEventListener("touchcancel", m), e.addEventListener("touchend", c), n.options.disableClick || (e.addEventListener("mousedown", _), e.addEventListener("mousemove", l), e.addEventListener("mouseup", c), e.addEventListener("mouseenter", h), e.addEventListener("mouseleave", f)), n.hasBindTouchEvents = !0
                    }
                }, unbind: function (e) {
                    e.removeEventListener("touchstart", _), e.removeEventListener("touchmove", l), e.removeEventListener("touchcancel", m), e.removeEventListener("touchend", c), e.$$touchObj && !e.$$touchObj.options.disableClick && (e.removeEventListener("mousedown", _), e.removeEventListener("mousemove", l), e.removeEventListener("mouseup", c), e.removeEventListener("mouseenter", h), e.removeEventListener("mouseleave", f)), delete e.$$touchObj
                }
            }), e.directive("touch-class", {
                bind: function (e, t) {
                    k(e, {touchClass: t.value})
                }
            }), e.directive("touch-options", {
                bind: function (e, t) {
                    k(e, t.value)
                }
            })
        }
    };
    e.exports = _
}, , function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return t || (t = {}), "string" != typeof (e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    var content = n(305);
    "string" == typeof content && (content = [[e.i, content, ""]]), content.locals && (e.exports = content.locals);
    (0, n(30).default)("1ff4c59c", content, !0, {sourceMap: !1})
}, function (e, t, n) {
    (t = n(29)(!1)).push([e.i, ".v-select{position:relative;font-family:inherit}.v-select,.v-select *{box-sizing:border-box}@-webkit-keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.vs__fade-enter-active,.vs__fade-leave-active{pointer-events:none;transition:opacity .15s cubic-bezier(1,.5,.8,1)}.vs__fade-enter,.vs__fade-leave-to{opacity:0}.vs--disabled .vs__clear,.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__open-indicator,.vs--disabled .vs__search,.vs--disabled .vs__selected{cursor:not-allowed;background-color:#f8f8f8}.v-select[dir=rtl] .vs__actions{padding:0 3px 0 6px}.v-select[dir=rtl] .vs__clear{margin-left:6px;margin-right:0}.v-select[dir=rtl] .vs__deselect{margin-left:0;margin-right:2px}.v-select[dir=rtl] .vs__dropdown-menu{text-align:right}.vs__dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:flex;padding:0 0 4px;background:none;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:normal}.vs__selected-options{display:flex;flex-basis:100%;flex-grow:1;flex-wrap:wrap;padding:0 2px;position:relative}.vs__actions{display:flex;align-items:center;padding:4px 6px 0 3px}.vs--searchable .vs__dropdown-toggle{cursor:text}.vs--unsearchable .vs__dropdown-toggle{cursor:pointer}.vs--open .vs__dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.vs__open-indicator{fill:rgba(60,60,60,.5);transform:scale(1);transition:transform .15s cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855)}.vs--open .vs__open-indicator{transform:rotate(180deg) scale(1)}.vs--loading .vs__open-indicator{opacity:0}.vs__clear{fill:rgba(60,60,60,.5);padding:0;border:0;background-color:transparent;cursor:pointer;margin-right:8px}.vs__dropdown-menu{display:block;box-sizing:border-box;position:absolute;top:calc(100% - 1px);left:0;z-index:1000;padding:5px 0;margin:0;width:100%;max-height:350px;min-width:160px;overflow-y:auto;box-shadow:0 3px 6px 0 rgba(0,0,0,.15);border:1px solid rgba(60,60,60,.26);border-top-style:none;border-radius:0 0 4px 4px;text-align:left;list-style:none;background:#fff}.vs__no-options{text-align:center}.vs__dropdown-option{line-height:1.42857143;display:block;padding:3px 20px;clear:both;color:#333;white-space:nowrap}.vs__dropdown-option:hover{cursor:pointer}.vs__dropdown-option--highlight{background:#5897fb;color:#fff}.vs__dropdown-option--disabled{background:inherit;color:rgba(60,60,60,.5)}.vs__dropdown-option--disabled:hover{cursor:inherit}.vs__selected{display:flex;align-items:center;background-color:#f0f0f0;border:1px solid rgba(60,60,60,.26);border-radius:4px;color:#333;line-height:1.4;margin:4px 2px 0;padding:0 .25em;z-index:0}.vs__deselect{display:inline-flex;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:4px;padding:0;border:0;cursor:pointer;background:none;fill:rgba(60,60,60,.5);text-shadow:0 1px 0 #fff}.vs--single .vs__selected{background-color:transparent;border-color:transparent}.vs--single.vs--open .vs__selected{position:absolute;opacity:.4}.vs--single.vs--searching .vs__selected{display:none}.vs__search::-webkit-search-cancel-button{display:none}.vs__search::-ms-clear,.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration{display:none}.vs__search,.vs__search:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.4;font-size:1em;border:1px solid transparent;border-left:none;outline:none;margin:4px 0 0;padding:0 7px;background:none;box-shadow:none;width:0;max-width:100%;flex-grow:1;z-index:1}.vs__search::-moz-placeholder{color:inherit}.vs__search:-ms-input-placeholder{color:inherit}.vs__search::-ms-input-placeholder{color:inherit}.vs__search::placeholder{color:inherit}.vs--unsearchable .vs__search{opacity:1}.vs--unsearchable:not(.vs--disabled) .vs__search:hover{cursor:pointer}.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{opacity:.2}.vs__spinner{align-self:center;opacity:0;font-size:5px;text-indent:-9999em;overflow:hidden;border:.9em solid hsla(0,0%,39.2%,.1);border-left-color:rgba(60,60,60,.45);transform:translateZ(0);-webkit-animation:vSelectSpinner 1.1s linear infinite;animation:vSelectSpinner 1.1s linear infinite;transition:opacity .1s}.vs__spinner,.vs__spinner:after{border-radius:50%;width:5em;height:5em}.vs--loading .vs__spinner{opacity:1}", ""]), e.exports = t
}]]);