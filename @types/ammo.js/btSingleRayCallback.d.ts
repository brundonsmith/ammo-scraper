declare module Ammo {
  declare class btSingleRayCallback {
    constructor(rayFromWorld: btVector3, rayToWorld: btVector3, world: btCollisionWorld, resultCallback: btCollisionWorld_RayResultCallback);

    get_m_rayFromWorld(): btVector3;	set_m_rayFromWorld(value: btVector3): btVector3;
    get_m_rayToWorld(): btVector3;	set_m_rayToWorld(value: btVector3): btVector3;
    get_m_rayFromTrans(): btTransform;	set_m_rayFromTrans(value: btTransform): btTransform;
    get_m_rayToTrans(): btTransform;	set_m_rayToTrans(value: btTransform): btTransform;
    get_m_hitNormal(): btVector3;	set_m_hitNormal(value: btVector3): btVector3;
    get_m_world(): btCollisionWorld;	set_m_world(value: btCollisionWorld): btCollisionWorld;
    get_m_resultCallback(): btCollisionWorld_RayResultCallback;	set_m_resultCallback(value: btCollisionWorld_RayResultCallback): btCollisionWorld_RayResultCallback;

    process(proxy: btBroadphaseProxy): boolean;
  }
}
