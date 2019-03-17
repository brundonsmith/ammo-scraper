declare module Ammo {
  declare class InitJointsLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, t: btTypedConstrain, s: constraint);
    forLoop(iBegin: number, iEnd: number): void;
    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_constraints(): btTypedConstraint;	set_m_constraints(value: btTypedConstraint): btTypedConstraint;
  }
}
