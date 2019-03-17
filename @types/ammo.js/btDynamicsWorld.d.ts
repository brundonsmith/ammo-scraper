declare module Ammo {
  declare class btDynamicsWorld {
    constructor(dispatcher: btDispatcher, broadphase: btBroadphaseInterface, collisionConfiguration: btCollisionConfiguration);
    stepSimulation(timeStep: number, maxSubSteps: number, fixedTimeStep: number): number;
    debugDrawWorld(): void;
    addConstraint(constraint: btTypedConstraint, disableCollisionsBetweenLinkedBodies: boolean): void;
    removeConstraint(constraint: btTypedConstraint): void;
    addAction(action: btActionInterface): void;
    removeAction(action: btActionInterface): void;
    setGravity(gravity: btVector3): void;
    getGravity(): btVector3;
    synchronizeMotionStates(): void;
    addRigidBody(body: btRigidBody): void;
    addRigidBody(body: btRigidBody, group: number, mask: number): void;
    removeRigidBody(body: btRigidBody): void;
    setConstraintSolver(solver: btConstraintSolver): void;
    getConstraintSolver(): btConstraintSolver;
    getNumConstraints(): number;
    getConstraint(index: number): btTypedConstraint;
    getConstraint(index: number): btTypedConstraint;
    getWorldType(): btDynamicsWorldType;
    clearForces(): void;
    setInternalTickCallback(cb: btInternalTickCallback, worldUserInfo: void, isPreTick: boolean): void;
    setWorldUserInfo(worldUserInfo: void): void;
    getWorldUserInfo(): void;
    getSolverInfo(): btContactSolverInfo;
    getSolverInfo(): btContactSolverInfo;
    addVehicle(vehicle: btActionInterface): void;
    removeVehicle(vehicle: btActionInterface): void;
    addCharacter(character: btActionInterface): void;
    removeCharacter(character: btActionInterface): void;
  }
}
