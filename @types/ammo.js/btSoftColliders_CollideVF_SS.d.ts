declare module Ammo {
  declare class btSoftColliders_CollideVF_SS {

    get_mrg(): number;	set_mrg(value: number): number;
    get_psb(): btSoftBody;	set_psb(value: btSoftBody): btSoftBody;

    Process(lnode: btDbvtNode, lface: btDbvtNode): void;
  }
}
