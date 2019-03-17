declare module Ammo {
  declare class btConvexHullInternal_Int128 {
    constructor();
    constructor(low: uint64_t);
    constructor(value: int64_t);
    constructor(low: uint64_t, high: uint64_t);

    get_Int128(): static;	set_Int128(value: static): static;
    get_Int128(): static;	set_Int128(value: static): static;
    get_high(): uint64_t;	set_high(value: uint64_t): uint64_t;
    get_low(): uint64_t;	set_low(value: uint64_t): uint64_t;
    get_operator(): boolean;	set_operator(value: boolean): boolean;
    get_operator(): Int128;	set_operator(value: Int128): Int128;
    get_operator(): Int128;	set_operator(value: Int128): Int128;
    get_operator(): Int128;	set_operator(value: Int128): Int128;
    get_operator(): Int128;	set_operator(value: Int128): Int128;
    get_operator(): Int128;	set_operator(value: Int128): Int128;
    get_operator(): Int128;	set_operator(value: Int128): Int128;

    getSign(): number;
    toScalar(): number;
    ucmp(b: Int128): number;
  }
}
