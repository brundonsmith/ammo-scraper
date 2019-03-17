declare module Ammo {
  declare class btKinematicClosestNotMeRayResultCallback {
    constructor(me: btCollisionObject);
    addSingleResult(rayResult: btCollisionWorld_LocalRayResult, normalInWorldSpace: boolean): number;
  }
}
