declare module Ammo {
  declare class btClock {
    constructor();
    constructor(other: btClock);

    get_long(): number;	set_long(value: number): number;
    get_long(): number;	set_long(value: number): number;
    get_long(): number;	set_long(value: number): number;
    get_operator(): btClock;	set_operator(value: btClock): btClock;

    getTimeSeconds(): number;
    reset(): void;
  }
}
