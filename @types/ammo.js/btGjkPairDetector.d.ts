declare module Ammo {
  declare class btGjkPairDetector {
    constructor(objectA: btConvexShape, objectB: btConvexShape, simplexSolver: btSimplexSolverInterface, penetrationDepthSolver: btConvexPenetrationDepthSolver);
    constructor(objectA: btConvexShape, objectB: btConvexShape, shapeTypeA: number, shapeTypeB: number, marginA: number, marginB: number, simplexSolver: btSimplexSolverInterface, penetrationDepthSolver: btConvexPenetrationDepthSolver);
    getClosestPoints(input: ClosestPointInput, output: Result, debugDraw: btIDebugDraw, swapResults: boolean): void;
    getClosestPointsNonVirtual(input: ClosestPointInput, output: Result, debugDraw: btIDebugDraw): void;
    setMinkowskiA(minkA: btConvexShape): void;
    setMinkowskiB(minkB: btConvexShape): void;
    setCachedSeperatingAxis(seperatingAxis: btVector3): void;
    getCachedSeparatingAxis(): btVector3;
    getCachedSeparatingDistance(): number;
    setPenetrationDepthSolver(penetrationDepthSolver: btConvexPenetrationDepthSolver): void;
    setIgnoreMargin(ignoreMargin: boolean): void;
    get_m_lastUsedMethod(): number;	set_m_lastUsedMethod(value: number): number;
    get_m_curIter(): number;	set_m_curIter(value: number): number;
    get_m_degenerateSimplex(): number;	set_m_degenerateSimplex(value: number): number;
    get_m_catchDegeneracies(): number;	set_m_catchDegeneracies(value: number): number;
    get_m_fixContactNormalDirection(): number;	set_m_fixContactNormalDirection(value: number): number;
  }
}
