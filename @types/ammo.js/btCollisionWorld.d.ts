declare module Ammo {
  declare class btCollisionWorld {
    constructor(dispatcher: btDispatcher, broadphasePairCache: btBroadphaseInterface, collisionConfiguration: btCollisionConfiguration);

    get_void(): static;	set_void(value: static): static;
    get_void(): static;	set_void(value: static): static;
    get_void(): static;	set_void(value: static): static;
    get_void(): static;	set_void(value: static): static;

    addCollisionObject(collisionObject: btCollisionObject, collisionFilterGroup: number, collisionFilterMask: number): void;
    contactTest(colObj: btCollisionObject, resultCallback: ContactResultCallback): void;
    contactPairTest(colObjA: btCollisionObject, colObjB: btCollisionObject, resultCallback: ContactResultCallback): void;
    convexSweepTest(castShape: btConvexShape, from: btTransform, to: btTransform, resultCallback: ConvexResultCallback, allowedCcdPenetration: number): void;
    computeOverlappingPairs(): void;
    debugDrawWorld(): void;
    debugDrawObject(worldTransform: btTransform, shape: btCollisionShape, color: btVector3): void;
    getCollisionObjectArray(): btCollisionObjectArray;
    getDispatcher(): btDispatcher;
    getNumCollisionObjects(): number;
    getBroadphase(): btBroadphaseInterface;
    getBroadphase(): btBroadphaseInterface;
    getPairCache(): btOverlappingPairCache;
    getForceUpdateAllAabbs(): boolean;
    getDispatcher(): btDispatcher;
    getDispatchInfo(): btDispatcherInfo;
    getCollisionObjectArray(): btCollisionObjectArray;
    getDebugDrawer(): btIDebugDraw;
    getDispatchInfo(): btDispatcherInfo;
    performDiscreteCollisionDetection(): void;
    removeCollisionObject(collisionObject: btCollisionObject): void;
    refreshBroadphaseProxy(collisionObject: btCollisionObject): void;
    rayTest(rayFromWorld: btVector3, rayToWorld: btVector3, resultCallback: RayResultCallback): void;
    setForceUpdateAllAabbs(forceUpdateAllAabbs: boolean): void;
    serialize(serializer: btSerializer): void;
    setBroadphase(pairCache: btBroadphaseInterface): void;
    setDebugDrawer(debugDrawer: btIDebugDraw): void;
    updateSingleAabb(colObj: btCollisionObject): void;
    updateAabbs(): void;
  }
}
