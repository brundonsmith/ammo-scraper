declare module Ammo {
  declare class btSoftColliders_CollideSDF_RS {

    get_dynmargin(): number;	set_dynmargin(value: number): number;
    get_m_colObj1Wrap(): btCollisionObjectWrapper;	set_m_colObj1Wrap(value: btCollisionObjectWrapper): btCollisionObjectWrapper;
    get_m_rigidBody(): btRigidBody;	set_m_rigidBody(value: btRigidBody): btRigidBody;
    get_psb(): btSoftBody;	set_psb(value: btSoftBody): btSoftBody;
    get_stamargin(): number;	set_stamargin(value: number): number;

    DoNode(n: btSoftBody_Node): void;
    Process(leaf: btDbvtNode): void;
  }
}
