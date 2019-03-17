declare module Ammo {
  declare class btCollisionWorld_ContactResultCallback {
    constructor();
    needsCollision(proxy0: btBroadphaseProxy): boolean;
    addSingleResult(cp: btManifoldPoint, colObj0Wrap: btCollisionObjectWrapper, partId0: number, index0: number, colObj1Wrap: btCollisionObjectWrapper, partId1: number, index1: number): number;
    get_m_collisionFilterGroup(): number;	set_m_collisionFilterGroup(value: number): number;
    get_m_collisionFilterMask(): number;	set_m_collisionFilterMask(value: number): number;
    get_m_closestDistanceThreshold(): number;	set_m_closestDistanceThreshold(value: number): number;
  }
}
