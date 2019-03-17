declare module Ammo {
  declare class btBroadphaseAabbCallback {
    process(proxy: btBroadphaseProxy): boolean;
  }
}
