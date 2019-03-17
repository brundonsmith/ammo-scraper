declare module Ammo {
  declare class btSoftColliders_CollideCL_RS {
    Process(leaf: btDbvtNode): void;
    ProcessColObj(ps: btSoftBody, colObWrap: btCollisionObjectWrapper): void;
    get_psb(): btSoftBody;	set_psb(value: btSoftBody): btSoftBody;
    get_m_colObjWrap(): btCollisionObjectWrapper;	set_m_colObjWrap(value: btCollisionObjectWrapper): btCollisionObjectWrapper;
  }
}
