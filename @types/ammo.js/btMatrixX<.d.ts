declare module Ammo {
  declare class btMatrixX< {
    getBufferPointerWritable(): T;
    getBufferPointer(): T;
    constructor();
    constructor(rows: number, cols: number);
    resize(rows: number, cols: number): void;
    cols(): number;
    rows(): number;
    addElem(row: number, col: number, val: T): void;
    setElem(row: number, col: number, val: T): void;
    mulElem(row: number, col: number, val: T): void;
    copyLowerToUpperTriangle(): void;
    get_operator(): T;	set_operator(value: T): T;
    setZero(): void;
    setIdentity(): void;
    printMatrix(msg: string): void;
    rowComputeNonZeroElements(): void;
    transpose(): btMatrixX;
    get_operator(): btMatrixX;	set_operator(value: btMatrixX): btMatrixX;
    multiplyAdd2_p8r(B: number, C: number, numRows: number, numRowsOther: number, row: number, col: number): void;
    multiply2_p8r(B: number, C: number, numRows: number, numRowsOther: number, row: number, col: number): void;
    setSubMatrix(rowstart: number, colstart: number, rowend: number, colend: number, value: T): void;
    setSubMatrix(rowstart: number, colstart: number, rowend: number, colend: number, block: btMatrixX): void;
    setSubMatrix(rowstart: number, colstart: number, rowend: number, colend: number, X: btVector): void;
    negative(): btMatrixX;
    get_m_rows(): number;	set_m_rows(value: number): number;
    get_m_cols(): number;	set_m_cols(value: number): number;
    get_m_operations(): number;	set_m_operations(value: number): number;
    get_m_resizeOperations(): number;	set_m_resizeOperations(value: number): number;
    get_m_setElemOperations(): number;	set_m_setElemOperations(value: number): number;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
  }
}
