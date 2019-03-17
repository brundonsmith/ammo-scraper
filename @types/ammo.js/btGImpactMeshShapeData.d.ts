declare module Ammo {
  declare class btGImpactMeshShapeData {

    get_m_collisionShapeData(): btCollisionShapeData;	set_m_collisionShapeData(value: btCollisionShapeData): btCollisionShapeData;
    get_m_meshInterface(): btStridingMeshInterfaceData;	set_m_meshInterface(value: btStridingMeshInterfaceData): btStridingMeshInterfaceData;
    get_m_localScaling(): btVector3FloatData;	set_m_localScaling(value: btVector3FloatData): btVector3FloatData;
    get_m_collisionMargin(): number;	set_m_collisionMargin(value: number): number;
    get_m_gimpactSubType(): number;	set_m_gimpactSubType(value: number): number;

  }
}
