declare module Ammo {
  declare class btTriangleMeshShapeData {

    get_m_collisionShapeData(): btCollisionShapeData;	set_m_collisionShapeData(value: btCollisionShapeData): btCollisionShapeData;
    get_m_meshInterface(): btStridingMeshInterfaceData;	set_m_meshInterface(value: btStridingMeshInterfaceData): btStridingMeshInterfaceData;
    get_m_quantizedFloatBvh(): btQuantizedBvhFloatData;	set_m_quantizedFloatBvh(value: btQuantizedBvhFloatData): btQuantizedBvhFloatData;
    get_m_quantizedDoubleBvh(): btQuantizedBvhDoubleData;	set_m_quantizedDoubleBvh(value: btQuantizedBvhDoubleData): btQuantizedBvhDoubleData;
    get_m_triangleInfoMap(): btTriangleInfoMapData;	set_m_triangleInfoMap(value: btTriangleInfoMapData): btTriangleInfoMapData;
    get_m_collisionMargin(): number;	set_m_collisionMargin(value: number): number;
    get_m_pad3(): string;	set_m_pad3(value: string): string;

  }
}
