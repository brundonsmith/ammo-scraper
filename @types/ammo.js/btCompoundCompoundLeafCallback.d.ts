declare module Ammo {
  declare class btCompoundCompoundLeafCallback {
    constructor(compound1ObjWrap: btCollisionObjectWrapper, compound0ObjWrap: btCollisionObjectWrapper, dispatcher: btDispatcher, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult, childAlgorithmsCache: btHashedSimplePairCache, sharedManifold: btPersistentManifold);
    Process(leaf0: btDbvtNode, leaf1: btDbvtNode): void;
    get_m_numOverlapPairs(): number;	set_m_numOverlapPairs(value: number): number;
    get_m_compound0ColObjWrap(): btCollisionObjectWrapper;	set_m_compound0ColObjWrap(value: btCollisionObjectWrapper): btCollisionObjectWrapper;
    get_m_compound1ColObjWrap(): btCollisionObjectWrapper;	set_m_compound1ColObjWrap(value: btCollisionObjectWrapper): btCollisionObjectWrapper;
    get_m_dispatcher(): btDispatcher;	set_m_dispatcher(value: btDispatcher): btDispatcher;
    get_m_dispatchInfo(): btDispatcherInfo;	set_m_dispatchInfo(value: btDispatcherInfo): btDispatcherInfo;
    get_m_resultOut(): btManifoldResult;	set_m_resultOut(value: btManifoldResult): btManifoldResult;
    get_btHashedSimplePairCache(): class;	set_btHashedSimplePairCache(value: class): class;
    get_m_sharedManifold(): btPersistentManifold;	set_m_sharedManifold(value: btPersistentManifold): btPersistentManifold;
  }
}
