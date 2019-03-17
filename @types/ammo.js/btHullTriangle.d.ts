declare module Ammo {
  declare class btHullTriangle {
    constructor(a: number, b: number, c: number);
    neib(a: number, b: number): number;
    get_n(): int3;	set_n(value: int3): int3;
    get_id(): number;	set_id(value: number): number;
    get_vmax(): number;	set_vmax(value: number): number;
    get_rise(): number;	set_rise(value: number): number;
  }
}
