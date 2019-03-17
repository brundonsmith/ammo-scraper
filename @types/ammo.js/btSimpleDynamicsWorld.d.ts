declare module Ammo {
  declare class btSimpleDynamicsWorld {
    constructor(dispatcher: btDispatcher, pairCache: btBroadphaseInterface, constraintSolver: btConstraintSolver, collisionConfiguration: btCollisionConfiguration);
    stepSimulation(timeStep: number, maxSubSteps: number, fixedTimeStep: number): number;
    setGravity(gravity: btVector3): void;
    getGravity(): btVector3;
    addRigidBody(body: btRigidBody): void;
    addRigidBody(body: btRigidBody, group: number, mask: number): void;
    removeRigidBody(body: btRigidBody): void;
    debugDrawWorld(): void;
    addAction(action: btActionInterface): void;
    removeAction(action: btActionInterface): void;
    removeCollisionObject(collisionObject: btCollisionObject): void;
    updateAabbs(): void;
    synchronizeMotionStates(): void;
    setConstraintSolver(solver: btConstraintSolver): void;
    getConstraintSolver(): btConstraintSolver;
    getWorldType(): btDynamicsWorldType;
    clearForces(): void;
  }
}
