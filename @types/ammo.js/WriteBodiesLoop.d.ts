declare module Ammo {
  declare class WriteBodiesLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, infoGlobal: btContactSolverInfo);
    forLoop(iBegin: number, iEnd: number): void;
    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_infoGlobal(): btContactSolverInfo;	set_m_infoGlobal(value: btContactSolverInfo): btContactSolverInfo;
  }
}
