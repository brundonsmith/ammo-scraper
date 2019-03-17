declare module Ammo {
  declare class SetupContactConstraintsLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, bc: btBatchedConstraints, infoGlobal: btContactSolverInfo);

    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_bc(): btBatchedConstraints;	set_m_bc(value: btBatchedConstraints): btBatchedConstraints;
    get_m_infoGlobal(): btContactSolverInfo;	set_m_infoGlobal(value: btContactSolverInfo): btContactSolverInfo;

    forLoop(iBegin: number, iEnd: number): void;
  }
}
