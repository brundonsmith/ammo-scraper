declare module Ammo {
  declare class btPolyhedralConvexShape {
    constructor();
    constructor();


    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getNumEdges(): number;
    getConvexPolyhedron(): btConvexPolyhedron;
    getPlane(planeNormal: btVector3, planeSupport: btVector3, i: number): void;
    getNumPlanes(): number;
    getNumVertices(): number;
    getVertex(i: number, vtx: btVector3): void;
    getEdge(i: number, pa: btVector3, pb: btVector3): void;
    initializePolyhedralFeatures(shiftVerticesByMargin: number): boolean;
    isInside(pt: btVector3, tolerance: number): boolean;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    setPolyhedralFeatures(polyhedron: btConvexPolyhedron): void;
  }
}
