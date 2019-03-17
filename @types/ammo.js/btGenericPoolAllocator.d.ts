declare module Ammo {
  declare class btGenericPoolAllocator {
    constructor(pool_element_size: size_t, pool_element_count: size_t);

    get_m_pools(): btGenericMemoryPool;	set_m_pools(value: btGenericMemoryPool): btGenericMemoryPool;
    get_m_pool_count(): size_t;	set_m_pool_count(value: size_t): size_t;

    allocate(size_bytes: size_t): void;
    freeMemory(pointer: void): boolean;
    get_pool_capacity(): size_t;
  }
}
