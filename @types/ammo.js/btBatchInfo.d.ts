declare module Ammo {
  declare class btBatchInfo {
    constructor();
    get_numConstraints(): number;	set_numConstraints(value: number): number;
    get_mergeIndex(): number;	set_mergeIndex(value: number): number;
  }
}
