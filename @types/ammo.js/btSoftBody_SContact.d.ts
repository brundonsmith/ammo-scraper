declare module Ammo {
  declare class btSoftBody_SContact {
    get_m_node(): Node;	set_m_node(value: Node): Node;
    get_m_face(): Face;	set_m_face(value: Face): Face;
    get_m_weights(): btVector3;	set_m_weights(value: btVector3): btVector3;
    get_m_normal(): btVector3;	set_m_normal(value: btVector3): btVector3;
    get_m_margin(): number;	set_m_margin(value: number): number;
    get_m_friction(): number;	set_m_friction(value: number): number;
    get_m_cfm(): number;	set_m_cfm(value: number): number;
  }
}
