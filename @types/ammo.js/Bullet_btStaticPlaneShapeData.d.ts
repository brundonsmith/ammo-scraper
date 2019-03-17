declare module Ammo {
  declare class Bullet_btStaticPlaneShapeData {
    get_m_collisionShapeData(): btCollisionShapeData;	set_m_collisionShapeData(value: btCollisionShapeData): btCollisionShapeData;
    get_m_localScaling(): btVector3FloatData;	set_m_localScaling(value: btVector3FloatData): btVector3FloatData;
    get_m_planeNormal(): btVector3FloatData;	set_m_planeNormal(value: btVector3FloatData): btVector3FloatData;
    get_m_planeConstant(): number;	set_m_planeConstant(value: number): number;
    get_m_pad(): string;	set_m_pad(value: string): string;
  }
}
