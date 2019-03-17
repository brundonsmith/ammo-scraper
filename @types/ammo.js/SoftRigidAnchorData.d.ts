declare module Ammo {
  declare class SoftRigidAnchorData {
    get_m_c0(): btMatrix3x3FloatData;	set_m_c0(value: btMatrix3x3FloatData): btMatrix3x3FloatData;
    get_m_c1(): btVector3FloatData;	set_m_c1(value: btVector3FloatData): btVector3FloatData;
    get_m_localFrame(): btVector3FloatData;	set_m_localFrame(value: btVector3FloatData): btVector3FloatData;
    get_m_rigidBody(): btRigidBodyData;	set_m_rigidBody(value: btRigidBodyData): btRigidBodyData;
    get_m_nodeIndex(): number;	set_m_nodeIndex(value: number): number;
    get_m_c2(): number;	set_m_c2(value: number): number;
  }
}
