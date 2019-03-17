declare module Ammo {
  declare class btDbvtTreeCollider {
    constructor(p: btDbvtBroadphase);
    Process(na: btDbvtNode, nb: btDbvtNode): void;
    Process(n: btDbvtNode): void;
    get_pbp(): btDbvtBroadphase;	set_pbp(value: btDbvtBroadphase): btDbvtBroadphase;
    get_proxy(): btDbvtProxy;	set_proxy(value: btDbvtProxy): btDbvtProxy;
  }
}
