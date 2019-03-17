declare module Ammo {
  declare class btGjkPairDetector {
    constructor(objectA: btConvexShape, objectB: btConvexShape, simplexSolver: btSimplexSolverInterface, penetrationDepthSolver: btConvexPenetrationDepthSolver);
    constructor(objectA: btConvexShape, objectB: btConvexShape, shapeTypeA: number, shapeTypeB: number, marginA: number, marginB: number, simplexSolver: btSimplexSolverInterface, penetrationDepthSolver: btConvexPenetrationDepthSolver);

    get_m_catchDegeneracies(): number;	set_m_catchDegeneracies(value: number): number;
    get_m_degenerateSimplex(): number;	set_m_degenerateSimplex(value: number): number;
    get_m_curIter(): number;	set_m_curIter(value: number): number;
    get_m_lastUsedMethod(): number;	set_m_lastUsedMethod(value: number): number;
    get_m_fixContactNormalDirection(): number;	set_m_fixContactNormalDirection(value: number): number;

    getCachedSeparatingAxis(): btVector3;
    getClosestPointsNonVirtual(input: ClosestPointInput, output: Result, debugDraw: btIDebugDraw): void;
    getClosestPoints(input: ClosestPointInput, output: Result, debugDraw: btIDebugDraw, swapResults: boolean): void;
    getCachedSeparatingDistance(): number;
    setCachedSeperatingAxis(seperatingAxis: btVector3): void;
    setPenetrationDepthSolver(penetrationDepthSolver: btConvexPenetrationDepthSolver): void;
    setIgnoreMargin(ignoreMargin: boolean): void;
    setMinkowskiB(minkB: btConvexShape): void;
    setMinkowskiA(minkA: btConvexShape): void;
  }
}
