declare module Ammo {
  declare class btUniformScalingShape {
    constructor();
    constructor(convexChildShape: btConvexShape, uniformScalingFactor: number);


    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getPreferredPenetrationDirection(index: number, penetrationVector: btVector3): void;
    getNumPreferredPenetrationDirections(): number;
    getUniformScalingFactor(): number;
    getChildShape(): btConvexShape;
    getChildShape(): btConvexShape;
    getMargin(): number;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getAabbSlow(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getLocalScaling(): btVector3;
    getName(): string;
    localGetSupportingVertex(vec: btVector3): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    setLocalScaling(scaling: btVector3): void;
    setMargin(margin: number): void;
  }
}
