declare module Ammo {
  declare class btSoftBody_Node {
    get_m_x(): btVector3;	set_m_x(value: btVector3): btVector3;
    get_m_q(): btVector3;	set_m_q(value: btVector3): btVector3;
    get_m_v(): btVector3;	set_m_v(value: btVector3): btVector3;
    get_m_f(): btVector3;	set_m_f(value: btVector3): btVector3;
    get_m_n(): btVector3;	set_m_n(value: btVector3): btVector3;
    get_m_im(): number;	set_m_im(value: number): number;
    get_m_area(): number;	set_m_area(value: number): number;
    get_m_leaf(): btDbvtNode;	set_m_leaf(value: btDbvtNode): btDbvtNode;
    get_m_battach:1(): number;	set_m_battach:1(value: number): number;
  }
}
