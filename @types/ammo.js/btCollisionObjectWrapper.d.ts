declare module Ammo {
  declare class btCollisionObjectWrapper {
    constructor(parent: btCollisionObjectWrapper, shape: btCollisionShape, collisionObject: btCollisionObject, worldTransform: btTransform, partId: number, index: number);

    get_m_parent(): btCollisionObjectWrapper;	set_m_parent(value: btCollisionObjectWrapper): btCollisionObjectWrapper;
    get_m_shape(): btCollisionShape;	set_m_shape(value: btCollisionShape): btCollisionShape;
    get_m_collisionObject(): btCollisionObject;	set_m_collisionObject(value: btCollisionObject): btCollisionObject;
    get_m_worldTransform(): btTransform;	set_m_worldTransform(value: btTransform): btTransform;
    get_m_partId(): number;	set_m_partId(value: number): number;
    get_m_index(): number;	set_m_index(value: number): number;

    getWorldTransform(): btTransform;
    getCollisionObject(): btCollisionObject;
    getCollisionShape(): btCollisionShape;
  }
}
