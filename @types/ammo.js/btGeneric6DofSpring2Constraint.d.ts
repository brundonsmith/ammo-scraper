declare module Ammo {
  declare class btGeneric6DofSpring2Constraint {
    constructor();
    constructor(rbB: btRigidBody, frameInB: btTransform, rotOrder: RotateOrder);
    constructor(rbA: btRigidBody, rbB: btRigidBody, frameInA: btTransform, frameInB: btTransform, rotOrder: RotateOrder);

    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_bool(): static;	set_bool(value: static): static;

    buildJacobian(): void;
    calculateTransforms(transA: btTransform, transB: btTransform): void;
    calculateSerializeBufferSize(): number;
    calculateTransforms(): void;
    enableMotor(index: number, onOff: boolean): void;
    enableSpring(index: number, onOff: boolean): void;
    getAngularUpperLimitReversed(angularUpper: btVector3): void;
    getAxis(axis_index: number): btVector3;
    getAngle(axis_index: number): number;
    getRelativePivotPosition(axis_index: number): number;
    getLinearLowerLimit(linearLower: btVector3): void;
    getLinearUpperLimit(linearUpper: btVector3): void;
    getAngularLowerLimit(angularLower: btVector3): void;
    getAngularLowerLimitReversed(angularLower: btVector3): void;
    getCalculatedTransformA(): btTransform;
    getAngularUpperLimit(angularUpper: btVector3): void;
    getFrameOffsetA(): btTransform;
    getFrameOffsetA(): btTransform;
    getInfo1(info: btConstraintInfo1): void;
    getRotationOrder(): RotateOrder;
    getFrameOffsetB(): btTransform;
    getFrameOffsetB(): btTransform;
    getParam(num: number, axis: number): number;
    getRotationalLimitMotor(index: number): btRotationalLimitMotor2;
    getCalculatedTransformB(): btTransform;
    getInfo2(info: btConstraintInfo2): void;
    getTranslationalLimitMotor(): btTranslationalLimitMotor2;
    isLimited(limitIndex: number): boolean;
    setAngularUpperLimit(angularUpper: btVector3): void;
    setAxis(axis1: btVector3, axis2: btVector3): void;
    setBounce(index: number, bounce: number): void;
    setLinearUpperLimit(linearUpper: btVector3): void;
    setServo(index: number, onOff: boolean): void;
    setTargetVelocity(index: number, velocity: number): void;
    setServoTarget(index: number, target: number): void;
    setMaxMotorForce(index: number, force: number): void;
    setAngularUpperLimitReversed(angularUpper: btVector3): void;
    setStiffness(index: number, stiffness: number, limitIfNeeded: boolean): void;
    setDamping(index: number, damping: number, limitIfNeeded: boolean): void;
    setEquilibriumPoint(): void;
    setEquilibriumPoint(index: number): void;
    setEquilibriumPoint(index: number, val: number): void;
    setParam(num: number, value: number, axis: number): void;
    setFrames(frameA: btTransform, frameB: btTransform): void;
    setAngularLowerLimit(angularLower: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    setLimit(axis: number, lo: number, hi: number): void;
    setAngularLowerLimitReversed(angularLower: btVector3): void;
    setLinearLowerLimit(linearLower: btVector3): void;
    setRotationOrder(order: RotateOrder): void;
    setLimitReversed(axis: number, lo: number, hi: number): void;
  }
}
