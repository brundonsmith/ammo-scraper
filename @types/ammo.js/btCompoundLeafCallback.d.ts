declare module Ammo {
  declare class btCompoundLeafCallback {
    constructor(compoundObjWrap: btCollisionObjectWrapper, otherObjWrap: btCollisionObjectWrapper, dispatcher: btDispatcher, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult, childCollisionAlgorithms: btCollisionAlgorithm, sharedManifold: btPersistentManifold);

    get_m_compoundColObjWrap(): btCollisionObjectWrapper;	set_m_compoundColObjWrap(value: btCollisionObjectWrapper): btCollisionObjectWrapper;
    get_m_otherObjWrap(): btCollisionObjectWrapper;	set_m_otherObjWrap(value: btCollisionObjectWrapper): btCollisionObjectWrapper;
    get_m_dispatcher(): btDispatcher;	set_m_dispatcher(value: btDispatcher): btDispatcher;
    get_m_dispatchInfo(): btDispatcherInfo;	set_m_dispatchInfo(value: btDispatcherInfo): btDispatcherInfo;
    get_m_resultOut(): btManifoldResult;	set_m_resultOut(value: btManifoldResult): btManifoldResult;
    get_m_childCollisionAlgorithms(): btCollisionAlgorithm;	set_m_childCollisionAlgorithms(value: btCollisionAlgorithm): btCollisionAlgorithm;
    get_m_sharedManifold(): btPersistentManifold;	set_m_sharedManifold(value: btPersistentManifold): btPersistentManifold;

    ProcessChildShape(childShape: btCollisionShape, index: number): void;
    Process(leaf: btDbvtNode): void;
  }
}
