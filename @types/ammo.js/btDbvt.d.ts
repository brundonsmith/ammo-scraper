declare module Ammo {
  declare class btDbvt {
    constructor();

    get_DBVT_PREFIX(): static;	set_DBVT_PREFIX(value: static): static;
    get_DBVT_PREFIX(): static;	set_DBVT_PREFIX(value: static): static;
    get_DBVT_PREFIX(): static;	set_DBVT_PREFIX(value: static): static;
    get_DBVT_PREFIX(): static;	set_DBVT_PREFIX(value: static): static;
    get_DBVT_PREFIX(): static;	set_DBVT_PREFIX(value: static): static;
    get_DBVT_INLINE(): static;	set_DBVT_INLINE(value: static): static;
    get_DBVT_INLINE(): static;	set_DBVT_INLINE(value: static): static;
    get_DBVT_PREFIX(): static;	set_DBVT_PREFIX(value: static): static;
    get_int(): static;	set_int(value: static): static;
    get_int(): static;	set_int(value: static): static;
    get_m_opath(): unsigned;	set_m_opath(value: unsigned): unsigned;
    get_m_root(): btDbvtNode;	set_m_root(value: btDbvtNode): btDbvtNode;
    get_m_free(): btDbvtNode;	set_m_free(value: btDbvtNode): btDbvtNode;
    get_m_lkhd(): number;	set_m_lkhd(value: number): number;
    get_m_leaves(): number;	set_m_leaves(value: number): number;
    get_void(): DBVT_PREFIX;	set_void(value: DBVT_PREFIX): DBVT_PREFIX;
    get_void(): DBVT_PREFIX;	set_void(value: DBVT_PREFIX): DBVT_PREFIX;
    get_void(): DBVT_PREFIX;	set_void(value: DBVT_PREFIX): DBVT_PREFIX;
    get_void(): static;	set_void(value: static): static;
    get_void(): DBVT_PREFIX;	set_void(value: DBVT_PREFIX): DBVT_PREFIX;
    get_void(): DBVT_PREFIX;	set_void(value: DBVT_PREFIX): DBVT_PREFIX;
    get_void(): static;	set_void(value: static): static;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    clear(): void;
    clone(dest: btDbvt, iclone: IClone): void;
    empty(): boolean;
    insert(box: btDbvtVolume, data: void): btDbvtNode;
    optimizeBottomUp(): void;
    optimizeTopDown(bu_treshold: number): void;
    optimizeIncremental(passes: number): void;
    remove(leaf: btDbvtNode): void;
    update(leaf: btDbvtNode, volume: btDbvtVolume, margin: number): boolean;
    update(leaf: btDbvtNode, lookahead: number): void;
    update(leaf: btDbvtNode, volume: btDbvtVolume, velocity: btVector3, margin: number): boolean;
    update(leaf: btDbvtNode, volume: btDbvtVolume, velocity: btVector3): boolean;
    update(leaf: btDbvtNode, volume: btDbvtVolume): void;
    write(iwriter: IWriter): void;
  }
}
