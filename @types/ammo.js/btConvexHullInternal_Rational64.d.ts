declare module Ammo {
  declare class btConvexHullInternal_Rational64 {
    constructor(numerator: int64_t, denominator: int64_t);


    compare(b: Rational64): number;
    isNegativeInfinity(): boolean;
    isNaN(): boolean;
    toScalar(): number;
  }
}
