declare module Ammo {
  declare class btBox2dShape {
    constructor();
    constructor(boxHalfExtents: btVector3);


    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getName(): string;
    getPreferredPenetrationDirection(index: number, penetrationVector: btVector3): void;
    getHalfExtentsWithoutMargin(): btVector3;
    getEdge(i: number, pa: btVector3, pb: btVector3): void;
    getPlaneEquation(plane: btVector4, i: number): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getNumPreferredPenetrationDirections(): number;
    getVertexCount(): number;
    getNumVertices(): number;
    getHalfExtentsWithMargin(): btVector3;
    getNormals(): btVector3;
    getPlane(planeNormal: btVector3, planeSupport: btVector3, i: number): void;
    getCentroid(): btVector3;
    getNumPlanes(): number;
    getNumEdges(): number;
    getVertex(i: number, vtx: btVector3): void;
    getVertices(): btVector3;
    isInside(pt: btVector3, tolerance: number): boolean;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    localGetSupportingVertex(vec: btVector3): btVector3;
    setLocalScaling(scaling: btVector3): void;
    setMargin(collisionMargin: number): void;
  }
}
