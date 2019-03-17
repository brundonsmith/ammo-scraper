declare module Ammo {
  declare class InitJointsLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, constraints: btTypedConstraint);

    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_constraints(): btTypedConstraint;	set_m_constraints(value: btTypedConstraint): btTypedConstraint;

    forLoop(iBegin: number, iEnd: number): void;
  }
}
