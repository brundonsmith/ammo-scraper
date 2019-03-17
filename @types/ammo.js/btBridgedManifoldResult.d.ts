declare module Ammo {
  declare class btBridgedManifoldResult {
    constructor(obj0Wrap: btCollisionObjectWrapper, obj1Wrap: btCollisionObjectWrapper, resultCallback: btCollisionWorld_ContactResultCallback);

    get_m_resultCallback(): btCollisionWorld_ContactResultCallback;	set_m_resultCallback(value: btCollisionWorld_ContactResultCallback): btCollisionWorld_ContactResultCallback;

    addContactPoint(normalOnBInWorld: btVector3, pointInWorld: btVector3, depth: number): void;
  }
}
