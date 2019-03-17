declare module Ammo {
  declare class btHashedOverlappingPairCache {
    constructor();
    constructor();
    removeOverlappingPairsContainingProxy(proxy: btBroadphaseProxy, dispatcher: btDispatcher): void;
    removeOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy, dispatcher: btDispatcher): void;
    needsBroadphaseCollision(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): boolean;
    addOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    cleanProxyFromPairs(proxy: btBroadphaseProxy, dispatcher: btDispatcher): void;
    processAllOverlappingPairs(k: btOverlapCallbac, dispatcher: btDispatcher): void;
    processAllOverlappingPairs(callback: btOverlapCallback, dispatcher: btDispatcher, btDispatcherInfo: struct): void;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArray(): btBroadphasePairArray;
    getOverlappingPairArray(): btBroadphasePairArray;
    cleanOverlappingPair(pair: btBroadphasePair, dispatcher: btDispatcher): void;
    findPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    GetCount(): number;
    getOverlapFilterCallback(): btOverlapFilterCallback;
    setOverlapFilterCallback(callback: btOverlapFilterCallback): void;
    getNumOverlappingPairs(): number;
  }
}
