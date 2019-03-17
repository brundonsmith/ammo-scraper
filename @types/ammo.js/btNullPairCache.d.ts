declare module Ammo {
  declare class btNullPairCache {


    addOverlappingPair(y: btBroadphaseProx, y: btBroadphaseProx): btBroadphasePair;
    cleanOverlappingPair(r: btBroadphasePai, r: btDispatche): void;
    cleanProxyFromPairs(y: btBroadphaseProx, r: btDispatche): void;
    findPair(y: btBroadphaseProx, y: btBroadphaseProx): btBroadphasePair;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    getOverlappingPairArray(): btBroadphasePairArray;
    getNumOverlappingPairs(): number;
    getOverlappingPairArrayPtr(): btBroadphasePair;
    hasDeferredRemoval(): boolean;
    processAllOverlappingPairs(k: btOverlapCallbac, r: btDispatche): void;
    removeOverlappingPair(y: btBroadphaseProx, y: btBroadphaseProx, r: btDispatche): void;
    removeOverlappingPairsContainingProxy(y: btBroadphaseProx, r: btDispatche): void;
    setInternalGhostPairCallback(k: btOverlappingPairCallbac): void;
    setOverlapFilterCallback(k: btOverlapFilterCallbac): void;
    sortOverlappingPairs(dispatcher: btDispatcher): void;
  }
}
