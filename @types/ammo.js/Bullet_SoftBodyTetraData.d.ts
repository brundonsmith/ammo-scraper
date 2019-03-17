declare module Ammo {
  declare class Bullet_SoftBodyTetraData {
    get_m_c0(): btVector3FloatData;	set_m_c0(value: btVector3FloatData): btVector3FloatData;
    get_m_material(): SoftBodyMaterialData;	set_m_material(value: SoftBodyMaterialData): SoftBodyMaterialData;
    get_m_nodeIndices(): number;	set_m_nodeIndices(value: number): number;
    get_m_restVolume(): number;	set_m_restVolume(value: number): number;
    get_m_c1(): number;	set_m_c1(value: number): number;
    get_m_c2(): number;	set_m_c2(value: number): number;
    get_m_pad(): number;	set_m_pad(value: number): number;
  }
}
