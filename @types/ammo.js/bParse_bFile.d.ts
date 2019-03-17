declare module Ammo {
  declare class bParse_bFile {
    constructor(filename: string, headerString: string);
    constructor(memoryBuffer: string, len: number, headerString: string);
    getFileDNA(): bDNA;
    addDataBlock(dataBlock: string): void;
    getFlags(): number;
    setFileDNAisMemoryDNA(): void;
    getLibPointers(): bPtrMap;
    findLibPointer(ptr: void): void;
    ok(): boolean;
    parse(verboseMode: number): void;
    write(fileName: string, fixupPointers: boolean): number;
    writeChunks(fp: FILE, fixupPointers: boolean): void;
    writeDNA(fp: FILE): void;
    updateOldPointers(): void;
    resolvePointers(verboseMode: number): void;
    dumpChunks(dna: bDNA): void;
    setFileDNA(verboseMode: number, buffer: string, len: number): void;
    getVersion(): number;
    preSwap(): void;
    writeFile(fileName: string): void;
  }
}
