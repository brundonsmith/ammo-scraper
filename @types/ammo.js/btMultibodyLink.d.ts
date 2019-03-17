declare module Ammo {
  declare class btMultibodyLink {
    constructor();
    setAxisTop(dof: number, axis: btVector3): void;
    setAxisBottom(dof: number, axis: btVector3): void;
    setAxisTop(dof: number, x: number, y: number, z: number): void;
    setAxisBottom(dof: number, x: number, y: number, z: number): void;
    getAxisTop(dof: number): btVector3;
    getAxisBottom(dof: number): btVector3;
    constructor();
    updateCacheMultiDof(pq: number): void;
    get_m_mass(): number;	set_m_mass(value: number): number;
    get_m_inertiaLocal(): btVector3;	set_m_inertiaLocal(value: btVector3): btVector3;
    get_m_parent(): number;	set_m_parent(value: number): number;
    get_m_zeroRotParentToThis(): btQuaternion;	set_m_zeroRotParentToThis(value: btQuaternion): btQuaternion;
    get_m_dVector(): btVector3;	set_m_dVector(value: btVector3): btVector3;
    get_m_eVector(): btVector3;	set_m_eVector(value: btVector3): btVector3;
    get_m_absFrameTotVelocity(): btSpatialMotionVector;	set_m_absFrameTotVelocity(value: btSpatialMotionVector): btSpatialMotionVector;
    get_m_absFrameLocVelocity(): btSpatialMotionVector;	set_m_absFrameLocVelocity(value: btSpatialMotionVector): btSpatialMotionVector;
    get_m_axes(): btSpatialMotionVector;	set_m_axes(value: btSpatialMotionVector): btSpatialMotionVector;
    get_m_dofOffset(): number;	set_m_dofOffset(value: number): number;
    get_m_cfgOffset(): number;	set_m_cfgOffset(value: number): number;
    get_m_cachedRotParentToThis(): btQuaternion;	set_m_cachedRotParentToThis(value: btQuaternion): btQuaternion;
    get_m_cachedRVector(): btVector3;	set_m_cachedRVector(value: btVector3): btVector3;
    get_m_appliedForce(): btVector3;	set_m_appliedForce(value: btVector3): btVector3;
    get_m_appliedTorque(): btVector3;	set_m_appliedTorque(value: btVector3): btVector3;
    get_m_appliedConstraintForce(): btVector3;	set_m_appliedConstraintForce(value: btVector3): btVector3;
    get_m_appliedConstraintTorque(): btVector3;	set_m_appliedConstraintTorque(value: btVector3): btVector3;
    get_m_jointPos(): number;	set_m_jointPos(value: number): number;
    get_m_jointTorque(): number;	set_m_jointTorque(value: number): number;
    get_btMultiBodyLinkCollider(): class;	set_btMultiBodyLinkCollider(value: class): class;
    get_m_flags(): number;	set_m_flags(value: number): number;
    get_m_dofCount(): number;	set_m_dofCount(value: number): number;
    get_m_posVarCount(): number;	set_m_posVarCount(value: number): number;
    get_m_jointType(): eFeatherstoneJointType;	set_m_jointType(value: eFeatherstoneJointType): eFeatherstoneJointType;
    get_m_cachedWorldTransform(): btTransform;	set_m_cachedWorldTransform(value: btTransform): btTransform;
    get_m_linkName(): string;	set_m_linkName(value: string): string;
    get_m_jointName(): string;	set_m_jointName(value: string): string;
    get_m_userPtr(): void;	set_m_userPtr(value: void): void;
    get_m_jointDamping(): number;	set_m_jointDamping(value: number): number;
    get_m_jointFriction(): number;	set_m_jointFriction(value: number): number;
    get_m_jointLowerLimit(): number;	set_m_jointLowerLimit(value: number): number;
    get_m_jointUpperLimit(): number;	set_m_jointUpperLimit(value: number): number;
    get_m_jointMaxForce(): number;	set_m_jointMaxForce(value: number): number;
    get_m_jointMaxVelocity(): number;	set_m_jointMaxVelocity(value: number): number;
  }
}
