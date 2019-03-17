declare module Ammo {
  declare class btGeneric6DofSpring2Constraint {
    constructor();
    constructor(rbA: btRigidBody, rbB: btRigidBody, frameInA: btTransform, frameInB: btTransform, rotOrder: RotateOrder);
    constructor(rbB: btRigidBody, frameInB: btTransform, rotOrder: RotateOrder);
    buildJacobian(): void;
    getInfo1(info: btConstraintInfo1): void;
    getInfo2(info: btConstraintInfo2): void;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    getRotationalLimitMotor(index: number): btRotationalLimitMotor2;
    getTranslationalLimitMotor(): btTranslationalLimitMotor2;
    calculateTransforms(transA: btTransform, transB: btTransform): void;
    calculateTransforms(): void;
    getCalculatedTransformA(): btTransform;
    getCalculatedTransformB(): btTransform;
    getFrameOffsetA(): btTransform;
    getFrameOffsetB(): btTransform;
    getFrameOffsetA(): btTransform;
    getFrameOffsetB(): btTransform;
    getAxis(axis_index: number): btVector3;
    getAngle(axis_index: number): number;
    getRelativePivotPosition(axis_index: number): number;
    setFrames(frameA: btTransform, frameB: btTransform): void;
    setLinearLowerLimit(linearLower: btVector3): void;
    getLinearLowerLimit(linearLower: btVector3): void;
    setLinearUpperLimit(linearUpper: btVector3): void;
    getLinearUpperLimit(linearUpper: btVector3): void;
    setAngularLowerLimit(angularLower: btVector3): void;
    setAngularLowerLimitReversed(angularLower: btVector3): void;
    getAngularLowerLimit(angularLower: btVector3): void;
    getAngularLowerLimitReversed(angularLower: btVector3): void;
    setAngularUpperLimit(angularUpper: btVector3): void;
    setAngularUpperLimitReversed(angularUpper: btVector3): void;
    getAngularUpperLimit(angularUpper: btVector3): void;
    getAngularUpperLimitReversed(angularUpper: btVector3): void;
    setLimit(axis: number, lo: number, hi: number): void;
    setLimitReversed(axis: number, lo: number, hi: number): void;
    isLimited(limitIndex: number): boolean;
    setRotationOrder(order: RotateOrder): void;
    getRotationOrder(): RotateOrder;
    setAxis(axis1: btVector3, axis2: btVector3): void;
    setBounce(index: number, bounce: number): void;
    enableMotor(index: number, onOff: boolean): void;
    setServo(index: number, onOff: boolean): void;
    setTargetVelocity(index: number, velocity: number): void;
    setServoTarget(index: number, target: number): void;
    setMaxMotorForce(index: number, force: number): void;
    enableSpring(index: number, onOff: boolean): void;
    setStiffness(index: number, stiffness: number, limitIfNeeded: boolean): void;
    setDamping(index: number, damping: number, limitIfNeeded: boolean): void;
    setEquilibriumPoint(): void;
    setEquilibriumPoint(index: number): void;
    setEquilibriumPoint(index: number, val: number): void;
    setParam(num: number, value: number, axis: number): void;
    getParam(num: number, axis: number): number;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
  }
}