declare module Ammo {
  declare class btCollisionAlgorithmConstructionInfo {
    constructor();
    constructor(dispatcher: btDispatcher, temp: number);

    get_m_dispatcher1(): btDispatcher;	set_m_dispatcher1(value: btDispatcher): btDispatcher;
    get_m_manifold(): btPersistentManifold;	set_m_manifold(value: btPersistentManifold): btPersistentManifold;

  }
}
