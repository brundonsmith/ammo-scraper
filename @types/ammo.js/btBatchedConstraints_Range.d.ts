declare module Ammo {
  declare class btBatchedConstraints_Range {
    constructor();
    constructor(_beg: number, _end: number);
    get_begin(): number;	set_begin(value: number): number;
    get_end(): number;	set_end(value: number): number;
  }
}
