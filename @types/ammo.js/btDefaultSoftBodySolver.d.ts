declare module Ammo {
  declare class btDefaultSoftBodySolver {
    constructor();
    getSolverType(): SolverTypes;
    checkInitialized(): boolean;
    updateSoftBodies(): void;
    optimize(y: btAlignedObjectArra, forceUpdate: boolean): void;
    copyBackToSoftBodies(bMove: boolean): void;
    solveConstraints(solverdt: number): void;
    predictMotion(solverdt: number): void;
    copySoftBodyToVertexBuffer(const: btSoftBody, vertexBuffer: btVertexBufferDescriptor): void;
    processCollision(y: btSoftBod, r: btCollisionObjectWrappe): void;
    processCollision(y: btSoftBod, y: btSoftBod): void;
  }
}
