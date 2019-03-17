declare module Ammo {
  declare class btMultiBodyConstraint {
    constructor();
    constructor(bodyA: btMultiBody, bodyB: btMultiBody, linkA: number, linkB: number, numRows: number, isUnilateral: boolean);


    allocateJacobiansMultiDof(): void;
    createConstraintRows(constraintRows: btMultiBodyConstraintArray, data: btMultiBodyJacobianData, infoGlobal: btContactSolverInfo): void;
    debugDraw(drawer: btIDebugDraw): void;
    finalizeMultiDof(): void;
    getIslandIdB(): number;
    getMaxAppliedImpulse(): number;
    getPosition(row: number): number;
    getMultiBodyA(): btMultiBody;
    getMultiBodyB(): btMultiBody;
    getLinkA(): number;
    getLinkB(): number;
    getIslandIdA(): number;
    getAppliedImpulse(dof: number): number;
    getNumRows(): number;
    internalSetAppliedImpulse(dof: number, appliedImpulse: number): void;
    isUnilateral(): boolean;
    jacobianA(row: number): number;
    jacobianA(row: number): number;
    jacobianB(row: number): number;
    jacobianB(row: number): number;
    setFrameInB(frameInB: btMatrix3x3): void;
    setPosition(row: number, pos: number): void;
    setPivotInB(pivotInB: btVector3): void;
    setMaxAppliedImpulse(maxImp: number): void;
    setRelativePositionTarget(relPosTarget: number): void;
    setGearRatio(ratio: number): void;
    setGearAuxLink(gearAuxLink: number): void;
    setErp(erp: number): void;
    updateJacobianSizes(): void;
  }
}
