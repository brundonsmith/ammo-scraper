declare module Ammo {
  declare class btConstraintSolverPoolMt {
    constructor(numSolvers: number);
    constructor(r: btConstraintSolve, s: solver, numSolvers: number);
    solveGroup(t: btCollisionObjec, numBodies: number, d: btPersistentManifol, numManifolds: number, t: btTypedConstrain, numConstraints: number, info: btContactSolverInfo, debugDrawer: btIDebugDraw, dispatcher: btDispatcher): number;
    reset(): void;
    getSolverType(): btConstraintSolverType;
  }
}
