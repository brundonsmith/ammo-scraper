declare module Ammo {
  declare class btCollisionWorld_ConvexResultCallback {
    constructor();

    get_m_closestHitFraction(): number;	set_m_closestHitFraction(value: number): number;
    get_m_collisionFilterGroup(): number;	set_m_collisionFilterGroup(value: number): number;
    get_m_collisionFilterMask(): number;	set_m_collisionFilterMask(value: number): number;

    addSingleResult(convexResult: LocalConvexResult, normalInWorldSpace: boolean): number;
    hasHit(): boolean;
    needsCollision(proxy0: btBroadphaseProxy): boolean;
  }
}
