declare module Ammo {
  declare class btConvexHullInternal_Vertex {
    constructor();

    get_copy(): number;	set_copy(value: number): number;
    get_edges(): Edge;	set_edges(value: Edge): Edge;
    get_firstNearbyFace(): Face;	set_firstNearbyFace(value: Face): Face;
    get_lastNearbyFace(): Face;	set_lastNearbyFace(value: Face): Face;
    get_next(): Vertex;	set_next(value: Vertex): Vertex;
    get_operator(): Point32;	set_operator(value: Point32): Point32;
    get_point(): Point32;	set_point(value: Point32): Point32;
    get_point128(): PointR128;	set_point128(value: PointR128): PointR128;
    get_prev(): Vertex;	set_prev(value: Vertex): Vertex;

    dot(b: Point64): Rational128;
    receiveNearbyFaces(src: Vertex): void;
    xvalue(): number;
    yvalue(): number;
    zvalue(): number;
  }
}
