declare module Ammo {
  declare class Bullet_btPhysicsSystem {

    get_m_collisionShapes(): PointerArray;	set_m_collisionShapes(value: PointerArray): PointerArray;
    get_m_collisionObjects(): PointerArray;	set_m_collisionObjects(value: PointerArray): PointerArray;
    get_m_constraints(): PointerArray;	set_m_constraints(value: PointerArray): PointerArray;

  }
}
