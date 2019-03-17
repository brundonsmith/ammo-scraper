declare module Ammo {
  declare class ExpandConstraintRowsLoop {
    constructor(destConstraintBatchIds: number, srcConstraintBatchIds: number, conInfos: btBatchedConstraintInfo, numConstraintRows: number);
    forLoop(iBegin: number, iEnd: number): void;
    get_m_destConstraintBatchIds(): number;	set_m_destConstraintBatchIds(value: number): number;
    get_m_srcConstraintBatchIds(): number;	set_m_srcConstraintBatchIds(value: number): number;
    get_m_conInfos(): btBatchedConstraintInfo;	set_m_conInfos(value: btBatchedConstraintInfo): btBatchedConstraintInfo;
    get_m_numConstraintRows(): number;	set_m_numConstraintRows(value: number): number;
  }
}
