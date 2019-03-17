declare module Ammo {
  declare class btOverlappingPairCallback {


    addOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    removeOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy, dispatcher: btDispatcher): void;
    removeOverlappingPairsContainingProxy(proxy0: btBroadphaseProxy, dispatcher: btDispatcher): void;
  }
}
