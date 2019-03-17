declare module Ammo {
  declare class btConvexShape {
    constructor();
    constructor();
    localGetSupportingVertex(vec: btVector3): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    localGetSupportVertexWithoutMarginNonVirtual(vec: btVector3): btVector3;
    localGetSupportVertexNonVirtual(vec: btVector3): btVector3;
    getMarginNonVirtual(): number;
    getAabbNonVirtual(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    project(trans: btTransform, dir: btVector3, minProj: number, maxProj: number, witnesPtMin: btVector3, witnesPtMax: btVector3): void;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getAabbSlow(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    setMargin(margin: number): void;
    getMargin(): number;
    getNumPreferredPenetrationDirections(): number;
    getPreferredPenetrationDirection(index: number, penetrationVector: btVector3): void;
  }
}
