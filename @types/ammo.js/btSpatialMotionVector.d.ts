declare module Ammo {
  declare class btSpatialMotionVector {
    constructor();
    constructor(angular: btVector3, linear: btVector3);
    setVector(angular: btVector3, linear: btVector3): void;
    setValue(ax: number, ay: number, az: number, lx: number, ly: number, lz: number): void;
    addVector(angular: btVector3, linear: btVector3): void;
    addValue(ax: number, ay: number, az: number, lx: number, ly: number, lz: number): void;
    getAngular(): btVector3;
    getLinear(): btVector3;
    setAngular(angular: btVector3): void;
    setLinear(linear: btVector3): void;
    addAngular(angular: btVector3): void;
    addLinear(linear: btVector3): void;
    setZero(): void;
    dot(b: btSpatialForceVector): number;
    get_e(): templat;	set_e(value: templat): templat;
    cross(b: SpatialVectorType, out: SpatialVectorType): void;
    get_e(): templat;	set_e(value: templat): templat;
    cross(b: SpatialVectorType): SpatialVectorType;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_operator(): btSpatialMotionVector;	set_operator(value: btSpatialMotionVector): btSpatialMotionVector;
    get_m_topVec(): btVector3;	set_m_topVec(value: btVector3): btVector3;
    get_m_bottomVec(): btVector3;	set_m_bottomVec(value: btVector3): btVector3;
  }
}
