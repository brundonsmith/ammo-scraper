declare module Ammo {
  declare class btOverlappingPairCache {
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArray(): btBroadphasePairArray;
    cleanOverlappingPair(pair: btBroadphasePair, dispatcher: btDispatcher): void;
    getNumOverlappingPairs(): number;
    cleanProxyFromPairs(proxy: btBroadphaseProxy, dispatcher: btDispatcher): void;
    setOverlapFilterCallback(callback: btOverlapFilterCallback): void;
    processAllOverlappingPairs(k: btOverlapCallbac, dispatcher: btDispatcher): void;
    processAllOverlappingPairs(callback: btOverlapCallback, dispatcher: btDispatcher, btDispatcherInfo: struct): void;
    findPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    hasDeferredRemoval(): boolean;
    setInternalGhostPairCallback(ghostPairCallback: btOverlappingPairCallback): void;
    sortOverlappingPairs(dispatcher: btDispatcher): void;
  }
}
