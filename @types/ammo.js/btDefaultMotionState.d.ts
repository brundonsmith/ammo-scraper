declare module Ammo {
  declare class btDefaultMotionState {
    constructor();
    constructor(startTrans: btTransform, centerOfMassOffset: btTransform);

    get_m_graphicsWorldTrans(): btTransform;	set_m_graphicsWorldTrans(value: btTransform): btTransform;
    get_m_centerOfMassOffset(): btTransform;	set_m_centerOfMassOffset(value: btTransform): btTransform;
    get_m_startWorldTrans(): btTransform;	set_m_startWorldTrans(value: btTransform): btTransform;
    get_m_userPointer(): void;	set_m_userPointer(value: void): void;

    getWorldTransform(centerOfMassWorldTrans: btTransform): void;
    setWorldTransform(centerOfMassWorldTrans: btTransform): void;
  }
}
