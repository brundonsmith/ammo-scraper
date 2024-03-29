declare module Ammo {
  declare class btMultiBodyJointLimitConstraint {
    constructor(body: btMultiBody, link: number, lower: number, upper: number);


    createConstraintRows(constraintRows: btMultiBodyConstraintArray, data: btMultiBodyJacobianData, infoGlobal: btContactSolverInfo): void;
    debugDraw(drawer: btIDebugDraw): void;
    finalizeMultiDof(): void;
    getIslandIdA(): number;
    getIslandIdB(): number;
  }
}
