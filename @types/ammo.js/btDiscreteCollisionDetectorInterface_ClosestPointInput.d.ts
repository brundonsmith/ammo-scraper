declare module Ammo {
  declare class btDiscreteCollisionDetectorInterface_ClosestPointInput {
    constructor();

    get_m_transformA(): btTransform;	set_m_transformA(value: btTransform): btTransform;
    get_m_transformB(): btTransform;	set_m_transformB(value: btTransform): btTransform;
    get_m_maximumDistanceSquared(): number;	set_m_maximumDistanceSquared(value: number): number;

  }
}
