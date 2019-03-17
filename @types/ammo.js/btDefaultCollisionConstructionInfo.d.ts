declare module Ammo {
  declare class btDefaultCollisionConstructionInfo {
    constructor();

    get_m_persistentManifoldPool(): btPoolAllocator;	set_m_persistentManifoldPool(value: btPoolAllocator): btPoolAllocator;
    get_m_collisionAlgorithmPool(): btPoolAllocator;	set_m_collisionAlgorithmPool(value: btPoolAllocator): btPoolAllocator;
    get_m_defaultMaxPersistentManifoldPoolSize(): number;	set_m_defaultMaxPersistentManifoldPoolSize(value: number): number;
    get_m_defaultMaxCollisionAlgorithmPoolSize(): number;	set_m_defaultMaxCollisionAlgorithmPoolSize(value: number): number;
    get_m_customCollisionAlgorithmMaxElementSize(): number;	set_m_customCollisionAlgorithmMaxElementSize(value: number): number;
    get_m_useEpaPenetrationAlgorithm(): number;	set_m_useEpaPenetrationAlgorithm(value: number): number;

  }
}
