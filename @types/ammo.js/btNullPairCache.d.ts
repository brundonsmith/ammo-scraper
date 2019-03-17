declare module Ammo {
  declare class btNullPairCache {
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArray(): btBroadphasePairArray;
    cleanOverlappingPair(r: btBroadphasePai, r: btDispatche): void;
    getNumOverlappingPairs(): number;
    cleanProxyFromPairs(y: btBroadphaseProx, r: btDispatche): void;
    setOverlapFilterCallback(k: btOverlapFilterCallbac): void;
    processAllOverlappingPairs(k: btOverlapCallbac, r: btDispatche): void;
    findPair(y: btBroadphaseProx, y: btBroadphaseProx): btBroadphasePair;
    hasDeferredRemoval(): boolean;
    setInternalGhostPairCallback(k: btOverlappingPairCallbac): void;
    addOverlappingPair(y: btBroadphaseProx, y: btBroadphaseProx): btBroadphasePair;
    removeOverlappingPair(y: btBroadphaseProx, y: btBroadphaseProx, r: btDispatche): void;
    removeOverlappingPairsContainingProxy(y: btBroadphaseProx, r: btDispatche): void;
    sortOverlappingPairs(dispatcher: btDispatcher): void;
  }
}
