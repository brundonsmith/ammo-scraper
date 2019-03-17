declare module Ammo {
  declare class btSoftMultiBodyDynamicsWorld {
    constructor(dispatcher: btDispatcher, pairCache: btBroadphaseInterface, constraintSolver: btMultiBodyConstraintSolver, collisionConfiguration: btCollisionConfiguration, softBodySolver: btSoftBodySolver);
    debugDrawWorld(): void;
    addSoftBody(body: btSoftBody, collisionFilterGroup: number, collisionFilterMask: number): void;
    removeSoftBody(body: btSoftBody): void;
    removeCollisionObject(collisionObject: btCollisionObject): void;
    getDrawFlags(): number;
    setDrawFlags(f: number): void;
    getWorldInfo(): btSoftBodyWorldInfo;
    getWorldInfo(): btSoftBodyWorldInfo;
    getWorldType(): btDynamicsWorldType;
    getSoftBodyArray(): btSoftBodyArray;
    getSoftBodyArray(): btSoftBodyArray;
    rayTest(rayFromWorld: btVector3, rayToWorld: btVector3, resultCallback: RayResultCallback): void;
    serialize(serializer: btSerializer): void;
    get_void(): static;	set_void(value: static): static;
  }
}
