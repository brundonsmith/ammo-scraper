declare module Ammo {
  declare class btSoftBody_Anchor {

    get_m_node(): Node;	set_m_node(value: Node): Node;
    get_m_local(): btVector3;	set_m_local(value: btVector3): btVector3;
    get_m_body(): btRigidBody;	set_m_body(value: btRigidBody): btRigidBody;
    get_m_influence(): number;	set_m_influence(value: number): number;
    get_m_c0(): btMatrix3x3;	set_m_c0(value: btMatrix3x3): btMatrix3x3;
    get_m_c1(): btVector3;	set_m_c1(value: btVector3): btVector3;
    get_m_c2(): number;	set_m_c2(value: number): number;

  }
}
