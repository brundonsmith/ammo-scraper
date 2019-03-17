declare module Ammo {
  declare class btConvexHullInternal_Rational128 {
    constructor(value: int64_t);
    constructor(numerator: Int128, denominator: Int128);
    compare(b: Rational128): number;
    compare(b: int64_t): number;
    toScalar(): number;
  }
}
