declare module Ammo {
  declare class btAlignedObjectArray< {
    constructor();
    constructor(otherArray: btAlignedObjectArray);

    get_e(): templat;	set_e(value: templat): templat;
    get_e(): templat;	set_e(value: templat): templat;
    get_e(): templat;	set_e(value: templat): templat;
    get_e(): templat;	set_e(value: templat): templat;
    get_operator(): T;	set_operator(value: T): T;
    get_operator(): T;	set_operator(value: T): T;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    at(n: number): T;
    at(n: number): T;
    copyFromArray(otherArray: btAlignedObjectArray): void;
    clear(): void;
    capacity(): number;
    downHeap(pArr: T, k: number, n: number, CompareFunc: L): void;
    expand(fillValue: T): T;
    expandNonInitializing(): T;
    findBinarySearch(key: T): number;
    findLinearSearch2(key: T): number;
    findLinearSearch(key: T): number;
    heapSort(CompareFunc: L): void;
    initializeFromBuffer(buffer: void, size: number, capacity: number): void;
    pop_back(): void;
    push_back(_Val: T): void;
    quickSort(CompareFunc: L): void;
    quickSortInternal(CompareFunc: L, lo: number, hi: number): void;
    resize(newsize: number, fillData: T): void;
    reserve(_Count: number): void;
    resizeNoInitialize(newsize: number): void;
    removeAtIndex(index: number): void;
    remove(key: T): void;
    size(): number;
    swap(index0: number, index1: number): void;
  }
}
