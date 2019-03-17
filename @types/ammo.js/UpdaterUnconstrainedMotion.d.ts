declare module Ammo {
  declare class UpdaterUnconstrainedMotion {

    get_rigidBodies(): btRigidBody;	set_rigidBodies(value: btRigidBody): btRigidBody;
    get_timeStep(): number;	set_timeStep(value: number): number;

    forLoop(iBegin: number, iEnd: number): void;
  }
}
