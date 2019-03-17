declare module Ammo {
  declare class btGenericMemoryPool {
    init_pool(element_size: size_t, element_count: size_t): void;
    end_pool(): void;
    constructor(element_size: size_t, element_count: size_t);
    get_pool_capacity(): size_t;
    gem_element_size(): size_t;
    get_max_element_count(): size_t;
    get_allocated_count(): size_t;
    get_free_positions_count(): size_t;
    get_element_data(element_index: size_t): void;
    allocate(size_bytes: size_t): void;
    freeMemory(pointer: void): boolean;
    get_m_pool(): string;	set_m_pool(value: string): string;
    get_m_free_nodes(): size_t;	set_m_free_nodes(value: size_t): size_t;
    get_m_allocated_sizes(): size_t;	set_m_allocated_sizes(value: size_t): size_t;
    get_m_allocated_count(): size_t;	set_m_allocated_count(value: size_t): size_t;
    get_m_free_nodes_count(): size_t;	set_m_free_nodes_count(value: size_t): size_t;
  }
}
