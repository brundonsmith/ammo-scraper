declare module Ammo {
  declare class ConvertJointsLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, y: btAlignedObjectArra, s: btSequentialImpulseConstraintSolverMt_JointParam, y: jointParamsArra, t: btTypedConstrain, s: srcConstraint, infoGlobal: btContactSolverInfo);
    forLoop(iBegin: number, iEnd: number): void;
    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_m_srcConstraints(): btTypedConstraint;	set_m_srcConstraints(value: btTypedConstraint): btTypedConstraint;
    get_m_infoGlobal(): btContactSolverInfo;	set_m_infoGlobal(value: btContactSolverInfo): btContactSolverInfo;
  }
}
