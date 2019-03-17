declare module Ammo {
  declare class btBox2dShape {
    constructor();
    getHalfExtentsWithMargin(): btVector3;
    getHalfExtentsWithoutMargin(): btVector3;
    localGetSupportingVertex(vec: btVector3): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    constructor(boxHalfExtents: btVector3);
    setMargin(collisionMargin: number): void;
    setLocalScaling(scaling: btVector3): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getVertexCount(): number;
    getNumVertices(): number;
    getVertices(): btVector3;
    getNormals(): btVector3;
    getPlane(planeNormal: btVector3, planeSupport: btVector3, i: number): void;
    getCentroid(): btVector3;
    getNumPlanes(): number;
    getNumEdges(): number;
    getVertex(i: number, vtx: btVector3): void;
    getPlaneEquation(plane: btVector4, i: number): void;
    getEdge(i: number, pa: btVector3, pb: btVector3): void;
    isInside(pt: btVector3, tolerance: number): boolean;
    getName(): string;
    getNumPreferredPenetrationDirections(): number;
    getPreferredPenetrationDirection(index: number, penetrationVector: btVector3): void;
  }
}
