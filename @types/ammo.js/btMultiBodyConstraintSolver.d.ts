declare module Ammo {
  declare class btMultiBodyConstraintSolver {
    constructor();


    solveGroup(bodies: btCollisionObject, numBodies: number, manifold: btPersistentManifold, numManifolds: number, constraints: btTypedConstraint, numConstraints: number, info: btContactSolverInfo, debugDrawer: btIDebugDraw, dispatcher: btDispatcher): number;
    solveGroupCacheFriendlyFinish(bodies: btCollisionObject, numBodies: number, infoGlobal: btContactSolverInfo): number;
    solveMultiBodyGroup(bodies: btCollisionObject, numBodies: number, manifold: btPersistentManifold, numManifolds: number, constraints: btTypedConstraint, numConstraints: number, multiBodyConstraints: btMultiBodyConstraint, numMultiBodyConstraints: number, info: btContactSolverInfo, debugDrawer: btIDebugDraw, dispatcher: btDispatcher): void;
  }
}
