declare module Ammo {
  declare class btSymMatrix< {
    constructor();
    constructor(n: number, init: T);

    get_dim(): number;	set_dim(value: number): number;
    get_operator(): T;	set_operator(value: T): T;
    get_operator(): T;	set_operator(value: T): T;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    index(c: number, r: number): number;
    resize(n: number, init: T): void;
  }
}
