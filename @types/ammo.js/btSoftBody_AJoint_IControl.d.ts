declare module Ammo {
  declare class btSoftBody_AJoint_IControl {

    get_IControl(): static;	set_IControl(value: static): static;

    Prepare(t: AJoin): void;
    Speed(t: AJoin, current: number): number;
  }
}
