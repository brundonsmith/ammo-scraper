declare module Ammo {
  declare class btGeneric6DofConstraint {
    constructor();
    constructor(rbB: btRigidBody, frameInB: btTransform, useLinearReferenceFrameB: boolean);
    constructor(rbA: btRigidBody, rbB: btRigidBody, frameInA: btTransform, frameInB: btTransform, useLinearReferenceFrameA: boolean);

    get_m_useSolveConstraintObsolete(): boolean;	set_m_useSolveConstraintObsolete(value: boolean): boolean;

    buildJacobian(): void;
    calculateTransforms(): void;
    calculateSerializeBufferSize(): number;
    calculateTransforms(transA: btTransform, transB: btTransform): void;
    calcAnchorPos(d: voi): void;
    getFrameOffsetA(): btTransform;
    getFrameOffsetB(): btTransform;
    getLinearLowerLimit(linearLower: btVector3): void;
    getInfo1(info: btConstraintInfo1): void;
    getInfo1NonVirtual(info: btConstraintInfo1): void;
    getInfo2(info: btConstraintInfo2): void;
    getInfo2NonVirtual(info: btConstraintInfo2, transA: btTransform, transB: btTransform, linVelA: btVector3, linVelB: btVector3, angVelA: btVector3, angVelB: btVector3): void;
    getCalculatedTransformB(): btTransform;
    getAxis(axis_index: number): btVector3;
    getAngle(axis_index: number): number;
    getRelativePivotPosition(axis_index: number): number;
    getFlags(): number;
    getParam(num: number, axis: number): number;
    getUseLinearReferenceFrameA(): boolean;
    getFrameOffsetA(): btTransform;
    getUseFrameOffset(): boolean;
    getCalculatedTransformA(): btTransform;
    get_limit_motor_info2(limot: btRotationalLimitMotor, transA: btTransform, transB: btTransform, linVelA: btVector3, linVelB: btVector3, angVelA: btVector3, angVelB: btVector3, info: btConstraintInfo2, row: number, ax1: btVector3, rotational: number, rotAllowed: number): number;
    getAngularLowerLimit(angularLower: btVector3): void;
    getFrameOffsetB(): btTransform;
    getAngularUpperLimit(angularUpper: btVector3): void;
    getRotationalLimitMotor(index: number): btRotationalLimitMotor;
    getTranslationalLimitMotor(): btTranslationalLimitMotor;
    getLinearUpperLimit(linearUpper: btVector3): void;
    isLimited(limitIndex: number): boolean;
    setAngularUpperLimit(angularUpper: btVector3): void;
    setAngularLowerLimit(angularLower: btVector3): void;
    setLinearUpperLimit(linearUpper: btVector3): void;
    setUseFrameOffset(frameOffsetOnOff: boolean): void;
    setLinearLowerLimit(linearLower: btVector3): void;
    setLimit(axis: number, lo: number, hi: number): void;
    setParam(num: number, value: number, axis: number): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    setAxis(axis1: btVector3, axis2: btVector3): void;
    setFrames(frameA: btTransform, frameB: btTransform): void;
    setUseLinearReferenceFrameA(linearReferenceFrameA: boolean): void;
    testAngularLimitMotor(axis_index: number): boolean;
    updateRHS(timeStep: number): void;
  }
}
