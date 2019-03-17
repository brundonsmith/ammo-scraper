declare module Ammo {
  declare class btConvexShape {
    constructor();
    constructor();


    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getPreferredPenetrationDirection(index: number, penetrationVector: btVector3): void;
    getNumPreferredPenetrationDirections(): number;
    getMarginNonVirtual(): number;
    getAabbNonVirtual(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getMargin(): number;
    getLocalScaling(): btVector3;
    getAabbSlow(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    localGetSupportVertexWithoutMarginNonVirtual(vec: btVector3): btVector3;
    localGetSupportingVertex(vec: btVector3): btVector3;
    localGetSupportVertexNonVirtual(vec: btVector3): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    project(trans: btTransform, dir: btVector3, minProj: number, maxProj: number, witnesPtMin: btVector3, witnesPtMax: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    setMargin(margin: number): void;
  }
}
