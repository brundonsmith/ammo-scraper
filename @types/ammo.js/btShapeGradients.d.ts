declare module Ammo {
  declare class btShapeGradients {

    get_m_vec(): btVector3;	set_m_vec(value: btVector3): btVector3;
    get_operator(): number;	set_operator(value: number): number;

    bottomRowsMul(row: number, val: number): void;
    topRowsDivide(row: number, denom: number): void;
  }
}
