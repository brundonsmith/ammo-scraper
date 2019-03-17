declare module Ammo {
  declare class GrahamVector3 {
    constructor(org: btVector3, orgIndex: number);
    get_m_angle(): number;	set_m_angle(value: number): number;
    get_m_orgIndex(): number;	set_m_orgIndex(value: number): number;
  }
}
