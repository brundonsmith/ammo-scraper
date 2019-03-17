declare module Ammo {
  declare class Bullet_btCompoundShapeData {
    get_m_collisionShapeData(): btCollisionShapeData;	set_m_collisionShapeData(value: btCollisionShapeData): btCollisionShapeData;
    get_m_childShapePtr(): btCompoundShapeChildData;	set_m_childShapePtr(value: btCompoundShapeChildData): btCompoundShapeChildData;
    get_m_numChildShapes(): number;	set_m_numChildShapes(value: number): number;
    get_m_collisionMargin(): number;	set_m_collisionMargin(value: number): number;
  }
}
