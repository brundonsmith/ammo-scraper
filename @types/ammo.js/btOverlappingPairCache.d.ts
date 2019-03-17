declare module Ammo {
  declare class btOverlappingPairCache {


    cleanOverlappingPair(pair: btBroadphasePair, dispatcher: btDispatcher): void;
    cleanProxyFromPairs(proxy: btBroadphaseProxy, dispatcher: btDispatcher): void;
    findPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArray(): btBroadphasePairArray;
    getNumOverlappingPairs(): number;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    hasDeferredRemoval(): boolean;
    processAllOverlappingPairs(k: btOverlapCallbac, dispatcher: btDispatcher): void;
    processAllOverlappingPairs(callback: btOverlapCallback, dispatcher: btDispatcher, btDispatcherInfo: struct): void;
    sortOverlappingPairs(dispatcher: btDispatcher): void;
    setInternalGhostPairCallback(ghostPairCallback: btOverlappingPairCallback): void;
    setOverlapFilterCallback(callback: btOverlapFilterCallback): void;
  }
}
