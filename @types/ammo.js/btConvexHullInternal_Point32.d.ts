declare module Ammo {
  declare class btConvexHullInternal_Point32 {
    constructor();
    constructor(x: int32_t, y: int32_t, z: int32_t);

    get_index(): number;	set_index(value: number): number;
    get_operator(): Point32;	set_operator(value: Point32): Point32;
    get_operator(): boolean;	set_operator(value: boolean): boolean;
    get_operator(): Point32;	set_operator(value: Point32): Point32;
    get_operator(): boolean;	set_operator(value: boolean): boolean;
    get_x(): int32_t;	set_x(value: int32_t): int32_t;
    get_y(): int32_t;	set_y(value: int32_t): int32_t;
    get_z(): int32_t;	set_z(value: int32_t): int32_t;

    cross(b: Point64): Point64;
    cross(b: Point32): Point64;
    dot(b: Point64): int64_t;
    dot(b: Point32): int64_t;
    isZero(): boolean;
  }
}
