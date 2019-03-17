declare module Ammo {
  declare class BroadphaseAabbTester {
    constructor(orgCallback: btBroadphaseAabbCallback);
    Process(leaf: btDbvtNode): void;
    get_m_aabbCallback(): btBroadphaseAabbCallback;	set_m_aabbCallback(value: btBroadphaseAabbCallback): btBroadphaseAabbCallback;
  }
}
