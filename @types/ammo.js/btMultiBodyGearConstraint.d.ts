declare module Ammo {
  declare class btMultiBodyGearConstraint {
    constructor(bodyA: btMultiBody, linkA: number, bodyB: btMultiBody, linkB: number, pivotInA: btVector3, pivotInB: btVector3, frameInA: btMatrix3x3, frameInB: btMatrix3x3);


    createConstraintRows(constraintRows: btMultiBodyConstraintArray, data: btMultiBodyJacobianData, infoGlobal: btContactSolverInfo): void;
    debugDraw(drawer: btIDebugDraw): void;
    finalizeMultiDof(): void;
    getFrameInA(): btMatrix3x3;
    getPivotInA(): btVector3;
    getIslandIdA(): number;
    getPivotInB(): btVector3;
    getFrameInB(): btMatrix3x3;
    getIslandIdB(): number;
    setFrameInA(frameInA: btMatrix3x3): void;
    setPivotInB(pivotInB: btVector3): void;
    setFrameInB(frameInB: btMatrix3x3): void;
    setPivotInA(pivotInA: btVector3): void;
    setGearRatio(gearRatio: number): void;
    setGearAuxLink(gearAuxLink: number): void;
    setRelativePositionTarget(relPosTarget: number): void;
    setErp(erp: number): void;
  }
}
