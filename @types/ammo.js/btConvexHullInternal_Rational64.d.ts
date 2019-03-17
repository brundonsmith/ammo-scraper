declare module Ammo {
  declare class btConvexHullInternal_Rational64 {
    constructor(numerator: int64_t, denominator: int64_t);
    isNegativeInfinity(): boolean;
    isNaN(): boolean;
    compare(b: Rational64): number;
    toScalar(): number;
  }
}
