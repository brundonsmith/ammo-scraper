declare module Ammo {
  declare class bParse_bFile {
    constructor(filename: string, headerString: string);
    constructor(memoryBuffer: string, len: number, headerString: string);


    addDataBlock(dataBlock: string): void;
    dumpChunks(dna: bDNA): void;
    findLibPointer(ptr: void): void;
    getFlags(): number;
    getVersion(): number;
    getLibPointers(): bPtrMap;
    getFileDNA(): bDNA;
    ok(): boolean;
    preSwap(): void;
    parse(verboseMode: number): void;
    resolvePointers(verboseMode: number): void;
    setFileDNA(verboseMode: number, buffer: string, len: number): void;
    setFileDNAisMemoryDNA(): void;
    updateOldPointers(): void;
    writeFile(fileName: string): void;
    writeChunks(fp: FILE, fixupPointers: boolean): void;
    writeDNA(fp: FILE): void;
    write(fileName: string, fixupPointers: boolean): number;
  }
}
