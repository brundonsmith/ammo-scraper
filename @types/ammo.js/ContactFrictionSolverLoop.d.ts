declare module Ammo {
  declare class ContactFrictionSolverLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, bc: btBatchedConstraints);
    sumLoop(iBegin: number, iEnd: number): number;
    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_bc(): btBatchedConstraints;	set_m_bc(value: btBatchedConstraints): btBatchedConstraints;
  }
}
