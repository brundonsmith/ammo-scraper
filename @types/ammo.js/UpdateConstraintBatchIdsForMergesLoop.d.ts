declare module Ammo {
  declare class UpdateConstraintBatchIdsForMergesLoop {
    constructor(constraintBatchIds: number, batches: btBatchInfo, numBatches: number);

    get_m_constraintBatchIds(): number;	set_m_constraintBatchIds(value: number): number;
    get_m_batches(): btBatchInfo;	set_m_batches(value: btBatchInfo): btBatchInfo;
    get_m_numBatches(): number;	set_m_numBatches(value: number): number;

    forLoop(iBegin: number, iEnd: number): void;
  }
}
