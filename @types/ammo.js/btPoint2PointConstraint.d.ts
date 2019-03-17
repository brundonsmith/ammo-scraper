declare module Ammo {
  declare class btPoint2PointConstraint {
    constructor();
    constructor(rbA: btRigidBody, pivotInA: btVector3);
    constructor(rbA: btRigidBody, rbB: btRigidBody, pivotInA: btVector3, pivotInB: btVector3);

    get_m_useSolveConstraintObsolete(): boolean;	set_m_useSolveConstraintObsolete(value: boolean): boolean;
    get_m_setting(): btConstraintSetting;	set_m_setting(value: btConstraintSetting): btConstraintSetting;

    buildJacobian(): void;
    calculateSerializeBufferSize(): number;
    getPivotInB(): btVector3;
    getInfo1NonVirtual(info: btConstraintInfo1): void;
    getInfo2NonVirtual(info: btConstraintInfo2, body0_trans: btTransform, body1_trans: btTransform): void;
    getInfo1(info: btConstraintInfo1): void;
    getPivotInA(): btVector3;
    getInfo2(info: btConstraintInfo2): void;
    getFlags(): number;
    getParam(num: number, axis: number): number;
    setParam(num: number, value: number, axis: number): void;
    setPivotA(pivotA: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    setPivotB(pivotB: btVector3): void;
    updateRHS(timeStep: number): void;
  }
}
