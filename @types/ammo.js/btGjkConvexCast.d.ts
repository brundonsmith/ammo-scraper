declare module Ammo {
  declare class btGjkConvexCast {
    constructor(convexA: btConvexShape, convexB: btConvexShape, simplexSolver: btSimplexSolverInterface);


    calcTimeOfImpact(fromA: btTransform, toA: btTransform, fromB: btTransform, toB: btTransform, result: CastResult): boolean;
  }
}
