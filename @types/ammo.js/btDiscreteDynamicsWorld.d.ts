declare module Ammo {
  declare class btDiscreteDynamicsWorld {
    constructor();
    constructor(dispatcher: btDispatcher, pairCache: btBroadphaseInterface, constraintSolver: btConstraintSolver, collisionConfiguration: btCollisionConfiguration);


    addCollisionObject(collisionObject: btCollisionObject, collisionFilterGroup: number, collisionFilterMask: number): void;
    addConstraint(constraint: btTypedConstraint, disableCollisionsBetweenLinkedBodies: boolean): void;
    addAction(e: btActionInterfac): void;
    applyGravity(): void;
    addCharacter(character: btActionInterface): void;
    addVehicle(vehicle: btActionInterface): void;
    addRigidBody(body: btRigidBody): void;
    addRigidBody(body: btRigidBody, group: number, mask: number): void;
    clearForces(): void;
    debugDrawConstraint(constraint: btTypedConstraint): void;
    debugDrawWorld(): void;
    getGravity(): btVector3;
    getLatencyMotionStateInterpolation(): boolean;
    getApplySpeculativeContactRestitution(): boolean;
    getSimulationIslandManager(): btSimulationIslandManager;
    getWorldType(): btDynamicsWorldType;
    getConstraint(index: number): btTypedConstraint;
    getSimulationIslandManager(): btSimulationIslandManager;
    getCollisionWorld(): btCollisionWorld;
    getSynchronizeAllMotionStates(): boolean;
    getConstraintSolver(): btConstraintSolver;
    getNumConstraints(): number;
    getConstraint(index: number): btTypedConstraint;
    removeCollisionObject(collisionObject: btCollisionObject): void;
    removeAction(e: btActionInterfac): void;
    removeConstraint(constraint: btTypedConstraint): void;
    removeVehicle(vehicle: btActionInterface): void;
    removeRigidBody(body: btRigidBody): void;
    removeCharacter(character: btActionInterface): void;
    setGravity(gravity: btVector3): void;
    setConstraintSolver(solver: btConstraintSolver): void;
    setNumTasks(numTasks: number): void;
    setLatencyMotionStateInterpolation(latencyInterpolation: boolean): void;
    setSynchronizeAllMotionStates(synchronizeAll: boolean): void;
    synchronizeMotionStates(): void;
    setApplySpeculativeContactRestitution(enable: boolean): void;
    stepSimulation(timeStep: number, maxSubSteps: number, fixedTimeStep: number): number;
    serialize(serializer: btSerializer): void;
    synchronizeSingleMotionState(body: btRigidBody): void;
    updateVehicles(timeStep: number): void;
  }
}
