declare module Ammo {
  declare class btDefaultSerializer {
    constructor(totalSize: number, buffer: string);

    get_const(): static;	set_const(value: static): static;
    get_int(): static;	set_int(value: static): static;
    get_p(): btHashMa;	set_p(value: btHashMa): btHashMa;

    allocate(size: size_t, numElements: number): btChunk;
    finishSerialization(): void;
    findNameForPointer(ptr: void): string;
    finalizeChunk(chunk: btChunk, structType: string, chunkCode: number, oldPtr: void): void;
    getSerializationFlags(): number;
    getCurrentBufferSize(): number;
    getChunk(chunkIndex: number): btChunk;
    getBufferPointer(): string;
    getUniquePointer(oldPtr: void): void;
    getNumChunks(): number;
    internalAlloc(size: size_t): string;
    insertHeader(): void;
    registerNameForPointer(ptr: void, name: string): void;
    setSerializationFlags(flags: number): void;
    serializeName(name: string): void;
    startSerialization(): void;
    writeHeader(buffer: string): void;
  }
}
