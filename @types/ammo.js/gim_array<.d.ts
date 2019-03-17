declare module Ammo {
  declare class gim_array< {
    constructor(reservesize: GUINT);
    constructor();

    get_m_data(): T;	set_m_data(value: T): T;
    get_m_size(): GUINT;	set_m_size(value: GUINT): GUINT;
    get_m_allocated_size(): GUINT;	set_m_allocated_size(value: GUINT): GUINT;
    get_operator(): T;	set_operator(value: T): T;
    get_operator(): T;	set_operator(value: T): T;

    at(i: GUINT): T;
    at(i: GUINT): T;
    back(): T;
    back(): T;
    clear_memory(): void;
    clear(): void;
    clear_range(start_range: GUINT): void;
    destroyData(): void;
    erase_sorted(index: GUINT): void;
    erase_sorted_mem(index: GUINT): void;
    erase(index: GUINT): void;
    front(): T;
    front(): T;
    get_pointer_at(i: GUINT): T;
    growingCheck(): boolean;
    get_pointer_at(i: GUINT): T;
    insert(obj: T, index: GUINT): void;
    insert_mem(index: GUINT): void;
    max_size(): GUINT;
    pointer(): T;
    pointer(): T;
    pop_back_mem(): void;
    pop_back(): void;
    push_back_mem(): void;
    push_back(obj: T): void;
    push_back_memcpy(obj: T): void;
    resizeData(newsize: GUINT): boolean;
    resize(size: GUINT, call_constructor: boolean, fillData: T): void;
    refit(): void;
    reserve(size: GUINT): boolean;
    size(): GUINT;
    swap(i: GUINT, j: GUINT): void;
  }
}
