declare module Ammo {
  declare class btSoftColliders_CollideSDF_RS {
    Process(leaf: btDbvtNode): void;
    DoNode(n: btSoftBody_Node): void;
    get_psb(): btSoftBody;	set_psb(value: btSoftBody): btSoftBody;
    get_m_colObj1Wrap(): btCollisionObjectWrapper;	set_m_colObj1Wrap(value: btCollisionObjectWrapper): btCollisionObjectWrapper;
    get_m_rigidBody(): btRigidBody;	set_m_rigidBody(value: btRigidBody): btRigidBody;
    get_dynmargin(): number;	set_dynmargin(value: number): number;
    get_stamargin(): number;	set_stamargin(value: number): number;
  }
}
