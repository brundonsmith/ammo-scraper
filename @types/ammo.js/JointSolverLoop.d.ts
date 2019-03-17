declare module Ammo {
  declare class JointSolverLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, bc: btBatchedConstraints, iteration: number);
    sumLoop(iBegin: number, iEnd: number): number;
    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_bc(): btBatchedConstraints;	set_m_bc(value: btBatchedConstraints): btBatchedConstraints;
    get_m_iteration(): number;	set_m_iteration(value: number): number;
  }
}
