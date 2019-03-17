declare module Ammo {
  declare class btSoftBody_Joint_Specs {
    constructor();

    get_cfm(): number;	set_cfm(value: number): number;
    get_erp(): number;	set_erp(value: number): number;
    get_split(): number;	set_split(value: number): number;

  }
}
