declare module Ammo {
  declare class btClosestNotMeConvexResultCallback {
    constructor(me: btCollisionObject, fromA: btVector3, toA: btVector3, pairCache: btOverlappingPairCache, dispatcher: btDispatcher);

    get_m_me(): btCollisionObject;	set_m_me(value: btCollisionObject): btCollisionObject;
    get_m_allowedPenetration(): number;	set_m_allowedPenetration(value: number): number;
    get_m_pairCache(): btOverlappingPairCache;	set_m_pairCache(value: btOverlappingPairCache): btOverlappingPairCache;
    get_m_dispatcher(): btDispatcher;	set_m_dispatcher(value: btDispatcher): btDispatcher;

    addSingleResult(convexResult: btCollisionWorld_LocalConvexResult, normalInWorldSpace: boolean): number;
    needsCollision(proxy0: btBroadphaseProxy): boolean;
  }
}
