declare module Ammo {
  declare class btSoftColliders_CollideCL_RS {

    get_m_colObjWrap(): btCollisionObjectWrapper;	set_m_colObjWrap(value: btCollisionObjectWrapper): btCollisionObjectWrapper;
    get_psb(): btSoftBody;	set_psb(value: btSoftBody): btSoftBody;

    Process(leaf: btDbvtNode): void;
    ProcessColObj(ps: btSoftBody, colObWrap: btCollisionObjectWrapper): void;
  }
}
