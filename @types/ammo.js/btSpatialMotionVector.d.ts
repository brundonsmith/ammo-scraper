declare module Ammo {
  declare class btSpatialMotionVector {
    constructor();
    constructor(angular: btVector3, linear: btVector3);

    get_e(): templat;	set_e(value: templat): templat;
    get_e(): templat;	set_e(value: templat): templat;
    get_m_topVec(): btVector3;	set_m_topVec(value: btVector3): btVector3;
    get_m_bottomVec(): btVector3;	set_m_bottomVec(value: btVector3): btVector3;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;

    addAngular(angular: btVector3): void;
    addLinear(linear: btVector3): void;
    addVector(angular: btVector3, linear: btVector3): void;
    addValue(ax: number, ay: number, az: number, lx: number, ly: number, lz: number): void;
    cross(b: SpatialVectorType): SpatialVectorType;
    cross(b: SpatialVectorType, out: SpatialVectorType): void;
    dot(b: btSpatialForceVector): number;
    getLinear(): btVector3;
    getAngular(): btVector3;
    setZero(): void;
    setLinear(linear: btVector3): void;
    setAngular(angular: btVector3): void;
    setVector(angular: btVector3, linear: btVector3): void;
    setValue(ax: number, ay: number, az: number, lx: number, ly: number, lz: number): void;
  }
}
