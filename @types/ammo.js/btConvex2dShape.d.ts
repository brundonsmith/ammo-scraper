declare module Ammo {
  declare class btConvex2dShape {
    constructor();
    constructor(convexChildShape: btConvexShape);
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    localGetSupportingVertex(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getChildShape(): btConvexShape;
    getChildShape(): btConvexShape;
    getName(): string;
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
