declare module Ammo {
  declare class btHashedSimplePairCache {
    constructor();


    GetCount(): number;
    addOverlappingPair(indexA: number, indexB: number): btSimplePair;
    findPair(indexA: number, indexB: number): btSimplePair;
    getOverlappingPairArrayPtr(): btSimplePair;
    getNumOverlappingPairs(): number;
    getOverlappingPairArray(): btSimplePairArray;
    getOverlappingPairArray(): btSimplePairArray;
    getOverlappingPairArrayPtr(): btSimplePair;
    removeAllPairs(): void;
    removeOverlappingPair(indexA: number, indexB: number): void;
  }
}
