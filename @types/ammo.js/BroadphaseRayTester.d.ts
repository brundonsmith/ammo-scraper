declare module Ammo {
  declare class BroadphaseRayTester {
    constructor(orgCallback: btBroadphaseRayCallback);

    get_m_rayCallback(): btBroadphaseRayCallback;	set_m_rayCallback(value: btBroadphaseRayCallback): btBroadphaseRayCallback;

    Process(leaf: btDbvtNode): void;
  }
}
