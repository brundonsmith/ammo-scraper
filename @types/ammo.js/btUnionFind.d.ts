declare module Ammo {
  declare class btUnionFind {
    constructor();


    Free(): void;
    allocate(N: number): void;
    find(x: number): number;
    find(p: number, q: number): number;
    getElement(index: number): btElement;
    getNumElements(): number;
    getElement(index: number): btElement;
    isRoot(x: number): boolean;
    reset(N: number): void;
    sortIslands(): void;
    unite(p: number, q: number): void;
  }
}
