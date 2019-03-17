declare module Ammo {
  declare class btJointNode {

    get_constraintRowIndex(): number;	set_constraintRowIndex(value: number): number;
    get_jointIndex(): number;	set_jointIndex(value: number): number;
    get_nextJointNodeIndex(): number;	set_nextJointNodeIndex(value: number): number;
    get_otherBodyIndex(): number;	set_otherBodyIndex(value: number): number;

  }
}
