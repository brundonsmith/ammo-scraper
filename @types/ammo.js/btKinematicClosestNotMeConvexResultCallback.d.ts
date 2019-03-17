declare module Ammo {
  declare class btKinematicClosestNotMeConvexResultCallback {
    constructor(me: btCollisionObject, up: btVector3, minSlopeDot: number);
    addSingleResult(convexResult: btCollisionWorld_LocalConvexResult, normalInWorldSpace: boolean): number;
  }
}
