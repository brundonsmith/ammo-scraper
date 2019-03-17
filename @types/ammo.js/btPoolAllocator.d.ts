declare module Ammo {
  declare class btPoolAllocator {
    constructor(elemSize: number, maxElements: number);
    getFreeCount(): number;
    getUsedCount(): number;
    getMaxCount(): number;
    allocate(size: number): void;
    validPtr(ptr: void): boolean;
    freeMemory(ptr: void): void;
    getElementSize(): number;
    getPoolAddress(): string;
    getPoolAddress(): string;
  }
}
