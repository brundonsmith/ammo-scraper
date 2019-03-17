declare module Ammo {
  declare class btBatchInfo {
    constructor();

    get_mergeIndex(): number;	set_mergeIndex(value: number): number;
    get_numConstraints(): number;	set_numConstraints(value: number): number;

  }
}
