declare module Ammo {
  declare class btDbvt_sStkCLN {
    constructor(n: btDbvtNode, p: btDbvtNode);

    get_node(): btDbvtNode;	set_node(value: btDbvtNode): btDbvtNode;
    get_parent(): btDbvtNode;	set_parent(value: btDbvtNode): btDbvtNode;

  }
}
