declare module Ammo {
  declare class WriteContactPointsLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, infoGlobal: btContactSolverInfo);

    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_infoGlobal(): btContactSolverInfo;	set_m_infoGlobal(value: btContactSolverInfo): btContactSolverInfo;

    forLoop(iBegin: number, iEnd: number): void;
  }
}
