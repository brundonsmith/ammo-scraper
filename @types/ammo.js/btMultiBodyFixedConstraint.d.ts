declare module Ammo {
  declare class btMultiBodyFixedConstraint {
    constructor(body: btMultiBody, link: number, bodyB: btRigidBody, pivotInA: btVector3, pivotInB: btVector3, frameInA: btMatrix3x3, frameInB: btMatrix3x3);
    constructor(bodyA: btMultiBody, linkA: number, bodyB: btMultiBody, linkB: number, pivotInA: btVector3, pivotInB: btVector3, frameInA: btMatrix3x3, frameInB: btMatrix3x3);


    createConstraintRows(constraintRows: btMultiBodyConstraintArray, data: btMultiBodyJacobianData, infoGlobal: btContactSolverInfo): void;
    debugDraw(drawer: btIDebugDraw): void;
    finalizeMultiDof(): void;
    getIslandIdB(): number;
    getPivotInA(): btVector3;
    getPivotInB(): btVector3;
    getIslandIdA(): number;
    getFrameInA(): btMatrix3x3;
    getFrameInB(): btMatrix3x3;
    setFrameInA(frameInA: btMatrix3x3): void;
    setPivotInA(pivotInA: btVector3): void;
    setFrameInB(frameInB: btMatrix3x3): void;
    setPivotInB(pivotInB: btVector3): void;
  }
}
