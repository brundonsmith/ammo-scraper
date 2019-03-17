declare module Ammo {
  declare class btConvexInternalShape {
    constructor();


    calculateSerializeBufferSize(): number;
    getImplicitShapeDimensions(): btVector3;
    getLocalScaling(): btVector3;
    getPreferredPenetrationDirection(index: number, penetrationVector: btVector3): void;
    getNumPreferredPenetrationDirections(): number;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getAabbSlow(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getMarginNV(): number;
    getMargin(): number;
    getLocalScalingNV(): btVector3;
    localGetSupportingVertex(vec: btVector3): btVector3;
    setMargin(margin: number): void;
    setLocalScaling(scaling: btVector3): void;
    setSafeMargin(halfExtents: btVector3, defaultMarginMultiplier: number): void;
    setSafeMargin(minDimension: number, defaultMarginMultiplier: number): void;
    setImplicitShapeDimensions(dimensions: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
