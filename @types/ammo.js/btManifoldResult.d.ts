declare module Ammo {
  declare class btManifoldResult {
    constructor();
    constructor(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper);
    setPersistentManifold(manifoldPtr: btPersistentManifold): void;
    getPersistentManifold(): btPersistentManifold;
    getPersistentManifold(): btPersistentManifold;
    setShapeIdentifiersA(partId0: number, index0: number): void;
    setShapeIdentifiersB(partId1: number, index1: number): void;
    addContactPoint(normalOnBInWorld: btVector3, pointInWorld: btVector3, depth: number): void;
    refreshContactPoints(): void;
    getBody0Wrap(): btCollisionObjectWrapper;
    getBody1Wrap(): btCollisionObjectWrapper;
    setBody0Wrap(obj0Wrap: btCollisionObjectWrapper): void;
    setBody1Wrap(obj1Wrap: btCollisionObjectWrapper): void;
    getBody0Internal(): btCollisionObject;
    getBody1Internal(): btCollisionObject;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_m_closestPointDistanceThreshold(): number;	set_m_closestPointDistanceThreshold(value: number): number;
  }
}
