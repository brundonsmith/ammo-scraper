declare module Ammo {
  declare class BroadphaseAabbTester {
    constructor(orgCallback: btBroadphaseAabbCallback);

    get_m_aabbCallback(): btBroadphaseAabbCallback;	set_m_aabbCallback(value: btBroadphaseAabbCallback): btBroadphaseAabbCallback;

    Process(leaf: btDbvtNode): void;
  }
}
