declare module Ammo {
  declare class btSoftBody_SolverState {
    get_sdt(): number;	set_sdt(value: number): number;
    get_isdt(): number;	set_isdt(value: number): number;
    get_velmrg(): number;	set_velmrg(value: number): number;
    get_radmrg(): number;	set_radmrg(value: number): number;
    get_updmrg(): number;	set_updmrg(value: number): number;
  }
}
