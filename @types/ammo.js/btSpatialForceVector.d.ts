declare module Ammo {
  declare class btSpatialForceVector {
    constructor();
    constructor(ax: number, ay: number, az: number, lx: number, ly: number, lz: number);
    constructor(angular: btVector3, linear: btVector3);

    get_m_topVec(): btVector3;	set_m_topVec(value: btVector3): btVector3;
    get_m_bottomVec(): btVector3;	set_m_bottomVec(value: btVector3): btVector3;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;

    addVector(angular: btVector3, linear: btVector3): void;
    addLinear(linear: btVector3): void;
    addValue(ax: number, ay: number, az: number, lx: number, ly: number, lz: number): void;
    addAngular(angular: btVector3): void;
    getAngular(): btVector3;
    getLinear(): btVector3;
    setValue(ax: number, ay: number, az: number, lx: number, ly: number, lz: number): void;
    setAngular(angular: btVector3): void;
    setLinear(linear: btVector3): void;
    setVector(angular: btVector3, linear: btVector3): void;
    setZero(): void;
  }
}
