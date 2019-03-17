declare module Ammo {
  declare class btTypedConstraint {
    constructor();
    constructor(type: btTypedConstraintType, rbA: btRigidBody, rbB: btRigidBody);
    constructor(type: btTypedConstraintType, rbA: btRigidBody);

    get_btRigidBody(): static;	set_btRigidBody(value: static): static;

    buildJacobian(): void;
    calculateSerializeBufferSize(): number;
    enableFeedback(needsFeedback: boolean): void;
    getUserConstraintId(): number;
    getParam(num: number, axis: number): number;
    getBreakingImpulseThreshold(): number;
    getDbgDrawSize(): number;
    getRigidBodyA(): btRigidBody;
    getRigidBodyB(): btRigidBody;
    getRigidBodyA(): btRigidBody;
    getRigidBodyB(): btRigidBody;
    getOverrideNumSolverIterations(): number;
    getInfo1(info: btConstraintInfo1): void;
    getConstraintType(): btTypedConstraintType;
    getUserConstraintPtr(): void;
    getJointFeedback(): btJointFeedback;
    getJointFeedback(): btJointFeedback;
    getUid(): number;
    getAppliedImpulse(): number;
    getInfo2(info: btConstraintInfo2): void;
    getUserConstraintType(): number;
    internalSetAppliedImpulse(appliedImpulse: number): void;
    isEnabled(): boolean;
    internalGetAppliedImpulse(): number;
    needsFeedback(): boolean;
    setUserConstraintType(userConstraintType: number): void;
    setOverrideNumSolverIterations(overideNumIterations: number): void;
    setBreakingImpulseThreshold(threshold: number): void;
    setUserConstraintPtr(ptr: void): void;
    setupSolverConstraint(ca: btConstraintArray, solverBodyA: number, solverBodyB: number, timeStep: number): void;
    setDbgDrawSize(dbgDrawSize: number): void;
    setJointFeedback(jointFeedback: btJointFeedback): void;
    setParam(num: number, value: number, axis: number): void;
    setEnabled(enabled: boolean): void;
    solveConstraintObsolete(y: btSolverBod, y: btSolverBod, r: btScala): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    setUserConstraintId(uid: number): void;
  }
}
