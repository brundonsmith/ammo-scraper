declare module Ammo {
  declare class Bullet_btConvexInternalShapeData {
    get_m_collisionShapeData(): btCollisionShapeData;	set_m_collisionShapeData(value: btCollisionShapeData): btCollisionShapeData;
    get_m_localScaling(): btVector3FloatData;	set_m_localScaling(value: btVector3FloatData): btVector3FloatData;
    get_m_implicitShapeDimensions(): btVector3FloatData;	set_m_implicitShapeDimensions(value: btVector3FloatData): btVector3FloatData;
    get_m_collisionMargin(): number;	set_m_collisionMargin(value: number): number;
    get_m_padding(): number;	set_m_padding(value: number): number;
  }
}
