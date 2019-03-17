declare module Ammo {
  declare class btVectorX< {
    constructor();
    constructor(numRows: number);
    resize(rows: number): void;
    cols(): number;
    rows(): number;
    size(): number;
    nrm2(): T;
    setZero(): void;
    get_operator(): T;	set_operator(value: T): T;
    get_operator(): T;	set_operator(value: T): T;
    getBufferPointerWritable(): T;
    getBufferPointer(): T;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
  }
}
