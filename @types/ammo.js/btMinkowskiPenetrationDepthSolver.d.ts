declare module Ammo {
  declare class btMinkowskiPenetrationDepthSolver {


    calcPenDepth(simplexSolver: btSimplexSolverInterface, convexA: btConvexShape, convexB: btConvexShape, transA: btTransform, transB: btTransform, v: btVector3, pa: btVector3, pb: btVector3, debugDraw: btIDebugDraw): boolean;
  }
}
