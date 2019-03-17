declare module Ammo {
  declare class btMatrixX< {
    constructor(rows: number, cols: number);
    constructor();

    get_m_resizeOperations(): number;	set_m_resizeOperations(value: number): number;
    get_m_rows(): number;	set_m_rows(value: number): number;
    get_m_cols(): number;	set_m_cols(value: number): number;
    get_m_setElemOperations(): number;	set_m_setElemOperations(value: number): number;
    get_m_operations(): number;	set_m_operations(value: number): number;
    get_operator(): btMatrixX;	set_operator(value: btMatrixX): btMatrixX;
    get_operator(): T;	set_operator(value: T): T;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    addElem(row: number, col: number, val: T): void;
    copyLowerToUpperTriangle(): void;
    cols(): number;
    getBufferPointerWritable(): T;
    getBufferPointer(): T;
    multiplyAdd2_p8r(B: number, C: number, numRows: number, numRowsOther: number, row: number, col: number): void;
    multiply2_p8r(B: number, C: number, numRows: number, numRowsOther: number, row: number, col: number): void;
    mulElem(row: number, col: number, val: T): void;
    negative(): btMatrixX;
    printMatrix(msg: string): void;
    rows(): number;
    rowComputeNonZeroElements(): void;
    resize(rows: number, cols: number): void;
    setIdentity(): void;
    setZero(): void;
    setSubMatrix(rowstart: number, colstart: number, rowend: number, colend: number, X: btVector): void;
    setElem(row: number, col: number, val: T): void;
    setSubMatrix(rowstart: number, colstart: number, rowend: number, colend: number, block: btMatrixX): void;
    setSubMatrix(rowstart: number, colstart: number, rowend: number, colend: number, value: T): void;
    transpose(): btMatrixX;
  }
}
