declare module Ammo {
  declare class btConeTwistConstraint {
    constructor();
    constructor(rbA: btRigidBody, rbAFrame: btTransform);
    constructor(rbA: btRigidBody, rbB: btRigidBody, rbAFrame: btTransform, rbBFrame: btTransform);


    GetPointForAngle(fAngleInRadians: number, fLength: number): btVector3;
    buildJacobian(): void;
    calculateSerializeBufferSize(): number;
    calcAngleInfo(): void;
    calcAngleInfo2(transA: btTransform, transB: btTransform, invInertiaWorldA: btMatrix3x3, invInertiaWorldB: btMatrix3x3): void;
    enableMotor(b: boolean): void;
    getFlags(): number;
    getRigidBodyA(): btRigidBody;
    getRigidBodyB(): btRigidBody;
    getParam(num: number, axis: number): number;
    getAngularOnly(): boolean;
    getFrameOffsetB(): btTransform;
    getLimit(limitIndex: number): number;
    getFrameOffsetA(): btTransform;
    getAFrame(): btTransform;
    getBFrame(): btTransform;
    getSolveTwistLimit(): number;
    getSolveSwingLimit(): number;
    getTwistLimitSign(): number;
    getInfo1(info: btConstraintInfo1): void;
    getInfo1NonVirtual(info: btConstraintInfo1): void;
    getSwingSpan1(): number;
    getSwingSpan2(): number;
    getTwistSpan(): number;
    getInfo2(info: btConstraintInfo2): void;
    getBiasFactor(): number;
    getRelaxationFactor(): number;
    getTwistAngle(): number;
    getInfo2NonVirtual(info: btConstraintInfo2, transA: btTransform, transB: btTransform, invInertiaWorldA: btMatrix3x3, invInertiaWorldB: btMatrix3x3): void;
    getDamping(): number;
    getMotorTarget(): btQuaternion;
    getLimitSoftness(): number;
    getFixThresh(): number;
    getMaxMotorImpulse(): number;
    isPastSwingLimit(): boolean;
    isMaxMotorImpulseNormalized(): boolean;
    isMotorEnabled(): boolean;
    setFrames(frameA: btTransform, frameB: btTransform): void;
    setMaxMotorImpulseNormalized(maxMotorImpulse: number): void;
    setMotorTarget(q: btQuaternion): void;
    setDamping(damping: number): void;
    setMotorTargetInConstraintSpace(q: btQuaternion): void;
    setMaxMotorImpulse(maxMotorImpulse: number): void;
    setParam(num: number, value: number, axis: number): void;
    setFixThresh(fixThresh: number): void;
    setLimit(_swingSpan1: number, _swingSpan2: number, _twistSpan: number, _softness: number, _biasFactor: number, _relaxationFactor: number): void;
    setLimit(limitIndex: number, limitValue: number): void;
    setAngularOnly(angularOnly: boolean): void;
    solveConstraintObsolete(bodyA: btSolverBody, bodyB: btSolverBody, timeStep: number): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    updateRHS(timeStep: number): void;
  }
}
