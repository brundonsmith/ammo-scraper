declare module Ammo {
  declare class btSerializer {


    allocate(size: size_t, numElements: number): btChunk;
    finishSerialization(): void;
    finalizeChunk(chunk: btChunk, structType: string, chunkCode: number, oldPtr: void): void;
    findPointer(oldPtr: void): void;
    findNameForPointer(ptr: void): string;
    getUniquePointer(oldPtr: void): void;
    getNumChunks(): number;
    getCurrentBufferSize(): number;
    getBufferPointer(): string;
    getSerializationFlags(): number;
    getChunk(chunkIndex: number): btChunk;
    registerNameForPointer(ptr: void, name: string): void;
    serializeName(ptr: string): void;
    setSerializationFlags(flags: number): void;
    startSerialization(): void;
  }
}
