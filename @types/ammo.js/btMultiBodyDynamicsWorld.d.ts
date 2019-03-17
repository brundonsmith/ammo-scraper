declare module Ammo {
  declare class btMultiBodyDynamicsWorld {
    constructor(dispatcher: btDispatcher, pairCache: btBroadphaseInterface, constraintSolver: btMultiBodyConstraintSolver, collisionConfiguration: btCollisionConfiguration);
    addMultiBody(body: btMultiBody, group: number, mask: number): void;
    removeMultiBody(body: btMultiBody): void;
    getNumMultibodies(): number;
    getMultiBody(mbIndex: number): btMultiBody;
    getMultiBody(mbIndex: number): btMultiBody;
    addMultiBodyConstraint(constraint: btMultiBodyConstraint): void;
    getNumMultiBodyConstraints(): number;
    getMultiBodyConstraint(constraintIndex: number): btMultiBodyConstraint;
    getMultiBodyConstraint(constraintIndex: number): btMultiBodyConstraint;
    removeMultiBodyConstraint(constraint: btMultiBodyConstraint): void;
    integrateTransforms(timeStep: number): void;
    debugDrawWorld(): void;
    debugDrawMultiBodyConstraint(constraint: btMultiBodyConstraint): void;
    forwardKinematics(): void;
    clearForces(): void;
    clearMultiBodyConstraintForces(): void;
    clearMultiBodyForces(): void;
    applyGravity(): void;
    serialize(serializer: btSerializer): void;
    setMultiBodyConstraintSolver(solver: btMultiBodyConstraintSolver): void;
    setConstraintSolver(solver: btConstraintSolver): void;
  }
}
