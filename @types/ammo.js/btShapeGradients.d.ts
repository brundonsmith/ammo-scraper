declare module Ammo {
  declare class btShapeGradients {
    topRowsDivide(row: number, denom: number): void;
    bottomRowsMul(row: number, val: number): void;
    get_operator(): number;	set_operator(value: number): number;
    get_m_vec(): btVector3;	set_m_vec(value: btVector3): btVector3;
  }
}
