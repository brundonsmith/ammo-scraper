declare module Ammo {
  declare class GIM_PAIR {
    constructor();
    constructor(p: GIM_PAIR);
    constructor(index1: number, index2: number);
    constructor();
    constructor(p: GIM_PAIR);
    constructor(index1: GUINT, index2: GUINT);
    get_m_index1(): number;	set_m_index1(value: number): number;
    get_m_index2(): number;	set_m_index2(value: number): number;
    get_m_index1(): GUINT;	set_m_index1(value: GUINT): GUINT;
    get_m_index2(): GUINT;	set_m_index2(value: GUINT): GUINT;
  }
}
