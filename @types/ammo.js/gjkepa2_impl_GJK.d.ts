declare module Ammo {
  declare class gjkepa2_impl_GJK {
    constructor();
    Initialize(): void;
    Evaluate(shapearg: tShape, guess: btVector3): eStatus__;
    EncloseOrigin(): boolean;
    getsupport(d: btVector3, sv: sSV): void;
    removevertice(simplex: sSimplex): void;
    appendvertice(simplex: sSimplex, v: btVector3): void;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_m_shape(): tShape;	set_m_shape(value: tShape): tShape;
    get_m_ray(): btVector3;	set_m_ray(value: btVector3): btVector3;
    get_m_distance(): number;	set_m_distance(value: number): number;
    get_m_simplices(): sSimplex;	set_m_simplices(value: sSimplex): sSimplex;
    get_m_store(): sSV;	set_m_store(value: sSV): sSV;
    get_m_free(): sSV;	set_m_free(value: sSV): sSV;
    get_m_nfree(): U;	set_m_nfree(value: U): U;
    get_m_current(): U;	set_m_current(value: U): U;
    get_m_simplex(): sSimplex;	set_m_simplex(value: sSimplex): sSimplex;
    get_m_status(): eStatus__;	set_m_status(value: eStatus__): eStatus__;
  }
}
