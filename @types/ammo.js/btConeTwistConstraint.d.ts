declare module Ammo {
  declare class btConeTwistConstraint {
    constructor();
    constructor(rbA: btRigidBody, rbB: btRigidBody, rbAFrame: btTransform, rbBFrame: btTransform);
    constructor(rbA: btRigidBody, rbAFrame: btTransform);
    buildJacobian(): void;
    getInfo1(info: btConstraintInfo1): void;
    getInfo1NonVirtual(info: btConstraintInfo1): void;
    getInfo2(info: btConstraintInfo2): void;
    getInfo2NonVirtual(info: btConstraintInfo2, transA: btTransform, transB: btTransform, invInertiaWorldA: btMatrix3x3, invInertiaWorldB: btMatrix3x3): void;
    solveConstraintObsolete(bodyA: btSolverBody, bodyB: btSolverBody, timeStep: number): void;
    updateRHS(timeStep: number): void;
    getRigidBodyA(): btRigidBody;
    getRigidBodyB(): btRigidBody;
    setAngularOnly(angularOnly: boolean): void;
    getAngularOnly(): boolean;
    setLimit(limitIndex: number, limitValue: number): void;
    getLimit(limitIndex: number): number;
    setLimit(_swingSpan1: number, _swingSpan2: number, _twistSpan: number, _softness: number, _biasFactor: number, _relaxationFactor: number): void;
    getAFrame(): btTransform;
    getBFrame(): btTransform;
    getSolveTwistLimit(): number;
    getSolveSwingLimit(): number;
    getTwistLimitSign(): number;
    calcAngleInfo(): void;
    calcAngleInfo2(transA: btTransform, transB: btTransform, invInertiaWorldA: btMatrix3x3, invInertiaWorldB: btMatrix3x3): void;
    getSwingSpan1(): number;
    getSwingSpan2(): number;
    getTwistSpan(): number;
    getLimitSoftness(): number;
    getBiasFactor(): number;
    getRelaxationFactor(): number;
    getTwistAngle(): number;
    isPastSwingLimit(): boolean;
    getDamping(): number;
    setDamping(damping: number): void;
    enableMotor(b: boolean): void;
    isMotorEnabled(): boolean;
    getMaxMotorImpulse(): number;
    isMaxMotorImpulseNormalized(): boolean;
    setMaxMotorImpulse(maxMotorImpulse: number): void;
    setMaxMotorImpulseNormalized(maxMotorImpulse: number): void;
    getFixThresh(): number;
    setFixThresh(fixThresh: number): void;
    setMotorTarget(q: btQuaternion): void;
    getMotorTarget(): btQuaternion;
    setMotorTargetInConstraintSpace(q: btQuaternion): void;
    GetPointForAngle(fAngleInRadians: number, fLength: number): btVector3;
    setParam(num: number, value: number, axis: number): void;
    setFrames(frameA: btTransform, frameB: btTransform): void;
    getFrameOffsetA(): btTransform;
    getFrameOffsetB(): btTransform;
    getParam(num: number, axis: number): number;
    getFlags(): number;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
