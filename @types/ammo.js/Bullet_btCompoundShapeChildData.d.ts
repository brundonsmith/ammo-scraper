declare module Ammo {
  declare class Bullet_btCompoundShapeChildData {

    get_m_transform(): btTransformFloatData;	set_m_transform(value: btTransformFloatData): btTransformFloatData;
    get_m_childShape(): btCollisionShapeData;	set_m_childShape(value: btCollisionShapeData): btCollisionShapeData;
    get_m_childShapeType(): number;	set_m_childShapeType(value: number): number;
    get_m_childMargin(): number;	set_m_childMargin(value: number): number;

  }
}
