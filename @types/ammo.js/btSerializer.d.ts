declare module Ammo {
  declare class btSerializer {
    getBufferPointer(): string;
    getCurrentBufferSize(): number;
    allocate(size: size_t, numElements: number): btChunk;
    finalizeChunk(chunk: btChunk, structType: string, chunkCode: number, oldPtr: void): void;
    findPointer(oldPtr: void): void;
    getUniquePointer(oldPtr: void): void;
    startSerialization(): void;
    finishSerialization(): void;
    findNameForPointer(ptr: void): string;
    registerNameForPointer(ptr: void, name: string): void;
    serializeName(ptr: string): void;
    getSerializationFlags(): number;
    setSerializationFlags(flags: number): void;
    getNumChunks(): number;
    getChunk(chunkIndex: number): btChunk;
  }
}
