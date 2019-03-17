declare module Ammo {
  declare class gjkepa2_impl_EPA {
    constructor();
    Initialize(): void;
    Evaluate(gjk: GJK, guess: btVector3): eStatus__;
    getedgedist(face: sFace, a: sSV, b: sSV, dist: number): boolean;
    newface(a: sSV, b: sSV, c: sSV, forced: boolean): sFace;
    findbest(): sFace;
    expand(pass: U, w: sSV, f: sFace, e: U, horizon: sHorizon): boolean;
    get_void(): static;	set_void(value: static): static;
    get_void(): static;	set_void(value: static): static;
    get_void(): static;	set_void(value: static): static;
    get_m_status(): eStatus__;	set_m_status(value: eStatus__): eStatus__;
    get_m_result(): GJK_sSimplex;	set_m_result(value: GJK_sSimplex): GJK_sSimplex;
    get_m_normal(): btVector3;	set_m_normal(value: btVector3): btVector3;
    get_m_depth(): number;	set_m_depth(value: number): number;
    get_m_sv_store(): sSV;	set_m_sv_store(value: sSV): sSV;
    get_m_fc_store(): sFace;	set_m_fc_store(value: sFace): sFace;
    get_m_nextsv(): U;	set_m_nextsv(value: U): U;
    get_m_hull(): sList;	set_m_hull(value: sList): sList;
    get_m_stock(): sList;	set_m_stock(value: sList): sList;
  }
}
