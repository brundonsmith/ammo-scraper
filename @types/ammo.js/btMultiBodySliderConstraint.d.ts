declare module Ammo {
  declare class btMultiBodySliderConstraint {
    constructor(body: btMultiBody, link: number, bodyB: btRigidBody, pivotInA: btVector3, pivotInB: btVector3, frameInA: btMatrix3x3, frameInB: btMatrix3x3, jointAxis: btVector3);
    constructor(bodyA: btMultiBody, linkA: number, bodyB: btMultiBody, linkB: number, pivotInA: btVector3, pivotInB: btVector3, frameInA: btMatrix3x3, frameInB: btMatrix3x3, jointAxis: btVector3);


    createConstraintRows(constraintRows: btMultiBodyConstraintArray, data: btMultiBodyJacobianData, infoGlobal: btContactSolverInfo): void;
    debugDraw(drawer: btIDebugDraw): void;
    finalizeMultiDof(): void;
    getFrameInA(): btMatrix3x3;
    getPivotInA(): btVector3;
    getJointAxis(): btVector3;
    getIslandIdB(): number;
    getFrameInB(): btMatrix3x3;
    getIslandIdA(): number;
    getPivotInB(): btVector3;
    setFrameInA(frameInA: btMatrix3x3): void;
    setPivotInB(pivotInB: btVector3): void;
    setFrameInB(frameInB: btMatrix3x3): void;
    setPivotInA(pivotInA: btVector3): void;
    setJointAxis(jointAxis: btVector3): void;
  }
}
