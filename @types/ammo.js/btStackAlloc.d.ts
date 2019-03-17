declare module Ammo {
  declare class btStackAlloc {
    constructor(size: number);


    allocate(size: number): string;
    beginBlock(): btBlock;
    create(size: number): void;
    destroy(): void;
    endBlock(block: btBlock): void;
    getAvailableMemory(): number;
  }
}
