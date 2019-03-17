declare module Ammo {
  declare class btStridingMeshInterfaceData {
    get_m_meshPartsPtr(): btMeshPartData;	set_m_meshPartsPtr(value: btMeshPartData): btMeshPartData;
    get_m_scaling(): btVector3FloatData;	set_m_scaling(value: btVector3FloatData): btVector3FloatData;
    get_m_numMeshParts(): number;	set_m_numMeshParts(value: number): number;
    get_m_padding(): string;	set_m_padding(value: string): string;
  }
}
