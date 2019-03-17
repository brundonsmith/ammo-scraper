declare module Ammo {
  declare class btVectorX< {
    constructor();
    constructor(numRows: number);

    get_operator(): T;	set_operator(value: T): T;
    get_operator(): T;	set_operator(value: T): T;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    cols(): number;
    getBufferPointerWritable(): T;
    getBufferPointer(): T;
    nrm2(): T;
    rows(): number;
    resize(rows: number): void;
    size(): number;
    setZero(): void;
  }
}
