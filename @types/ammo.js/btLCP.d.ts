declare module Ammo {
  declare class btLCP {
    constructor(_n: number, _nskip: number, _nub: number, _Adata: number, _x: number, _b: number, _w: number, _lo: number, _hi: number, l: number, _d: number, _Dell: number, _ell: number, _tmp: number, _state: boolean, _findex: number, p: number, c: number, Arows: number);

    get_const(): number;	set_const(value: number): number;
    get_const(): number;	set_const(value: number): number;
    get_const(): number;	set_const(value: number): number;
    get_const(): boolean;	set_const(value: boolean): boolean;
    get_const(): number;	set_const(value: number): number;
    get_const(): number;	set_const(value: number): number;
    get_const(): number;	set_const(value: number): number;
    get_const(): number;	set_const(value: number): number;
    get_const(): number;	set_const(value: number): number;
    get_const(): number;	set_const(value: number): number;
    get_const(): number;	set_const(value: number): number;
    get_const(): number;	set_const(value: number): number;
    get_const(): number;	set_const(value: number): number;
    get_const(): number;	set_const(value: number): number;
    get_const(): BTATYPE;	set_const(value: BTATYPE): BTATYPE;
    get_m_n(): number;	set_m_n(value: number): number;
    get_m_nskip(): number;	set_m_nskip(value: number): number;
    get_m_nub(): number;	set_m_nub(value: number): number;
    get_m_nC(): number;	set_m_nC(value: number): number;
    get_m_nN(): number;	set_m_nN(value: number): number;

    Aii(i: number): number;
    AiC_times_qC(i: number, q: number): number;
    AiN_times_qN(i: number, q: number): number;
    getNub(): number;
    indexC(i: number): number;
    indexN(i: number): number;
    numC(): number;
    numN(): number;
    pC_plusequals_s_times_qC(p: number, s: number, q: number): void;
    pN_equals_ANC_times_qC(p: number, q: number): void;
    pN_plusequals_ANi(p: number, i: number, sign: number): void;
    pN_plusequals_s_times_qN(p: number, s: number, q: number): void;
    solve1(a: number, i: number, dir: number, only_transfer: number): void;
    transfer_i_from_C_to_N(i: number, y: btAlignedObjectArra): void;
    transfer_i_from_N_to_C(i: number): void;
    transfer_i_to_N(i: number): void;
    transfer_i_to_C(i: number): void;
    unpermute(): void;
  }
}
