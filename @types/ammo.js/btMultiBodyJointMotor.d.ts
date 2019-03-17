declare module Ammo {
  declare class btMultiBodyJointMotor {
    constructor(body: btMultiBody, link: number, desiredVelocity: number, maxMotorImpulse: number);
    constructor(body: btMultiBody, link: number, linkDoF: number, desiredVelocity: number, maxMotorImpulse: number);
    finalizeMultiDof(): void;
    getIslandIdA(): number;
    getIslandIdB(): number;
    createConstraintRows(constraintRows: btMultiBodyConstraintArray, data: btMultiBodyJacobianData, infoGlobal: btContactSolverInfo): void;
    setVelocityTarget(velTarget: number, kd: number): void;
    setPositionTarget(posTarget: number, kp: number): void;
    setErp(erp: number): void;
    getErp(): number;
    setRhsClamp(rhsClamp: number): void;
    debugDraw(drawer: btIDebugDraw): void;
  }
}
