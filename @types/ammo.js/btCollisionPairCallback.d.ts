declare module Ammo {
  declare class btCollisionPairCallback {
    constructor(dispatchInfo: btDispatcherInfo, dispatcher: btCollisionDispatcher);
    processOverlap(pair: btBroadphasePair): boolean;
  }
}
