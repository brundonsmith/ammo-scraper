declare module Ammo {
  declare class btMultiBodyPoint2Point {
    constructor();
    constructor(body: btMultiBody, link: number, bodyB: btRigidBody, pivotInA: btVector3, pivotInB: btVector3);
    constructor(bodyA: btMultiBody, linkA: number, bodyB: btMultiBody, linkB: number, pivotInA: btVector3, pivotInB: btVector3);
    finalizeMultiDof(): void;
    getIslandIdA(): number;
    getIslandIdB(): number;
    createConstraintRows(constraintRows: btMultiBodyConstraintArray, data: btMultiBodyJacobianData, infoGlobal: btContactSolverInfo): void;
    getPivotInB(): btVector3;
    setPivotInB(pivotInB: btVector3): void;
    debugDraw(drawer: btIDebugDraw): void;
  }
}
