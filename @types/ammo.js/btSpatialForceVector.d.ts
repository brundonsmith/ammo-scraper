declare module Ammo {
  declare class btSpatialForceVector {
    constructor();
    constructor(angular: btVector3, linear: btVector3);
    constructor(ax: number, ay: number, az: number, lx: number, ly: number, lz: number);
    setVector(angular: btVector3, linear: btVector3): void;
    setValue(ax: number, ay: number, az: number, lx: number, ly: number, lz: number): void;
    addVector(angular: btVector3, linear: btVector3): void;
    addValue(ax: number, ay: number, az: number, lx: number, ly: number, lz: number): void;
    getLinear(): btVector3;
    getAngular(): btVector3;
    setLinear(linear: btVector3): void;
    setAngular(angular: btVector3): void;
    addAngular(angular: btVector3): void;
    addLinear(linear: btVector3): void;
    setZero(): void;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_m_topVec(): btVector3;	set_m_topVec(value: btVector3): btVector3;
    get_m_bottomVec(): btVector3;	set_m_bottomVec(value: btVector3): btVector3;
  }
}
