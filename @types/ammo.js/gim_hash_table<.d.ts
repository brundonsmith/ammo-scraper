declare module Ammo {
  declare class gim_hash_table< {
    constructor(reserve_size: GUINT, node_size: GUINT, min_hash_table_size: GUINT);
    is_hash_table(): boolean;
    is_sorted(): boolean;
    sort(): boolean;
    switch_to_hashtable(): boolean;
    switch_to_sorted_array(): boolean;
    check_for_switching_to_hashtable(): boolean;
    set_sorted(value: boolean): void;
    size(): GUINT;
    get_key(index: GUINT): GUINT;
    get_value_by_index(index: GUINT): T;
    get_operator(): T;	set_operator(value: T): T;
    get_operator(): T;	set_operator(value: T): T;
    find(hashkey: GUINT): GUINT;
    get_value(hashkey: GUINT): T;
    erase_by_index(index: GUINT): boolean;
    erase_by_index_unsorted(index: GUINT): boolean;
    erase_by_key(hashkey: GUINT): boolean;
    clear(): void;
    insert(hashkey: GUINT, element: T): GUINT;
    insert_override(hashkey: GUINT, element: T): GUINT;
    insert_unsorted(hashkey: GUINT, element: T): GUINT;
  }
}
