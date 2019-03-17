declare module Ammo {
  declare class btInfMaskConverter {
    constructor(_mask: number);

    get_intmask(): number;	set_intmask(value: number): number;
    get_mask(): number;	set_mask(value: number): number;
    get_n(): unio;	set_n(value: unio): unio;

  }
}
