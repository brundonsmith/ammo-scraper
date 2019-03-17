declare module Ammo {
  declare class ConvertBodiesLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, t: btCollisionObjec, s: bodie, numBodies: number, infoGlobal: btContactSolverInfo);
    forLoop(iBegin: number, iEnd: number): void;
    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_bodies(): btCollisionObject;	set_m_bodies(value: btCollisionObject): btCollisionObject;
    get_m_numBodies(): number;	set_m_numBodies(value: number): number;
    get_m_infoGlobal(): btContactSolverInfo;	set_m_infoGlobal(value: btContactSolverInfo): btContactSolverInfo;
  }
}
