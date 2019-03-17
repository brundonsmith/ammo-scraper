declare module Ammo {
  declare class btCollisionWorld_RayResultCallback {
    constructor();

    get_m_closestHitFraction(): number;	set_m_closestHitFraction(value: number): number;
    get_m_collisionObject(): btCollisionObject;	set_m_collisionObject(value: btCollisionObject): btCollisionObject;
    get_m_collisionFilterGroup(): number;	set_m_collisionFilterGroup(value: number): number;
    get_m_collisionFilterMask(): number;	set_m_collisionFilterMask(value: number): number;
    get_m_flags(): number;	set_m_flags(value: number): number;

    addSingleResult(rayResult: LocalRayResult, normalInWorldSpace: boolean): number;
    hasHit(): boolean;
    needsCollision(proxy0: btBroadphaseProxy): boolean;
  }
}
