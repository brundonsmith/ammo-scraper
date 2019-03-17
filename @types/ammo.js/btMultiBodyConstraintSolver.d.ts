declare module Ammo {
  declare class btMultiBodyConstraintSolver {
    constructor();
    solveGroup(t: btCollisionObjec, numBodies: number, d: btPersistentManifol, numManifolds: number, t: btTypedConstrain, numConstraints: number, info: btContactSolverInfo, debugDrawer: btIDebugDraw, dispatcher: btDispatcher): number;
    solveGroupCacheFriendlyFinish(t: btCollisionObjec, numBodies: number, infoGlobal: btContactSolverInfo): number;
    solveMultiBodyGroup(t: btCollisionObjec, numBodies: number, d: btPersistentManifol, numManifolds: number, t: btTypedConstrain, numConstraints: number, t: btMultiBodyConstrain, numMultiBodyConstraints: number, info: btContactSolverInfo, debugDrawer: btIDebugDraw, dispatcher: btDispatcher): void;
  }
}
