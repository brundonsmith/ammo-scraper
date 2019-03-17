declare module Ammo {
  declare class btCollisionWorld {
    constructor(dispatcher: btDispatcher, broadphasePairCache: btBroadphaseInterface, collisionConfiguration: btCollisionConfiguration);
    setBroadphase(pairCache: btBroadphaseInterface): void;
    getBroadphase(): btBroadphaseInterface;
    getBroadphase(): btBroadphaseInterface;
    getPairCache(): btOverlappingPairCache;
    getDispatcher(): btDispatcher;
    getDispatcher(): btDispatcher;
    updateSingleAabb(colObj: btCollisionObject): void;
    updateAabbs(): void;
    computeOverlappingPairs(): void;
    setDebugDrawer(debugDrawer: btIDebugDraw): void;
    getDebugDrawer(): btIDebugDraw;
    debugDrawWorld(): void;
    debugDrawObject(worldTransform: btTransform, shape: btCollisionShape, color: btVector3): void;
    getNumCollisionObjects(): number;
    rayTest(rayFromWorld: btVector3, rayToWorld: btVector3, resultCallback: RayResultCallback): void;
    convexSweepTest(castShape: btConvexShape, from: btTransform, to: btTransform, resultCallback: ConvexResultCallback, allowedCcdPenetration: number): void;
    contactTest(colObj: btCollisionObject, resultCallback: ContactResultCallback): void;
    contactPairTest(colObjA: btCollisionObject, colObjB: btCollisionObject, resultCallback: ContactResultCallback): void;
    addCollisionObject(collisionObject: btCollisionObject, collisionFilterGroup: number, collisionFilterMask: number): void;
    refreshBroadphaseProxy(collisionObject: btCollisionObject): void;
    getCollisionObjectArray(): btCollisionObjectArray;
    getCollisionObjectArray(): btCollisionObjectArray;
    removeCollisionObject(collisionObject: btCollisionObject): void;
    performDiscreteCollisionDetection(): void;
    getDispatchInfo(): btDispatcherInfo;
    getDispatchInfo(): btDispatcherInfo;
    getForceUpdateAllAabbs(): boolean;
    setForceUpdateAllAabbs(forceUpdateAllAabbs: boolean): void;
    serialize(serializer: btSerializer): void;
    get_void(): static;	set_void(value: static): static;
    get_void(): static;	set_void(value: static): static;
    get_void(): static;	set_void(value: static): static;
    get_void(): static;	set_void(value: static): static;
  }
}
