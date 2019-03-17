declare module Ammo {
  declare class btSymmetricSpatialDyad {
    constructor();
    constructor(topLeftMat: btMatrix3x3, topRightMat: btMatrix3x3, bottomLeftMat: btMatrix3x3);
    setMatrix(topLeftMat: btMatrix3x3, topRightMat: btMatrix3x3, bottomLeftMat: btMatrix3x3): void;
    addMatrix(topLeftMat: btMatrix3x3, topRightMat: btMatrix3x3, bottomLeftMat: btMatrix3x3): void;
    setIdentity(): void;
    get_operator(): btSymmetricSpatialDyad;	set_operator(value: btSymmetricSpatialDyad): btSymmetricSpatialDyad;
    get_operator(): btSpatialForceVector;	set_operator(value: btSpatialForceVector): btSpatialForceVector;
    get_m_topLeftMat(): btMatrix3x3;	set_m_topLeftMat(value: btMatrix3x3): btMatrix3x3;
    get_m_topRightMat(): btMatrix3x3;	set_m_topRightMat(value: btMatrix3x3): btMatrix3x3;
    get_m_bottomLeftMat(): btMatrix3x3;	set_m_bottomLeftMat(value: btMatrix3x3): btMatrix3x3;
  }
}
