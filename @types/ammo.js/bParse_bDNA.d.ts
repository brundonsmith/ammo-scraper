declare module Ammo {
  declare class bParse_bDNA {
    constructor();


    dumpTypeDefinitions(): void;
    flagNone(dna_nr: number): boolean;
    flagEqual(dna_nr: number): boolean;
    flagNotEqual(dna_nr: number): boolean;
    getReverseType(type: string): number;
    getName(ind: number): string;
    getType(ind: number): string;
    getStruct(ind: number): short;
    getLength(ind: number): short;
    getPointerSize(): number;
    getArraySizeNew(e: nam): number;
    getNumStructs(): number;
    getArraySize(str: string): number;
    getElementSize(e: typ, e: nam): number;
    getNumNames(): number;
    getReverseType(e: typ): number;
    initCmpFlags(memDNA: bDNA): void;
    init(data: string, len: number, swap: boolean): void;
    lessThan(other: bDNA): boolean;
  }
}
