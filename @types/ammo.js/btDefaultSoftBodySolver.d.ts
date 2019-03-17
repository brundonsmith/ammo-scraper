declare module Ammo {
  declare class btDefaultSoftBodySolver {
    constructor();


    copyBackToSoftBodies(bMove: boolean): void;
    checkInitialized(): boolean;
    copySoftBodyToVertexBuffer(const: btSoftBody, vertexBuffer: btVertexBufferDescriptor): void;
    getSolverType(): SolverTypes;
    optimize(y: btAlignedObjectArra, forceUpdate: boolean): void;
    predictMotion(solverdt: number): void;
    processCollision(y: btSoftBod, r: btCollisionObjectWrappe): void;
    processCollision(y: btSoftBod, y: btSoftBod): void;
    solveConstraints(solverdt: number): void;
    updateSoftBodies(): void;
  }
}
