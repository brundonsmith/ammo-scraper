declare module Ammo {
  declare class btSequentialImpulseConstraintSolver {
    constructor();
    constructor();
    solveGroup(t: btCollisionObjec, numBodies: number, d: btPersistentManifol, numManifolds: number, t: btTypedConstrain, numConstraints: number, info: btContactSolverInfo, debugDrawer: btIDebugDraw, dispatcher: btDispatcher): number;
    reset(): void;
    btRand2(): number;
    btRandInt2(n: number): number;
    setRandSeed(seed: number): void;
    getRandSeed(): number;
    getSolverType(): btConstraintSolverType;
    getActiveConstraintRowSolverGeneric(): btSingleConstraintRowSolver;
    setConstraintRowSolverGeneric(rowSolver: btSingleConstraintRowSolver): void;
    getActiveConstraintRowSolverLowerLimit(): btSingleConstraintRowSolver;
    setConstraintRowSolverLowerLimit(rowSolver: btSingleConstraintRowSolver): void;
    getScalarConstraintRowSolverGeneric(): btSingleConstraintRowSolver;
    getSSE2ConstraintRowSolverGeneric(): btSingleConstraintRowSolver;
    getSSE4_1ConstraintRowSolverGeneric(): btSingleConstraintRowSolver;
    getScalarConstraintRowSolverLowerLimit(): btSingleConstraintRowSolver;
    getSSE2ConstraintRowSolverLowerLimit(): btSingleConstraintRowSolver;
    getSSE4_1ConstraintRowSolverLowerLimit(): btSingleConstraintRowSolver;
  }
}
