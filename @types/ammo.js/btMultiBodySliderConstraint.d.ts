declare module Ammo {
  declare class btMultiBodySliderConstraint {
    constructor(body: btMultiBody, link: number, bodyB: btRigidBody, pivotInA: btVector3, pivotInB: btVector3, frameInA: btMatrix3x3, frameInB: btMatrix3x3, jointAxis: btVector3);
    constructor(bodyA: btMultiBody, linkA: number, bodyB: btMultiBody, linkB: number, pivotInA: btVector3, pivotInB: btVector3, frameInA: btMatrix3x3, frameInB: btMatrix3x3, jointAxis: btVector3);
    finalizeMultiDof(): void;
    getIslandIdA(): number;
    getIslandIdB(): number;
    createConstraintRows(constraintRows: btMultiBodyConstraintArray, data: btMultiBodyJacobianData, infoGlobal: btContactSolverInfo): void;
    getPivotInA(): btVector3;
    setPivotInA(pivotInA: btVector3): void;
    getPivotInB(): btVector3;
    setPivotInB(pivotInB: btVector3): void;
    getFrameInA(): btMatrix3x3;
    setFrameInA(frameInA: btMatrix3x3): void;
    getFrameInB(): btMatrix3x3;
    setFrameInB(frameInB: btMatrix3x3): void;
    getJointAxis(): btVector3;
    setJointAxis(jointAxis: btVector3): void;
    debugDraw(drawer: btIDebugDraw): void;
  }
}
