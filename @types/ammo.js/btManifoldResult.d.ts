declare module Ammo {
  declare class btManifoldResult {
    constructor();
    constructor(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper);

    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_m_closestPointDistanceThreshold(): number;	set_m_closestPointDistanceThreshold(value: number): number;

    addContactPoint(normalOnBInWorld: btVector3, pointInWorld: btVector3, depth: number): void;
    getBody0Wrap(): btCollisionObjectWrapper;
    getPersistentManifold(): btPersistentManifold;
    getPersistentManifold(): btPersistentManifold;
    getBody0Internal(): btCollisionObject;
    getBody1Internal(): btCollisionObject;
    getBody1Wrap(): btCollisionObjectWrapper;
    refreshContactPoints(): void;
    setShapeIdentifiersB(partId1: number, index1: number): void;
    setShapeIdentifiersA(partId0: number, index0: number): void;
    setBody1Wrap(obj1Wrap: btCollisionObjectWrapper): void;
    setPersistentManifold(manifoldPtr: btPersistentManifold): void;
    setBody0Wrap(obj0Wrap: btCollisionObjectWrapper): void;
  }
}
