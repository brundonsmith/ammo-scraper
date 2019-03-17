declare module Ammo {
  declare class btDiscreteDynamicsWorld {
    constructor();
    constructor(dispatcher: btDispatcher, pairCache: btBroadphaseInterface, constraintSolver: btConstraintSolver, collisionConfiguration: btCollisionConfiguration);
    stepSimulation(timeStep: number, maxSubSteps: number, fixedTimeStep: number): number;
    synchronizeMotionStates(): void;
    synchronizeSingleMotionState(body: btRigidBody): void;
    addConstraint(constraint: btTypedConstraint, disableCollisionsBetweenLinkedBodies: boolean): void;
    removeConstraint(constraint: btTypedConstraint): void;
    addAction(e: btActionInterfac): void;
    removeAction(e: btActionInterfac): void;
    getSimulationIslandManager(): btSimulationIslandManager;
    getSimulationIslandManager(): btSimulationIslandManager;
    getCollisionWorld(): btCollisionWorld;
    setGravity(gravity: btVector3): void;
    getGravity(): btVector3;
    addCollisionObject(collisionObject: btCollisionObject, collisionFilterGroup: number, collisionFilterMask: number): void;
    addRigidBody(body: btRigidBody): void;
    addRigidBody(body: btRigidBody, group: number, mask: number): void;
    removeRigidBody(body: btRigidBody): void;
    removeCollisionObject(collisionObject: btCollisionObject): void;
    debugDrawConstraint(constraint: btTypedConstraint): void;
    debugDrawWorld(): void;
    setConstraintSolver(solver: btConstraintSolver): void;
    getConstraintSolver(): btConstraintSolver;
    getNumConstraints(): number;
    getConstraint(index: number): btTypedConstraint;
    getConstraint(index: number): btTypedConstraint;
    getWorldType(): btDynamicsWorldType;
    clearForces(): void;
    applyGravity(): void;
    setNumTasks(numTasks: number): void;
    updateVehicles(timeStep: number): void;
    addVehicle(vehicle: btActionInterface): void;
    removeVehicle(vehicle: btActionInterface): void;
    addCharacter(character: btActionInterface): void;
    removeCharacter(character: btActionInterface): void;
    setSynchronizeAllMotionStates(synchronizeAll: boolean): void;
    getSynchronizeAllMotionStates(): boolean;
    setApplySpeculativeContactRestitution(enable: boolean): void;
    getApplySpeculativeContactRestitution(): boolean;
    serialize(serializer: btSerializer): void;
    setLatencyMotionStateInterpolation(latencyInterpolation: boolean): void;
    getLatencyMotionStateInterpolation(): boolean;
  }
}
