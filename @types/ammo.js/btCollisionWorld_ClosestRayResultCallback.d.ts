declare module Ammo {
  declare class btCollisionWorld_ClosestRayResultCallback {
    constructor(rayFromWorld: btVector3, rayToWorld: btVector3);

    get_m_rayFromWorld(): btVector3;	set_m_rayFromWorld(value: btVector3): btVector3;
    get_m_rayToWorld(): btVector3;	set_m_rayToWorld(value: btVector3): btVector3;
    get_m_hitNormalWorld(): btVector3;	set_m_hitNormalWorld(value: btVector3): btVector3;
    get_m_hitPointWorld(): btVector3;	set_m_hitPointWorld(value: btVector3): btVector3;

    addSingleResult(rayResult: LocalRayResult, normalInWorldSpace: boolean): number;
  }
}
