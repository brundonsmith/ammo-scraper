declare module Ammo {
  declare class btPolyhedralConvexAabbCachingShape {
    getNonvirtualAabb(trans: btTransform, aabbMin: btVector3, aabbMax: btVector3, margin: number): void;
    setLocalScaling(scaling: btVector3): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    recalcLocalAabb(): void;
  }
}
