declare module Ammo {
  declare class btDiscreteDynamicsWorldMt_UpdaterIntegrateTransforms {
    forLoop(iBegin: number, iEnd: number): void;
    get_timeStep(): number;	set_timeStep(value: number): number;
    get_rigidBodies(): btRigidBody;	set_rigidBodies(value: btRigidBody): btRigidBody;
    get_world(): btDiscreteDynamicsWorldMt;	set_world(value: btDiscreteDynamicsWorldMt): btDiscreteDynamicsWorldMt;
  }
}
