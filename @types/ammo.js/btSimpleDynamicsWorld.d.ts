declare module Ammo {
  declare class btSimpleDynamicsWorld {
    constructor(dispatcher: btDispatcher, pairCache: btBroadphaseInterface, constraintSolver: btConstraintSolver, collisionConfiguration: btCollisionConfiguration);


    addAction(action: btActionInterface): void;
    addRigidBody(body: btRigidBody, group: number, mask: number): void;
    addRigidBody(body: btRigidBody): void;
    clearForces(): void;
    debugDrawWorld(): void;
    getWorldType(): btDynamicsWorldType;
    getGravity(): btVector3;
    getConstraintSolver(): btConstraintSolver;
    removeAction(action: btActionInterface): void;
    removeRigidBody(body: btRigidBody): void;
    removeCollisionObject(collisionObject: btCollisionObject): void;
    setGravity(gravity: btVector3): void;
    synchronizeMotionStates(): void;
    setConstraintSolver(solver: btConstraintSolver): void;
    stepSimulation(timeStep: number, maxSubSteps: number, fixedTimeStep: number): number;
    updateAabbs(): void;
  }
}
