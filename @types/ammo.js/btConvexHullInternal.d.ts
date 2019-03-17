declare module Ammo {
  declare class btConvexHullInternal {

    get_vertexList(): Vertex;	set_vertexList(value: Vertex): Vertex;

    compute(coords: void, doubleCoords: boolean, stride: number, count: number): void;
    getCoordinates(v: Vertex): btVector3;
    shrink(amount: number, clampAmount: number): number;
  }
}
