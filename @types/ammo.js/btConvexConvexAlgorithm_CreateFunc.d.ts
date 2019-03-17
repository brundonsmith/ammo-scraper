declare module Ammo {
  declare class btConvexConvexAlgorithm_CreateFunc {
    constructor(pdSolver: btConvexPenetrationDepthSolver);
    CreateCollisionAlgorithm(ci: btCollisionAlgorithmConstructionInfo, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper): btCollisionAlgorithm;
    get_m_pdSolver(): btConvexPenetrationDepthSolver;	set_m_pdSolver(value: btConvexPenetrationDepthSolver): btConvexPenetrationDepthSolver;
    get_m_numPerturbationIterations(): number;	set_m_numPerturbationIterations(value: number): number;
    get_m_minimumPointsPerturbationThreshold(): number;	set_m_minimumPointsPerturbationThreshold(value: number): number;
  }
}
