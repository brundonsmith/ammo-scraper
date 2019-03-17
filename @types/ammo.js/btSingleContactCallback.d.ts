declare module Ammo {
  declare class btSingleContactCallback {
    constructor(collisionObject: btCollisionObject, world: btCollisionWorld, resultCallback: btCollisionWorld_ContactResultCallback);

    get_m_collisionObject(): btCollisionObject;	set_m_collisionObject(value: btCollisionObject): btCollisionObject;
    get_m_world(): btCollisionWorld;	set_m_world(value: btCollisionWorld): btCollisionWorld;
    get_m_resultCallback(): btCollisionWorld_ContactResultCallback;	set_m_resultCallback(value: btCollisionWorld_ContactResultCallback): btCollisionWorld_ContactResultCallback;

    process(proxy: btBroadphaseProxy): boolean;
  }
}
