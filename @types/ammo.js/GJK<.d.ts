declare module Ammo {
  declare class GJK< {
    constructor(a: btConvexTemplate, b: btConvexTemplate);
    Initialize(): void;
    Evaluate(f: MinkowskiDif, guess: btVector3): eGjkStatus;
    EncloseOrigin(): boolean;
    getsupport(d: btVector3, sv: sSV): void;
    removevertice(simplex: sSimplex): void;
    appendvertice(simplex: sSimplex, v: btVector3): void;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_f(): MinkowskiDif;	set_f(value: MinkowskiDif): MinkowskiDif;
    get_m_ray(): btVector3;	set_m_ray(value: btVector3): btVector3;
    get_m_distance(): number;	set_m_distance(value: number): number;
    get_m_simplices(): sSimplex;	set_m_simplices(value: sSimplex): sSimplex;
    get_m_store(): sSV;	set_m_store(value: sSV): sSV;
    get_m_free(): sSV;	set_m_free(value: sSV): sSV;
    get_m_nfree(): U;	set_m_nfree(value: U): U;
    get_m_current(): U;	set_m_current(value: U): U;
    get_m_simplex(): sSimplex;	set_m_simplex(value: sSimplex): sSimplex;
    get_m_status(): eGjkStatus;	set_m_status(value: eGjkStatus): eGjkStatus;
  }
}
