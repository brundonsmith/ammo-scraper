declare module Ammo {
  declare class bParse_bDNA {
    constructor();
    init(data: string, len: number, swap: boolean): void;
    getArraySize(str: string): number;
    getArraySizeNew(e: nam): number;
    getElementSize(e: typ, e: nam): number;
    getNumNames(): number;
    getName(ind: number): string;
    getType(ind: number): string;
    getStruct(ind: number): short;
    getLength(ind: number): short;
    getReverseType(e: typ): number;
    getReverseType(type: string): number;
    getNumStructs(): number;
    lessThan(other: bDNA): boolean;
    initCmpFlags(memDNA: bDNA): void;
    flagNotEqual(dna_nr: number): boolean;
    flagEqual(dna_nr: number): boolean;
    flagNone(dna_nr: number): boolean;
    getPointerSize(): number;
    dumpTypeDefinitions(): void;
  }
}
