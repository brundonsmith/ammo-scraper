declare module Ammo {
  declare class btConvexHullInternal_IntermediateHull {
    constructor();
    print(): void;
    get_minXy(): Vertex;	set_minXy(value: Vertex): Vertex;
    get_maxXy(): Vertex;	set_maxXy(value: Vertex): Vertex;
    get_minYx(): Vertex;	set_minYx(value: Vertex): Vertex;
    get_maxYx(): Vertex;	set_maxYx(value: Vertex): Vertex;
  }
}
