declare module Ammo {
  declare class btSoftColliders_CollideCL_SS {
    Process(la: btDbvtNode, lb: btDbvtNode): void;
    ProcessSoftSoft(psa: btSoftBody, psb: btSoftBody): void;
    get_bodies(): btSoftBody;	set_bodies(value: btSoftBody): btSoftBody;
  }
}
