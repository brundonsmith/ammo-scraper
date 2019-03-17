declare module Ammo {
  declare class btSoftSingleRayCallback {
    constructor(rayFromWorld: btVector3, rayToWorld: btVector3, world: btSoftMultiBodyDynamicsWorld, resultCallback: btCollisionWorld_RayResultCallback);
    process(proxy: btBroadphaseProxy): boolean;
    constructor(rayFromWorld: btVector3, rayToWorld: btVector3, world: btSoftRigidDynamicsWorld, resultCallback: btCollisionWorld_RayResultCallback);
    process(proxy: btBroadphaseProxy): boolean;
    get_m_rayFromWorld(): btVector3;	set_m_rayFromWorld(value: btVector3): btVector3;
    get_m_rayToWorld(): btVector3;	set_m_rayToWorld(value: btVector3): btVector3;
    get_m_rayFromTrans(): btTransform;	set_m_rayFromTrans(value: btTransform): btTransform;
    get_m_rayToTrans(): btTransform;	set_m_rayToTrans(value: btTransform): btTransform;
    get_m_hitNormal(): btVector3;	set_m_hitNormal(value: btVector3): btVector3;
    get_m_world(): btSoftMultiBodyDynamicsWorld;	set_m_world(value: btSoftMultiBodyDynamicsWorld): btSoftMultiBodyDynamicsWorld;
    get_m_resultCallback(): btCollisionWorld_RayResultCallback;	set_m_resultCallback(value: btCollisionWorld_RayResultCallback): btCollisionWorld_RayResultCallback;
    get_m_world(): btSoftRigidDynamicsWorld;	set_m_world(value: btSoftRigidDynamicsWorld): btSoftRigidDynamicsWorld;
  }
}
