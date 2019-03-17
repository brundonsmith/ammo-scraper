declare module Ammo {
  declare class UpdaterUnconstrainedMotion {
    forLoop(iBegin: number, iEnd: number): void;
    get_timeStep(): number;	set_timeStep(value: number): number;
    get_rigidBodies(): btRigidBody;	set_rigidBodies(value: btRigidBody): btRigidBody;
  }
}
