declare module Ammo {
  declare class btConstraintSolverPoolMt {
    constructor(numSolvers: number);
    constructor(solvers: btConstraintSolver, numSolvers: number);


    getSolverType(): btConstraintSolverType;
    reset(): void;
    solveGroup(bodies: btCollisionObject, numBodies: number, manifolds: btPersistentManifold, numManifolds: number, constraints: btTypedConstraint, numConstraints: number, info: btContactSolverInfo, debugDrawer: btIDebugDraw, dispatcher: btDispatcher): number;
  }
}
