declare module Ammo {
  declare class ConvexH_HalfEdge {
    constructor();
    constructor(a: _e, _v: string, _p: string);
    get_ea(): short;	set_ea(value: short): short;
    get_v(): string;	set_v(value: string): string;
    get_p(): string;	set_p(value: string): string;
  }
}
