declare module Ammo {
  declare class btConvexPlaneCollisionAlgorithm_CreateFunc {
    constructor();

    get_m_numPerturbationIterations(): number;	set_m_numPerturbationIterations(value: number): number;
    get_m_minimumPointsPerturbationThreshold(): number;	set_m_minimumPointsPerturbationThreshold(value: number): number;

    CreateCollisionAlgorithm(ci: btCollisionAlgorithmConstructionInfo, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper): btCollisionAlgorithm;
  }
}
