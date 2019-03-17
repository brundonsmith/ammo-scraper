declare module Ammo {
  declare class btTypedConstraint {
    constructor();
    constructor(type: btTypedConstraintType, rbA: btRigidBody);
    constructor(type: btTypedConstraintType, rbA: btRigidBody, rbB: btRigidBody);
    getOverrideNumSolverIterations(): number;
    setOverrideNumSolverIterations(overideNumIterations: number): void;
    buildJacobian(): void;
    setupSolverConstraint(ca: btConstraintArray, solverBodyA: number, solverBodyB: number, timeStep: number): void;
    getInfo1(info: btConstraintInfo1): void;
    getInfo2(info: btConstraintInfo2): void;
    internalSetAppliedImpulse(appliedImpulse: number): void;
    internalGetAppliedImpulse(): number;
    getBreakingImpulseThreshold(): number;
    setBreakingImpulseThreshold(threshold: number): void;
    isEnabled(): boolean;
    setEnabled(enabled: boolean): void;
    solveConstraintObsolete(y: btSolverBod, y: btSolverBod, r: btScala): void;
    getRigidBodyA(): btRigidBody;
    getRigidBodyB(): btRigidBody;
    getRigidBodyA(): btRigidBody;
    getRigidBodyB(): btRigidBody;
    getUserConstraintType(): number;
    setUserConstraintType(userConstraintType: number): void;
    setUserConstraintId(uid: number): void;
    getUserConstraintId(): number;
    setUserConstraintPtr(ptr: void): void;
    getUserConstraintPtr(): void;
    setJointFeedback(jointFeedback: btJointFeedback): void;
    getJointFeedback(): btJointFeedback;
    getJointFeedback(): btJointFeedback;
    getUid(): number;
    needsFeedback(): boolean;
    enableFeedback(needsFeedback: boolean): void;
    getAppliedImpulse(): number;
    getConstraintType(): btTypedConstraintType;
    setDbgDrawSize(dbgDrawSize: number): void;
    getDbgDrawSize(): number;
    setParam(num: number, value: number, axis: number): void;
    getParam(num: number, axis: number): number;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    get_btRigidBody(): static;	set_btRigidBody(value: static): static;
  }
}
