declare module Ammo {
  declare class btSoftBody_RContact {

    get_m_cti(): sCti;	set_m_cti(value: sCti): sCti;
    get_m_node(): Node;	set_m_node(value: Node): Node;
    get_m_c0(): btMatrix3x3;	set_m_c0(value: btMatrix3x3): btMatrix3x3;
    get_m_c1(): btVector3;	set_m_c1(value: btVector3): btVector3;
    get_m_c2(): number;	set_m_c2(value: number): number;
    get_m_c3(): number;	set_m_c3(value: number): number;
    get_m_c4(): number;	set_m_c4(value: number): number;

  }
}
