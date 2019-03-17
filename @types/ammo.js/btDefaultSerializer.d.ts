declare module Ammo {
  declare class btDefaultSerializer {
    constructor(totalSize: number, buffer: string);
    insertHeader(): void;
    writeHeader(buffer: string): void;
    startSerialization(): void;
    finishSerialization(): void;
    getUniquePointer(oldPtr: void): void;
    getBufferPointer(): string;
    getCurrentBufferSize(): number;
    finalizeChunk(chunk: btChunk, structType: string, chunkCode: number, oldPtr: void): void;
    internalAlloc(size: size_t): string;
    allocate(size: size_t, numElements: number): btChunk;
    findNameForPointer(ptr: void): string;
    registerNameForPointer(ptr: void, name: string): void;
    serializeName(name: string): void;
    getSerializationFlags(): number;
    setSerializationFlags(flags: number): void;
    getNumChunks(): number;
    getChunk(chunkIndex: number): btChunk;
    get_int(): static;	set_int(value: static): static;
    get_const(): static;	set_const(value: static): static;
    get_p(): btHashMa;	set_p(value: btHashMa): btHashMa;
  }
}
