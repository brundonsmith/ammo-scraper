declare module Ammo {
  declare class btConvexInternalAabbCachingShape {


    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    recalcLocalAabb(): void;
    setLocalScaling(scaling: btVector3): void;
  }
}
