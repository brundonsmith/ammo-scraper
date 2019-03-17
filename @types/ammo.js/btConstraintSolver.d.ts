declare module Ammo {
  declare class btConstraintSolver {


    allSolved(o: btContactSolverInf, w: btIDebugDra): void;
    getSolverType(): btConstraintSolverType;
    prepareSolve(t: in, t: in): void;
    reset(): void;
    solveGroup(bodies: btCollisionObject, numBodies: number, manifold: btPersistentManifold, numManifolds: number, constraints: btTypedConstraint, numConstraints: number, info: btContactSolverInfo, debugDrawer: btIDebugDraw, dispatcher: btDispatcher): number;
  }
}
