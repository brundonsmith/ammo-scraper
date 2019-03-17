declare module Ammo {
  declare class btPoolAllocator {
    constructor(elemSize: number, maxElements: number);


    allocate(size: number): void;
    freeMemory(ptr: void): void;
    getFreeCount(): number;
    getUsedCount(): number;
    getMaxCount(): number;
    getElementSize(): number;
    getPoolAddress(): string;
    getPoolAddress(): string;
    validPtr(ptr: void): boolean;
  }
}
