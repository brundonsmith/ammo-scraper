declare module Ammo {
  declare class btConvexHullInternal_Edge {
    link(n: Edge): void;
    get_next(): Edge;	set_next(value: Edge): Edge;
    get_prev(): Edge;	set_prev(value: Edge): Edge;
    get_reverse(): Edge;	set_reverse(value: Edge): Edge;
    get_target(): Vertex;	set_target(value: Vertex): Vertex;
    get_face(): Face;	set_face(value: Face): Face;
    get_copy(): number;	set_copy(value: number): number;
  }
}
