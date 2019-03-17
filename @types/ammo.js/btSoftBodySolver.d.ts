declare module Ammo {
  declare class btSoftBodySolver {
    constructor();
    getSolverType(): SolverTypes;
    checkInitialized(): boolean;
    optimize(y: btAlignedObjectArra, forceUpdate: boolean): void;
    copyBackToSoftBodies(bMove: boolean): void;
    predictMotion(solverdt: number): void;
    solveConstraints(solverdt: number): void;
    updateSoftBodies(): void;
    processCollision(y: btSoftBod, btCollisionObjectWrapper: struct): void;
    processCollision(y: btSoftBod, y: btSoftBod): void;
    setNumberOfPositionIterations(iterations: number): void;
    getNumberOfPositionIterations(): number;
    setNumberOfVelocityIterations(iterations: number): void;
    getNumberOfVelocityIterations(): number;
    getTimeScale(): number;
  }
}
