declare module Ammo {
  declare class btDbvtProxy {
    constructor(aabbMin: btVector3, aabbMax: btVector3, userPtr: void, collisionFilterGroup: number, collisionFilterMask: number);

    get_leaf(): btDbvtNode;	set_leaf(value: btDbvtNode): btDbvtNode;
    get_links(): btDbvtProxy;	set_links(value: btDbvtProxy): btDbvtProxy;
    get_stage(): number;	set_stage(value: number): number;

  }
}
