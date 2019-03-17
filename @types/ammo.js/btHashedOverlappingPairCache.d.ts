declare module Ammo {
  declare class btHashedOverlappingPairCache {
    constructor();
    constructor();


    GetCount(): number;
    addOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    cleanProxyFromPairs(proxy: btBroadphaseProxy, dispatcher: btDispatcher): void;
    cleanOverlappingPair(pair: btBroadphasePair, dispatcher: btDispatcher): void;
    findPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    getNumOverlappingPairs(): number;
    getOverlappingPairArray(): btBroadphasePairArray;
    getOverlapFilterCallback(): btOverlapFilterCallback;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArray(): btBroadphasePairArray;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    needsBroadphaseCollision(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): boolean;
    processAllOverlappingPairs(callback: btOverlapCallback, dispatcher: btDispatcher, btDispatcherInfo: struct): void;
    processAllOverlappingPairs(k: btOverlapCallbac, dispatcher: btDispatcher): void;
    removeOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy, dispatcher: btDispatcher): void;
    removeOverlappingPairsContainingProxy(proxy: btBroadphaseProxy, dispatcher: btDispatcher): void;
    setOverlapFilterCallback(callback: btOverlapFilterCallback): void;
  }
}
