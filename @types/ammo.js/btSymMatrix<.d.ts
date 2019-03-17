declare module Ammo {
  declare class btSymMatrix< {
    constructor();
    constructor(n: number, init: T);
    resize(n: number, init: T): void;
    index(c: number, r: number): number;
    get_operator(): T;	set_operator(value: T): T;
    get_operator(): T;	set_operator(value: T): T;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_dim(): number;	set_dim(value: number): number;
  }
}
