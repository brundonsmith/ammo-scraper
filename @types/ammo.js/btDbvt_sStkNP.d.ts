declare module Ammo {
  declare class btDbvt_sStkNP {
    constructor(n: btDbvtNode, m: unsigned);

    get_mask(): number;	set_mask(value: number): number;
    get_node(): btDbvtNode;	set_node(value: btDbvtNode): btDbvtNode;

  }
}
