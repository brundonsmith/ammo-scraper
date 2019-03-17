declare module Ammo {
  declare class btShapeHull {
    constructor();
    constructor(shape: btConvexShape);
    buildHull(margin: number, highres: number): boolean;
    numTriangles(): number;
    numVertices(): number;
    numIndices(): number;
    getVertexPointer(): btVector3;
    getIndexPointer(): number;
  }
}
