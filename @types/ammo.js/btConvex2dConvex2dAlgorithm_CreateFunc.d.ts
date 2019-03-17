declare module Ammo {
  declare class btConvex2dConvex2dAlgorithm_CreateFunc {
    constructor(simplexSolver: btSimplexSolverInterface, pdSolver: btConvexPenetrationDepthSolver);
    CreateCollisionAlgorithm(ci: btCollisionAlgorithmConstructionInfo, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper): btCollisionAlgorithm;
    get_m_pdSolver(): btConvexPenetrationDepthSolver;	set_m_pdSolver(value: btConvexPenetrationDepthSolver): btConvexPenetrationDepthSolver;
    get_m_simplexSolver(): btSimplexSolverInterface;	set_m_simplexSolver(value: btSimplexSolverInterface): btSimplexSolverInterface;
    get_m_numPerturbationIterations(): number;	set_m_numPerturbationIterations(value: number): number;
    get_m_minimumPointsPerturbationThreshold(): number;	set_m_minimumPointsPerturbationThreshold(value: number): number;
  }
}
