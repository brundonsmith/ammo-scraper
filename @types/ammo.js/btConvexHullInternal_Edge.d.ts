declare module Ammo {
  declare class btConvexHullInternal_Edge {

    get_copy(): number;	set_copy(value: number): number;
    get_face(): Face;	set_face(value: Face): Face;
    get_next(): Edge;	set_next(value: Edge): Edge;
    get_prev(): Edge;	set_prev(value: Edge): Edge;
    get_reverse(): Edge;	set_reverse(value: Edge): Edge;
    get_target(): Vertex;	set_target(value: Vertex): Vertex;

    link(n: Edge): void;
  }
}
