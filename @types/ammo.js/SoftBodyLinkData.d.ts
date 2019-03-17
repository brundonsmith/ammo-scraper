declare module Ammo {
  declare class SoftBodyLinkData {
    get_m_material(): SoftBodyMaterialData;	set_m_material(value: SoftBodyMaterialData): SoftBodyMaterialData;
    get_m_nodeIndices(): number;	set_m_nodeIndices(value: number): number;
    get_m_restLength(): number;	set_m_restLength(value: number): number;
    get_m_bbending(): number;	set_m_bbending(value: number): number;
  }
}
