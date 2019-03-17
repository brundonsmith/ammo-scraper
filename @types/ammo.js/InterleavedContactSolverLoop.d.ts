declare module Ammo {
  declare class InterleavedContactSolverLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, bc: btBatchedConstraints);

    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_bc(): btBatchedConstraints;	set_m_bc(value: btBatchedConstraints): btBatchedConstraints;

    sumLoop(iBegin: number, iEnd: number): number;
  }
}
