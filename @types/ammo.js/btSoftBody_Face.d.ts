declare module Ammo {
  declare class btSoftBody_Face {
    get_m_n(): Node;	set_m_n(value: Node): Node;
    get_m_normal(): btVector3;	set_m_normal(value: btVector3): btVector3;
    get_m_ra(): number;	set_m_ra(value: number): number;
    get_m_leaf(): btDbvtNode;	set_m_leaf(value: btDbvtNode): btDbvtNode;
  }
}
