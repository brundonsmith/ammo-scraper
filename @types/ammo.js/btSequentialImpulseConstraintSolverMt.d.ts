declare module Ammo {
  declare class btSequentialImpulseConstraintSolverMt {
    solveGroupCacheFriendlySplitImpulseIterations(t: btCollisionObjec, numBodies: number, d: btPersistentManifol, numManifolds: number, t: btTypedConstrain, numConstraints: number, infoGlobal: btContactSolverInfo, debugDrawer: btIDebugDraw): void;
    solveSingleIteration(iteration: number, t: btCollisionObjec, numBodies: number, d: btPersistentManifol, numManifolds: number, t: btTypedConstrain, numConstraints: number, infoGlobal: btContactSolverInfo, debugDrawer: btIDebugDraw): number;
    solveGroupCacheFriendlySetup(t: btCollisionObjec, numBodies: number, d: btPersistentManifol, numManifolds: number, t: btTypedConstrain, numConstraints: number, infoGlobal: btContactSolverInfo, debugDrawer: btIDebugDraw): number;
    solveGroupCacheFriendlyFinish(t: btCollisionObjec, numBodies: number, infoGlobal: btContactSolverInfo): number;
    internalInitMultipleJoints(t: btTypedConstrain, iBegin: number, iEnd: number): void;
    internalConvertMultipleJoints(y: btAlignedObjectArra, t: btTypedConstrain, iBegin: number, iEnd: number, infoGlobal: btContactSolverInfo): void;
    constructor();
    constructor();
    resolveMultipleJointConstraints(y: btAlignedObjectArra, batchBegin: number, batchEnd: number, iteration: number): number;
    resolveMultipleContactConstraints(y: btAlignedObjectArra, batchBegin: number, batchEnd: number): number;
    resolveMultipleContactSplitPenetrationImpulseConstraints(y: btAlignedObjectArra, batchBegin: number, batchEnd: number): number;
    resolveMultipleContactFrictionConstraints(y: btAlignedObjectArra, batchBegin: number, batchEnd: number): number;
    resolveMultipleContactRollingFrictionConstraints(y: btAlignedObjectArra, batchBegin: number, batchEnd: number): number;
    resolveMultipleContactConstraintsInterleaved(y: btAlignedObjectArra, batchBegin: number, batchEnd: number): number;
    internalCollectContactManifoldCachedInfo(cachedInfoArray: btContactManifoldCachedInfo, d: btPersistentManifol, numManifolds: number, infoGlobal: btContactSolverInfo): void;
    internalAllocContactConstraints(cachedInfoArray: btContactManifoldCachedInfo, numManifolds: number): void;
    internalSetupContactConstraints(iContactConstraint: number, infoGlobal: btContactSolverInfo): void;
    internalConvertBodies(t: btCollisionObjec, iBegin: number, iEnd: number, infoGlobal: btContactSolverInfo): void;
    internalWriteBackContacts(iBegin: number, iEnd: number, infoGlobal: btContactSolverInfo): void;
    internalWriteBackJoints(iBegin: number, iEnd: number, infoGlobal: btContactSolverInfo): void;
    internalWriteBackBodies(iBegin: number, iEnd: number, infoGlobal: btContactSolverInfo): void;
    get_bool(): static;	set_bool(value: static): static;
    get_int(): static;	set_int(value: static): static;
    get_btBatchedConstraints::BatchingMethod(): static;	set_btBatchedConstraints_BatchingMethod(value: static): static;
    get_btBatchedConstraints::BatchingMethod(): static;	set_btBatchedConstraints_BatchingMethod(value: static): static;
    get_int(): static;	set_int(value: static): static;
    get_int(): static;	set_int(value: static): static;
  }
}
