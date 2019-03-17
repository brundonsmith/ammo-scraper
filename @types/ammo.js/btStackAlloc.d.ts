declare module Ammo {
  declare class btStackAlloc {
    constructor(size: number);
    create(size: number): void;
    destroy(): void;
    getAvailableMemory(): number;
    allocate(size: number): string;
    beginBlock(): btBlock;
    endBlock(block: btBlock): void;
  }
}
