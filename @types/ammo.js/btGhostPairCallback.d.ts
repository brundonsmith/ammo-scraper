declare module Ammo {
  declare class btGhostPairCallback {
    constructor();


    addOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    removeOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy, dispatcher: btDispatcher): void;
    removeOverlappingPairsContainingProxy(y: btBroadphaseProx, r: btDispatche): void;
  }
}
