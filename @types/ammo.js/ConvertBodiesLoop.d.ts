declare module Ammo {
  declare class ConvertBodiesLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, bodies: btCollisionObject, numBodies: number, infoGlobal: btContactSolverInfo);

    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_bodies(): btCollisionObject;	set_m_bodies(value: btCollisionObject): btCollisionObject;
    get_m_numBodies(): number;	set_m_numBodies(value: number): number;
    get_m_infoGlobal(): btContactSolverInfo;	set_m_infoGlobal(value: btContactSolverInfo): btContactSolverInfo;

    forLoop(iBegin: number, iEnd: number): void;
  }
}
