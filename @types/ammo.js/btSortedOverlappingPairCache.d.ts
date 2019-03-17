declare module Ammo {
  declare class btSortedOverlappingPairCache {
    constructor();
    processAllOverlappingPairs(k: btOverlapCallbac, dispatcher: btDispatcher): void;
    removeOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy, dispatcher: btDispatcher): void;
    cleanOverlappingPair(pair: btBroadphasePair, dispatcher: btDispatcher): void;
    addOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    findPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    cleanProxyFromPairs(proxy: btBroadphaseProxy, dispatcher: btDispatcher): void;
    removeOverlappingPairsContainingProxy(proxy: btBroadphaseProxy, dispatcher: btDispatcher): void;
    needsBroadphaseCollision(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): boolean;
    getOverlappingPairArray(): btBroadphasePairArray;
    getOverlappingPairArray(): btBroadphasePairArray;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getNumOverlappingPairs(): number;
    getOverlapFilterCallback(): btOverlapFilterCallback;
    setOverlapFilterCallback(callback: btOverlapFilterCallback): void;
    hasDeferredRemoval(): boolean;
    setInternalGhostPairCallback(ghostPairCallback: btOverlappingPairCallback): void;
    sortOverlappingPairs(dispatcher: btDispatcher): void;
  }
}
