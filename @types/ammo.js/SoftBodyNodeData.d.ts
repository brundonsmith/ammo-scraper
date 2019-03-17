declare module Ammo {
  declare class SoftBodyNodeData {
    get_m_material(): SoftBodyMaterialData;	set_m_material(value: SoftBodyMaterialData): SoftBodyMaterialData;
    get_m_position(): btVector3FloatData;	set_m_position(value: btVector3FloatData): btVector3FloatData;
    get_m_previousPosition(): btVector3FloatData;	set_m_previousPosition(value: btVector3FloatData): btVector3FloatData;
    get_m_velocity(): btVector3FloatData;	set_m_velocity(value: btVector3FloatData): btVector3FloatData;
    get_m_accumulatedForce(): btVector3FloatData;	set_m_accumulatedForce(value: btVector3FloatData): btVector3FloatData;
    get_m_normal(): btVector3FloatData;	set_m_normal(value: btVector3FloatData): btVector3FloatData;
    get_m_inverseMass(): number;	set_m_inverseMass(value: number): number;
    get_m_area(): number;	set_m_area(value: number): number;
    get_m_attach(): number;	set_m_attach(value: number): number;
    get_m_pad(): number;	set_m_pad(value: number): number;
  }
}
