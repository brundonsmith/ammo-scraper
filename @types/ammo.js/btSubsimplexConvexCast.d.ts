declare module Ammo {
  declare class btSubsimplexConvexCast {
    constructor(shapeA: btConvexShape, shapeB: btConvexShape, simplexSolver: btSimplexSolverInterface);


    calcTimeOfImpact(fromA: btTransform, toA: btTransform, fromB: btTransform, toB: btTransform, result: CastResult): boolean;
  }
}
