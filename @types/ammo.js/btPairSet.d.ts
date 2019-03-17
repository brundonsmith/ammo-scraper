declare module Ammo {
  declare class btPairSet {
    constructor();


    push_pair(index1: number, index2: number): void;
    push_pair_inv(index1: number, index2: number): void;
  }
}
