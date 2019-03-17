declare module Ammo {
  declare class btConstraintSolver {
    prepareSolve(t: in, t: in): void;
    solveGroup(t: btCollisionObjec, numBodies: number, d: btPersistentManifol, numManifolds: number, t: btTypedConstrain, numConstraints: number, info: btContactSolverInfo, debugDrawer: btIDebugDraw, dispatcher: btDispatcher): number;
    allSolved(o: btContactSolverInf, w: btIDebugDra): void;
    reset(): void;
    getSolverType(): btConstraintSolverType;
  }
}
