declare module Ammo {
  declare class btDynamicsWorld {
    constructor(dispatcher: btDispatcher, broadphase: btBroadphaseInterface, collisionConfiguration: btCollisionConfiguration);


    addConstraint(constraint: btTypedConstraint, disableCollisionsBetweenLinkedBodies: boolean): void;
    addCharacter(character: btActionInterface): void;
    addAction(action: btActionInterface): void;
    addVehicle(vehicle: btActionInterface): void;
    addRigidBody(body: btRigidBody): void;
    addRigidBody(body: btRigidBody, group: number, mask: number): void;
    clearForces(): void;
    debugDrawWorld(): void;
    getSolverInfo(): btContactSolverInfo;
    getConstraintSolver(): btConstraintSolver;
    getSolverInfo(): btContactSolverInfo;
    getWorldUserInfo(): void;
    getGravity(): btVector3;
    getWorldType(): btDynamicsWorldType;
    getNumConstraints(): number;
    getConstraint(index: number): btTypedConstraint;
    getConstraint(index: number): btTypedConstraint;
    removeCharacter(character: btActionInterface): void;
    removeRigidBody(body: btRigidBody): void;
    removeAction(action: btActionInterface): void;
    removeVehicle(vehicle: btActionInterface): void;
    removeConstraint(constraint: btTypedConstraint): void;
    setConstraintSolver(solver: btConstraintSolver): void;
    setGravity(gravity: btVector3): void;
    setInternalTickCallback(cb: btInternalTickCallback, worldUserInfo: void, isPreTick: boolean): void;
    setWorldUserInfo(worldUserInfo: void): void;
    stepSimulation(timeStep: number, maxSubSteps: number, fixedTimeStep: number): number;
    synchronizeMotionStates(): void;
  }
}
