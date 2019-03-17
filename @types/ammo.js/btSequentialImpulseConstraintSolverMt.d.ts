declare module Ammo {
  declare class btSequentialImpulseConstraintSolverMt {
    constructor();
    constructor();

    get_btBatchedConstraints::BatchingMethod(): static;	set_btBatchedConstraints_BatchingMethod(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_btBatchedConstraints::BatchingMethod(): static;	set_btBatchedConstraints_BatchingMethod(value: static): static;
    get_int(): static;	set_int(value: static): static;
    get_int(): static;	set_int(value: static): static;
    get_int(): static;	set_int(value: static): static;

    internalConvertMultipleJoints(y: btAlignedObjectArra, constraints: btTypedConstraint, iBegin: number, iEnd: number, infoGlobal: btContactSolverInfo): void;
    internalAllocContactConstraints(cachedInfoArray: btContactManifoldCachedInfo, numManifolds: number): void;
    internalSetupContactConstraints(iContactConstraint: number, infoGlobal: btContactSolverInfo): void;
    internalConvertBodies(bodies: btCollisionObject, iBegin: number, iEnd: number, infoGlobal: btContactSolverInfo): void;
    internalWriteBackContacts(iBegin: number, iEnd: number, infoGlobal: btContactSolverInfo): void;
    internalWriteBackJoints(iBegin: number, iEnd: number, infoGlobal: btContactSolverInfo): void;
    internalWriteBackBodies(iBegin: number, iEnd: number, infoGlobal: btContactSolverInfo): void;
    internalInitMultipleJoints(constraints: btTypedConstraint, iBegin: number, iEnd: number): void;
    internalCollectContactManifoldCachedInfo(cachedInfoArray: btContactManifoldCachedInfo, manifoldPtr: btPersistentManifold, numManifolds: number, infoGlobal: btContactSolverInfo): void;
    resolveMultipleContactFrictionConstraints(y: btAlignedObjectArra, batchBegin: number, batchEnd: number): number;
    resolveMultipleContactRollingFrictionConstraints(y: btAlignedObjectArra, batchBegin: number, batchEnd: number): number;
    resolveMultipleContactConstraintsInterleaved(y: btAlignedObjectArra, batchBegin: number, batchEnd: number): number;
    resolveMultipleJointConstraints(y: btAlignedObjectArra, batchBegin: number, batchEnd: number, iteration: number): number;
    resolveMultipleContactConstraints(y: btAlignedObjectArra, batchBegin: number, batchEnd: number): number;
    resolveMultipleContactSplitPenetrationImpulseConstraints(y: btAlignedObjectArra, batchBegin: number, batchEnd: number): number;
    solveSingleIteration(iteration: number, bodies: btCollisionObject, numBodies: number, manifoldPtr: btPersistentManifold, numManifolds: number, constraints: btTypedConstraint, numConstraints: number, infoGlobal: btContactSolverInfo, debugDrawer: btIDebugDraw): number;
    solveGroupCacheFriendlyFinish(bodies: btCollisionObject, numBodies: number, infoGlobal: btContactSolverInfo): number;
    solveGroupCacheFriendlySetup(bodies: btCollisionObject, numBodies: number, manifoldPtr: btPersistentManifold, numManifolds: number, constraints: btTypedConstraint, numConstraints: number, infoGlobal: btContactSolverInfo, debugDrawer: btIDebugDraw): number;
    solveGroupCacheFriendlySplitImpulseIterations(bodies: btCollisionObject, numBodies: number, manifoldPtr: btPersistentManifold, numManifolds: number, constraints: btTypedConstraint, numConstraints: number, infoGlobal: btContactSolverInfo, debugDrawer: btIDebugDraw): void;
  }
}
