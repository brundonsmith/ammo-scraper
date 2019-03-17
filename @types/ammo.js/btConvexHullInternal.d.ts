declare module Ammo {
  declare class btConvexHullInternal {
    compute(coords: void, doubleCoords: boolean, stride: number, count: number): void;
    getCoordinates(v: Vertex): btVector3;
    shrink(amount: number, clampAmount: number): number;
    get_vertexList(): Vertex;	set_vertexList(value: Vertex): Vertex;
  }
}
