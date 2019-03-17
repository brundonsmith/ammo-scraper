declare module Ammo {
  declare class btConvexInternalAabbCachingShape {
    setLocalScaling(scaling: btVector3): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    recalcLocalAabb(): void;
  }
}
