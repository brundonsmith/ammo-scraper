declare module Ammo {
  declare class btShapeHull {
    constructor();
    constructor(shape: btConvexShape);


    buildHull(margin: number, highres: number): boolean;
    getVertexPointer(): btVector3;
    getIndexPointer(): number;
    numTriangles(): number;
    numVertices(): number;
    numIndices(): number;
  }
}
