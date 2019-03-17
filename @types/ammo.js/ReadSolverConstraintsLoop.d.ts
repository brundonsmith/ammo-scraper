declare module Ammo {
  declare class ReadSolverConstraintsLoop {
    constructor(outConInfos: btBatchedConstraintInfo, constraints: btConstraintArray);

    get_m_outConInfos(): btBatchedConstraintInfo;	set_m_outConInfos(value: btBatchedConstraintInfo): btBatchedConstraintInfo;
    get_m_constraints(): btConstraintArray;	set_m_constraints(value: btConstraintArray): btConstraintArray;

    forLoop(iBegin: number, iEnd: number): void;
  }
}
