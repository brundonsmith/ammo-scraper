declare module Ammo {
  declare class WriteOutConstraintIndicesLoop {
    constructor(bc: btBatchedConstraints, constraintBatchIds: number, numConstraints: number, constraintIdPerBatch: number, maxNumBatchesPerPhase: number);
    forLoop(iBegin: number, iEnd: number): void;
    get_m_batchedConstraints(): btBatchedConstraints;	set_m_batchedConstraints(value: btBatchedConstraints): btBatchedConstraints;
    get_m_constraintBatchIds(): number;	set_m_constraintBatchIds(value: number): number;
    get_m_numConstraints(): number;	set_m_numConstraints(value: number): number;
    get_m_constraintIdPerBatch(): number;	set_m_constraintIdPerBatch(value: number): number;
    get_m_maxNumBatchesPerPhase(): number;	set_m_maxNumBatchesPerPhase(value: number): number;
  }
}
