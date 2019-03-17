declare module Ammo {
  declare class btMaterialProperties {
    get_m_numMaterials(): number;	set_m_numMaterials(value: number): number;
    get_m_materialBase(): string;	set_m_materialBase(value: string): string;
    get_m_materialStride(): number;	set_m_materialStride(value: number): number;
    get_m_materialType(): PHY_ScalarType;	set_m_materialType(value: PHY_ScalarType): PHY_ScalarType;
    get_m_numTriangles(): number;	set_m_numTriangles(value: number): number;
    get_m_triangleMaterialsBase(): string;	set_m_triangleMaterialsBase(value: string): string;
    get_m_triangleMaterialStride(): number;	set_m_triangleMaterialStride(value: number): number;
    get_m_triangleType(): PHY_ScalarType;	set_m_triangleType(value: PHY_ScalarType): PHY_ScalarType;
  }
}
