declare module Ammo {
  declare class btPolyhedralConvexShape {
    constructor();
    constructor();
    initializePolyhedralFeatures(shiftVerticesByMargin: number): boolean;
    setPolyhedralFeatures(polyhedron: btConvexPolyhedron): void;
    getConvexPolyhedron(): btConvexPolyhedron;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getNumVertices(): number;
    getNumEdges(): number;
    getEdge(i: number, pa: btVector3, pb: btVector3): void;
    getVertex(i: number, vtx: btVector3): void;
    getNumPlanes(): number;
    getPlane(planeNormal: btVector3, planeSupport: btVector3, i: number): void;
    isInside(pt: btVector3, tolerance: number): boolean;
  }
}
