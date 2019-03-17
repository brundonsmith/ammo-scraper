declare module Ammo {
  declare class btConvexHullInternal_Face {
    constructor();

    get_dir0(): Point32;	set_dir0(value: Point32): Point32;
    get_dir1(): Point32;	set_dir1(value: Point32): Point32;
    get_next(): Face;	set_next(value: Face): Face;
    get_nearbyVertex(): Vertex;	set_nearbyVertex(value: Vertex): Vertex;
    get_nextWithSameNearbyVertex(): Face;	set_nextWithSameNearbyVertex(value: Face): Face;
    get_origin(): Point32;	set_origin(value: Point32): Point32;

    getNormal(): Point64;
    init(a: Vertex, b: Vertex, c: Vertex): void;
  }
}
