declare module Ammo {
  declare class btConvexInternalShape {
    constructor();
    localGetSupportingVertex(vec: btVector3): btVector3;
    getImplicitShapeDimensions(): btVector3;
    setImplicitShapeDimensions(dimensions: btVector3): void;
    setSafeMargin(minDimension: number, defaultMarginMultiplier: number): void;
    setSafeMargin(halfExtents: btVector3, defaultMarginMultiplier: number): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getAabbSlow(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    getLocalScalingNV(): btVector3;
    setMargin(margin: number): void;
    getMargin(): number;
    getMarginNV(): number;
    getNumPreferredPenetrationDirections(): number;
    getPreferredPenetrationDirection(index: number, penetrationVector: btVector3): void;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
