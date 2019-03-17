declare module Ammo {
  declare class btHingeConstraint {
    constructor();
    constructor(rbA: btRigidBody, pivotInA: btVector3, axisInA: btVector3, useReferenceFrameA: boolean);
    constructor(rbA: btRigidBody, rbB: btRigidBody, rbAFrame: btTransform, rbBFrame: btTransform, useReferenceFrameA: boolean);
    constructor(rbA: btRigidBody, rbAFrame: btTransform, useReferenceFrameA: boolean);
    constructor(rbA: btRigidBody, rbB: btRigidBody, pivotInA: btVector3, pivotInB: btVector3, axisInA: btVector3, axisInB: btVector3, useReferenceFrameA: boolean);


    buildJacobian(): void;
    calculateSerializeBufferSize(): number;
    enableAngularMotor(enableMotor: boolean, targetVelocity: number, maxMotorImpulse: number): void;
    enableMotor(enableMotor: boolean): void;
    getInfo2NonVirtual(info: btConstraintInfo2, transA: btTransform, transB: btTransform, angVelA: btVector3, angVelB: btVector3): void;
    getInfo2Internal(info: btConstraintInfo2, transA: btTransform, transB: btTransform, angVelA: btVector3, angVelB: btVector3): void;
    getInfo2InternalUsingFrameOffset(info: btConstraintInfo2, transA: btTransform, transB: btTransform, angVelA: btVector3, angVelB: btVector3): void;
    getLimitSoftness(): number;
    getRigidBodyA(): btRigidBody;
    getRigidBodyB(): btRigidBody;
    getRigidBodyA(): btRigidBody;
    getRigidBodyB(): btRigidBody;
    getFrameOffsetA(): btTransform;
    getFrameOffsetB(): btTransform;
    getFlags(): number;
    getParam(num: number, axis: number): number;
    getInfo1(info: btConstraintInfo1): void;
    getInfo1NonVirtual(info: btConstraintInfo1): void;
    getUseReferenceFrameA(): boolean;
    getUseFrameOffset(): boolean;
    getMaxMotorImpulse(): number;
    getMotorTargetVelocity(): number;
    getEnableAngularMotor(): boolean;
    getInfo2(info: btConstraintInfo2): void;
    getLimitBiasFactor(): number;
    getLimitRelaxationFactor(): number;
    getAngularOnly(): boolean;
    getLimitSign(): number;
    getLowerLimit(): number;
    getUpperLimit(): number;
    getHingeAngle(): number;
    getHingeAngle(transA: btTransform, transB: btTransform): number;
    getSolveLimit(): number;
    getAFrame(): btTransform;
    getBFrame(): btTransform;
    getAFrame(): btTransform;
    getBFrame(): btTransform;
    hasLimit(): boolean;
    setUseFrameOffset(frameOffsetOnOff: boolean): void;
    setAxis(axisInA: btVector3): void;
    setLimit(low: number, high: number, _softness: number, _biasFactor: number, _relaxationFactor: number): void;
    setMotorTarget(targetAngle: number, dt: number): void;
    setMotorTarget(qAinB: btQuaternion, dt: number): void;
    setMotorTargetVelocity(motorTargetVelocity: number): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    setMaxMotorImpulse(maxMotorImpulse: number): void;
    setUseReferenceFrameA(useReferenceFrameA: boolean): void;
    setParam(num: number, value: number, axis: number): void;
    setAngularOnly(angularOnly: boolean): void;
    setFrames(frameA: btTransform, frameB: btTransform): void;
    testLimit(transA: btTransform, transB: btTransform): void;
    updateRHS(timeStep: number): void;
  }
}
