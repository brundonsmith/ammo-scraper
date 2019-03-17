declare module Ammo {
  declare class btPoint2PointConstraint {
    constructor();
    constructor(rbA: btRigidBody, rbB: btRigidBody, pivotInA: btVector3, pivotInB: btVector3);
    constructor(rbA: btRigidBody, pivotInA: btVector3);
    buildJacobian(): void;
    getInfo1(info: btConstraintInfo1): void;
    getInfo1NonVirtual(info: btConstraintInfo1): void;
    getInfo2(info: btConstraintInfo2): void;
    getInfo2NonVirtual(info: btConstraintInfo2, body0_trans: btTransform, body1_trans: btTransform): void;
    updateRHS(timeStep: number): void;
    setPivotA(pivotA: btVector3): void;
    setPivotB(pivotB: btVector3): void;
    getPivotInA(): btVector3;
    getPivotInB(): btVector3;
    setParam(num: number, value: number, axis: number): void;
    getParam(num: number, axis: number): number;
    getFlags(): number;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    get_m_useSolveConstraintObsolete(): boolean;	set_m_useSolveConstraintObsolete(value: boolean): boolean;
    get_m_setting(): btConstraintSetting;	set_m_setting(value: btConstraintSetting): btConstraintSetting;
  }
}
