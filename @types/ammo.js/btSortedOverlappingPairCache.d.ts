declare module Ammo {
  declare class btSortedOverlappingPairCache {
    constructor();


    addOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    cleanOverlappingPair(pair: btBroadphasePair, dispatcher: btDispatcher): void;
    cleanProxyFromPairs(proxy: btBroadphaseProxy, dispatcher: btDispatcher): void;
    findPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): btBroadphasePair;
    getOverlappingPairArray(): btBroadphasePairArray;
    getOverlapFilterCallback(): btOverlapFilterCallback;
    getNumOverlappingPairs(): number;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArray(): btBroadphasePairArray;
    hasDeferredRemoval(): boolean;
    needsBroadphaseCollision(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy): boolean;
    processAllOverlappingPairs(k: btOverlapCallbac, dispatcher: btDispatcher): void;
    removeOverlappingPairsContainingProxy(proxy: btBroadphaseProxy, dispatcher: btDispatcher): void;
    removeOverlappingPair(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy, dispatcher: btDispatcher): void;
    setOverlapFilterCallback(callback: btOverlapFilterCallback): void;
    setInternalGhostPairCallback(ghostPairCallback: btOverlappingPairCallback): void;
    sortOverlappingPairs(dispatcher: btDispatcher): void;
  }
}
