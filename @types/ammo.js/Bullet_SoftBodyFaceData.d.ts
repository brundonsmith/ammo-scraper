declare module Ammo {
  declare class Bullet_SoftBodyFaceData {
    get_m_normal(): btVector3FloatData;	set_m_normal(value: btVector3FloatData): btVector3FloatData;
    get_m_material(): SoftBodyMaterialData;	set_m_material(value: SoftBodyMaterialData): SoftBodyMaterialData;
    get_m_nodeIndices(): number;	set_m_nodeIndices(value: number): number;
    get_m_restArea(): number;	set_m_restArea(value: number): number;
  }
}
