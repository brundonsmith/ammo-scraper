declare module Ammo {
  declare class btMultiBodyConstraint {
    constructor();
    constructor(bodyA: btMultiBody, bodyB: btMultiBody, linkA: number, linkB: number, numRows: number, isUnilateral: boolean);
    updateJacobianSizes(): void;
    allocateJacobiansMultiDof(): void;
    setFrameInB(frameInB: btMatrix3x3): void;
    setPivotInB(pivotInB: btVector3): void;
    finalizeMultiDof(): void;
    getIslandIdA(): number;
    getIslandIdB(): number;
    createConstraintRows(constraintRows: btMultiBodyConstraintArray, data: btMultiBodyJacobianData, infoGlobal: btContactSolverInfo): void;
    getNumRows(): number;
    getMultiBodyA(): btMultiBody;
    getMultiBodyB(): btMultiBody;
    getLinkA(): number;
    getLinkB(): number;
    internalSetAppliedImpulse(dof: number, appliedImpulse: number): void;
    getAppliedImpulse(dof: number): number;
    getPosition(row: number): number;
    setPosition(row: number, pos: number): void;
    isUnilateral(): boolean;
    jacobianA(row: number): number;
    jacobianA(row: number): number;
    jacobianB(row: number): number;
    jacobianB(row: number): number;
    getMaxAppliedImpulse(): number;
    setMaxAppliedImpulse(maxImp: number): void;
    debugDraw(drawer: btIDebugDraw): void;
    setGearRatio(ratio: number): void;
    setGearAuxLink(gearAuxLink: number): void;
    setRelativePositionTarget(relPosTarget: number): void;
    setErp(erp: number): void;
  }
}
