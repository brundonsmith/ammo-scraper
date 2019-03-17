declare module Ammo {
  declare class btMultiBodyJointMotor {
    constructor(body: btMultiBody, link: number, desiredVelocity: number, maxMotorImpulse: number);
    constructor(body: btMultiBody, link: number, linkDoF: number, desiredVelocity: number, maxMotorImpulse: number);


    createConstraintRows(constraintRows: btMultiBodyConstraintArray, data: btMultiBodyJacobianData, infoGlobal: btContactSolverInfo): void;
    debugDraw(drawer: btIDebugDraw): void;
    finalizeMultiDof(): void;
    getIslandIdB(): number;
    getIslandIdA(): number;
    getErp(): number;
    setPositionTarget(posTarget: number, kp: number): void;
    setErp(erp: number): void;
    setRhsClamp(rhsClamp: number): void;
    setVelocityTarget(velTarget: number, kd: number): void;
  }
}
