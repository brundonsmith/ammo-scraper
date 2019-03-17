declare module Ammo {
  declare class btDbvt_sStkNPS {
    constructor();
    constructor(n: btDbvtNode, m: unsigned, v: number);
    get_node(): btDbvtNode;	set_node(value: btDbvtNode): btDbvtNode;
    get_mask(): number;	set_mask(value: number): number;
    get_value(): number;	set_value(value: number): number;
  }
}
