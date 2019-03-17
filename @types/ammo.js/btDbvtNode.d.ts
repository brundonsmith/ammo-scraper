declare module Ammo {
  declare class btDbvtNode {

    get_bool(): DBVT_INLINE;	set_bool(value: DBVT_INLINE): DBVT_INLINE;
    get_bool(): DBVT_INLINE;	set_bool(value: DBVT_INLINE): DBVT_INLINE;
    get_childs(): btDbvtNode;	set_childs(value: btDbvtNode): btDbvtNode;
    get_data(): void;	set_data(value: void): void;
    get_dataAsInt(): number;	set_dataAsInt(value: number): number;
    get_n(): unio;	set_n(value: unio): unio;
    get_parent(): btDbvtNode;	set_parent(value: btDbvtNode): btDbvtNode;
    get_volume(): btDbvtVolume;	set_volume(value: btDbvtVolume): btDbvtVolume;

  }
}
