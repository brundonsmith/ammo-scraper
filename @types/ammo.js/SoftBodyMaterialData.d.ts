declare module Ammo {
  declare class SoftBodyMaterialData {
    get_m_linearStiffness(): number;	set_m_linearStiffness(value: number): number;
    get_m_angularStiffness(): number;	set_m_angularStiffness(value: number): number;
    get_m_volumeStiffness(): number;	set_m_volumeStiffness(value: number): number;
    get_m_flags(): number;	set_m_flags(value: number): number;
  }
}
