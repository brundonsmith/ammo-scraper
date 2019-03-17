declare module Ammo {
  declare class btCollisionWorld_ClosestConvexResultCallback {
    constructor(convexFromWorld: btVector3, convexToWorld: btVector3);

    get_m_convexFromWorld(): btVector3;	set_m_convexFromWorld(value: btVector3): btVector3;
    get_m_convexToWorld(): btVector3;	set_m_convexToWorld(value: btVector3): btVector3;
    get_m_hitNormalWorld(): btVector3;	set_m_hitNormalWorld(value: btVector3): btVector3;
    get_m_hitPointWorld(): btVector3;	set_m_hitPointWorld(value: btVector3): btVector3;
    get_m_hitCollisionObject(): btCollisionObject;	set_m_hitCollisionObject(value: btCollisionObject): btCollisionObject;

    addSingleResult(convexResult: LocalConvexResult, normalInWorldSpace: boolean): number;
  }
}
