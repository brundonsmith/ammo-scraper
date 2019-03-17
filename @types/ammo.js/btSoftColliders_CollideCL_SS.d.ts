declare module Ammo {
  declare class btSoftColliders_CollideCL_SS {

    get_bodies(): btSoftBody;	set_bodies(value: btSoftBody): btSoftBody;

    Process(la: btDbvtNode, lb: btDbvtNode): void;
    ProcessSoftSoft(psa: btSoftBody, psb: btSoftBody): void;
  }
}
