declare module Ammo {
  declare class btConvexHullInternal_Point64 {
    constructor(x: int64_t, y: int64_t, z: int64_t);
    isZero(): boolean;
    dot(b: Point64): int64_t;
    get_x(): int64_t;	set_x(value: int64_t): int64_t;
    get_y(): int64_t;	set_y(value: int64_t): int64_t;
    get_z(): int64_t;	set_z(value: int64_t): int64_t;
  }
}
