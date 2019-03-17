declare module Ammo {
  declare class btConvexHullInternal_Int128 {
    constructor();
    constructor(low: uint64_t, high: uint64_t);
    constructor(low: uint64_t);
    constructor(value: int64_t);
    get_operator(): Int128;	set_operator(value: Int128): Int128;
    get_operator(): Int128;	set_operator(value: Int128): Int128;
    get_operator(): Int128;	set_operator(value: Int128): Int128;
    get_operator(): Int128;	set_operator(value: Int128): Int128;
    get_operator(): Int128;	set_operator(value: Int128): Int128;
    get_operator(): Int128;	set_operator(value: Int128): Int128;
    toScalar(): number;
    getSign(): number;
    get_operator(): boolean;	set_operator(value: boolean): boolean;
    ucmp(b: Int128): number;
    get_Int128(): static;	set_Int128(value: static): static;
    get_Int128(): static;	set_Int128(value: static): static;
    get_low(): uint64_t;	set_low(value: uint64_t): uint64_t;
    get_high(): uint64_t;	set_high(value: uint64_t): uint64_t;
  }
}
