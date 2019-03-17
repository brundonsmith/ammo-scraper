declare module Ammo {
  declare class btSoftBody_Tetra {

    get_m_n(): Node;	set_m_n(value: Node): Node;
    get_m_rv(): number;	set_m_rv(value: number): number;
    get_m_leaf(): btDbvtNode;	set_m_leaf(value: btDbvtNode): btDbvtNode;
    get_m_c0(): btVector3;	set_m_c0(value: btVector3): btVector3;
    get_m_c1(): number;	set_m_c1(value: number): number;
    get_m_c2(): number;	set_m_c2(value: number): number;

  }
}
