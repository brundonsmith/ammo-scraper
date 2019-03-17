declare module Ammo {
  declare class btSequentialImpulseConstraintSolver {
    constructor();
    constructor();


    btRand2(): number;
    btRandInt2(n: number): number;
    getSSE4_1ConstraintRowSolverLowerLimit(): btSingleConstraintRowSolver;
    getSSE2ConstraintRowSolverLowerLimit(): btSingleConstraintRowSolver;
    getSSE4_1ConstraintRowSolverGeneric(): btSingleConstraintRowSolver;
    getRandSeed(): number;
    getSolverType(): btConstraintSolverType;
    getScalarConstraintRowSolverLowerLimit(): btSingleConstraintRowSolver;
    getSSE2ConstraintRowSolverGeneric(): btSingleConstraintRowSolver;
    getActiveConstraintRowSolverLowerLimit(): btSingleConstraintRowSolver;
    getScalarConstraintRowSolverGeneric(): btSingleConstraintRowSolver;
    getActiveConstraintRowSolverGeneric(): btSingleConstraintRowSolver;
    reset(): void;
    setConstraintRowSolverLowerLimit(rowSolver: btSingleConstraintRowSolver): void;
    setConstraintRowSolverGeneric(rowSolver: btSingleConstraintRowSolver): void;
    setRandSeed(seed: number): void;
    solveGroup(bodies: btCollisionObject, numBodies: number, manifold: btPersistentManifold, numManifolds: number, constraints: btTypedConstraint, numConstraints: number, info: btContactSolverInfo, debugDrawer: btIDebugDraw, dispatcher: btDispatcher): number;
  }
}
