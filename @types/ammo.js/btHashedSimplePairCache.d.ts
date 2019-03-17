declare module Ammo {
  declare class btHashedSimplePairCache {
    constructor();
    removeAllPairs(): void;
    removeOverlappingPair(indexA: number, indexB: number): void;
    addOverlappingPair(indexA: number, indexB: number): btSimplePair;
    getOverlappingPairArrayPtr(): btSimplePair;
    getOverlappingPairArrayPtr(): btSimplePair;
    getOverlappingPairArray(): btSimplePairArray;
    getOverlappingPairArray(): btSimplePairArray;
    findPair(indexA: number, indexB: number): btSimplePair;
    GetCount(): number;
    getNumOverlappingPairs(): number;
  }
}
