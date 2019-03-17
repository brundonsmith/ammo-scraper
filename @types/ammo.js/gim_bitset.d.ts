declare module Ammo {
  declare class gim_bitset {
    constructor();
    constructor(bits_count: GUINT);
    resize(newsize: GUINT): boolean;
    size(): GUINT;
    set_all(): void;
    clear_all(): void;
    set(bit_index: GUINT): void;
    get(bit_index: GUINT): string;
    clear(bit_index: GUINT): void;
    get_y(): gim_arra;	set_y(value: gim_arra): gim_arra;
  }
}
