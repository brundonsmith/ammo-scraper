declare module Ammo {
  declare class btMultiBodyDynamicsWorld {
    constructor(dispatcher: btDispatcher, pairCache: btBroadphaseInterface, constraintSolver: btMultiBodyConstraintSolver, collisionConfiguration: btCollisionConfiguration);


    addMultiBody(body: btMultiBody, group: number, mask: number): void;
    addMultiBodyConstraint(constraint: btMultiBodyConstraint): void;
    applyGravity(): void;
    clearMultiBodyForces(): void;
    clearForces(): void;
    clearMultiBodyConstraintForces(): void;
    debugDrawWorld(): void;
    debugDrawMultiBodyConstraint(constraint: btMultiBodyConstraint): void;
    forwardKinematics(): void;
    getMultiBodyConstraint(constraintIndex: number): btMultiBodyConstraint;
    getNumMultiBodyConstraints(): number;
    getMultiBody(mbIndex: number): btMultiBody;
    getMultiBody(mbIndex: number): btMultiBody;
    getNumMultibodies(): number;
    getMultiBodyConstraint(constraintIndex: number): btMultiBodyConstraint;
    integrateTransforms(timeStep: number): void;
    removeMultiBodyConstraint(constraint: btMultiBodyConstraint): void;
    removeMultiBody(body: btMultiBody): void;
    serialize(serializer: btSerializer): void;
    setMultiBodyConstraintSolver(solver: btMultiBodyConstraintSolver): void;
    setConstraintSolver(solver: btConstraintSolver): void;
  }
}
