declare module Ammo {
  declare class btSpatialTransformationMatrix {
    get_e(): templat;	set_e(value: templat): templat;
    transform(inVec: SpatialVectorType, outVec: SpatialVectorType, outOp: eOutputOperation): void;
    get_e(): templat;	set_e(value: templat): templat;
    transformRotationOnly(inVec: SpatialVectorType, outVec: SpatialVectorType, outOp: eOutputOperation): void;
    get_e(): templat;	set_e(value: templat): templat;
    transformInverse(inVec: SpatialVectorType, outVec: SpatialVectorType, outOp: eOutputOperation): void;
    get_e(): templat;	set_e(value: templat): templat;
    transformInverseRotationOnly(inVec: SpatialVectorType, outVec: SpatialVectorType, outOp: eOutputOperation): void;
    transformInverse(inMat: btSymmetricSpatialDyad, outMat: btSymmetricSpatialDyad, outOp: eOutputOperation): void;
    get_e(): templat;	set_e(value: templat): templat;
    get_operator(): SpatialVectorType;	set_operator(value: SpatialVectorType): SpatialVectorType;
    get_m_rotMat(): btMatrix3x3;	set_m_rotMat(value: btMatrix3x3): btMatrix3x3;
    get_m_trnVec(): btVector3;	set_m_trnVec(value: btVector3): btVector3;
  }
}
