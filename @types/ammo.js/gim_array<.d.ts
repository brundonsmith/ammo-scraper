declare module Ammo {
  declare class gim_array< {
    destroyData(): void;
    resizeData(newsize: GUINT): boolean;
    growingCheck(): boolean;
    reserve(size: GUINT): boolean;
    clear_range(start_range: GUINT): void;
    clear(): void;
    clear_memory(): void;
    constructor();
    constructor(reservesize: GUINT);
    size(): GUINT;
    max_size(): GUINT;
    get_operator(): T;	set_operator(value: T): T;
    get_operator(): T;	set_operator(value: T): T;
    pointer(): T;
    pointer(): T;
    get_pointer_at(i: GUINT): T;
    get_pointer_at(i: GUINT): T;
    at(i: GUINT): T;
    at(i: GUINT): T;
    front(): T;
    front(): T;
    back(): T;
    back(): T;
    swap(i: GUINT, j: GUINT): void;
    push_back(obj: T): void;
    push_back_mem(): void;
    push_back_memcpy(obj: T): void;
    pop_back(): void;
    pop_back_mem(): void;
    erase(index: GUINT): void;
    erase_sorted_mem(index: GUINT): void;
    erase_sorted(index: GUINT): void;
    insert_mem(index: GUINT): void;
    insert(obj: T, index: GUINT): void;
    resize(size: GUINT, call_constructor: boolean, fillData: T): void;
    refit(): void;
    get_m_data(): T;	set_m_data(value: T): T;
    get_m_size(): GUINT;	set_m_size(value: GUINT): GUINT;
    get_m_allocated_size(): GUINT;	set_m_allocated_size(value: GUINT): GUINT;
  }
}
