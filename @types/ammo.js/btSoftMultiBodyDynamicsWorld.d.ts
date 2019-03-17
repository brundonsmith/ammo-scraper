declare module Ammo {
  declare class btSoftMultiBodyDynamicsWorld {
    constructor(dispatcher: btDispatcher, pairCache: btBroadphaseInterface, constraintSolver: btMultiBodyConstraintSolver, collisionConfiguration: btCollisionConfiguration, softBodySolver: btSoftBodySolver);

    get_void(): static;	set_void(value: static): static;

    addSoftBody(body: btSoftBody, collisionFilterGroup: number, collisionFilterMask: number): void;
    debugDrawWorld(): void;
    getSoftBodyArray(): btSoftBodyArray;
    getDrawFlags(): number;
    getSoftBodyArray(): btSoftBodyArray;
    getWorldInfo(): btSoftBodyWorldInfo;
    getWorldType(): btDynamicsWorldType;
    getWorldInfo(): btSoftBodyWorldInfo;
    removeSoftBody(body: btSoftBody): void;
    removeCollisionObject(collisionObject: btCollisionObject): void;
    rayTest(rayFromWorld: btVector3, rayToWorld: btVector3, resultCallback: RayResultCallback): void;
    setDrawFlags(f: number): void;
    serialize(serializer: btSerializer): void;
  }
}
