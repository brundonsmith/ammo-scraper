declare module Ammo {
  declare class btContinuousConvexCollision {
    constructor(shapeA: btConvexShape, shapeB: btConvexShape, simplexSolver: btSimplexSolverInterface, penetrationDepthSolver: btConvexPenetrationDepthSolver);
    constructor(shapeA: btConvexShape, plane: btStaticPlaneShape);
    calcTimeOfImpact(fromA: btTransform, toA: btTransform, fromB: btTransform, toB: btTransform, result: CastResult): boolean;
  }
}
