declare module Ammo {
  declare class btMultiBodyPoint2Point {
    constructor();
    constructor(body: btMultiBody, link: number, bodyB: btRigidBody, pivotInA: btVector3, pivotInB: btVector3);
    constructor(bodyA: btMultiBody, linkA: number, bodyB: btMultiBody, linkB: number, pivotInA: btVector3, pivotInB: btVector3);


    createConstraintRows(constraintRows: btMultiBodyConstraintArray, data: btMultiBodyJacobianData, infoGlobal: btContactSolverInfo): void;
    debugDraw(drawer: btIDebugDraw): void;
    finalizeMultiDof(): void;
    getIslandIdA(): number;
    getIslandIdB(): number;
    getPivotInB(): btVector3;
    setPivotInB(pivotInB: btVector3): void;
  }
}
