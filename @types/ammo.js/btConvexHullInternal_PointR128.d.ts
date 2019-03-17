declare module Ammo {
  declare class btConvexHullInternal_PointR128 {
    constructor();
    constructor(x: Int128, y: Int128, z: Int128, denominator: Int128);
    xvalue(): number;
    yvalue(): number;
    zvalue(): number;
    get_x(): Int128;	set_x(value: Int128): Int128;
    get_y(): Int128;	set_y(value: Int128): Int128;
    get_z(): Int128;	set_z(value: Int128): Int128;
    get_denominator(): Int128;	set_denominator(value: Int128): Int128;
  }
}
