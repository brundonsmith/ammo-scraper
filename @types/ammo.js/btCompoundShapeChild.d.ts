declare module Ammo {
  declare class btCompoundShapeChild {
    constructor();
    get_m_transform(): btTransform;	set_m_transform(value: btTransform): btTransform;
    get_m_childShape(): btCollisionShape;	set_m_childShape(value: btCollisionShape): btCollisionShape;
    get_m_childShapeType(): number;	set_m_childShapeType(value: number): number;
    get_m_childMargin(): number;	set_m_childMargin(value: number): number;
  }
}
