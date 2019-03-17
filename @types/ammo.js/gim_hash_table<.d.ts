declare module Ammo {
  declare class gim_hash_table< {
    constructor(reserve_size: GUINT, node_size: GUINT, min_hash_table_size: GUINT);

    get_operator(): T;	set_operator(value: T): T;
    get_operator(): T;	set_operator(value: T): T;

    check_for_switching_to_hashtable(): boolean;
    clear(): void;
    erase_by_key(hashkey: GUINT): boolean;
    erase_by_index(index: GUINT): boolean;
    erase_by_index_unsorted(index: GUINT): boolean;
    find(hashkey: GUINT): GUINT;
    get_key(index: GUINT): GUINT;
    get_value_by_index(index: GUINT): T;
    get_value(hashkey: GUINT): T;
    is_sorted(): boolean;
    insert_unsorted(hashkey: GUINT, element: T): GUINT;
    insert(hashkey: GUINT, element: T): GUINT;
    is_hash_table(): boolean;
    insert_override(hashkey: GUINT, element: T): GUINT;
    switch_to_hashtable(): boolean;
    size(): GUINT;
    set_sorted(value: boolean): void;
    switch_to_sorted_array(): boolean;
    sort(): boolean;
  }
}
