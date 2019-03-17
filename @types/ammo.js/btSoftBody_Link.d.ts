declare module Ammo {
  declare class btSoftBody_Link {
    constructor();

    get_m_c3(): btVector3;	set_m_c3(value: btVector3): btVector3;
    get_m_n(): Node;	set_m_n(value: Node): Node;
    get_m_rl(): number;	set_m_rl(value: number): number;
    get_m_bbending:1(): number;	set_m_bbending:1(value: number): number;
    get_m_c0(): number;	set_m_c0(value: number): number;
    get_m_c1(): number;	set_m_c1(value: number): number;
    get_m_c2(): number;	set_m_c2(value: number): number;

  }
}
