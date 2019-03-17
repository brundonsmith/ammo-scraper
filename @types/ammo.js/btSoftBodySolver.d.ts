declare module Ammo {
  declare class btSoftBodySolver {
    constructor();


    checkInitialized(): boolean;
    copyBackToSoftBodies(bMove: boolean): void;
    getNumberOfVelocityIterations(): number;
    getTimeScale(): number;
    getNumberOfPositionIterations(): number;
    getSolverType(): SolverTypes;
    optimize(y: btAlignedObjectArra, forceUpdate: boolean): void;
    processCollision(y: btSoftBod, btCollisionObjectWrapper: struct): void;
    processCollision(y: btSoftBod, y: btSoftBod): void;
    predictMotion(solverdt: number): void;
    solveConstraints(solverdt: number): void;
    setNumberOfPositionIterations(iterations: number): void;
    setNumberOfVelocityIterations(iterations: number): void;
    updateSoftBodies(): void;
  }
}
