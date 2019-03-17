declare module Ammo {
  declare class btSoftColliders_CollideVF_SS {
    Process(lnode: btDbvtNode, lface: btDbvtNode): void;
    get_psb(): btSoftBody;	set_psb(value: btSoftBody): btSoftBody;
    get_mrg(): number;	set_mrg(value: number): number;
  }
}
