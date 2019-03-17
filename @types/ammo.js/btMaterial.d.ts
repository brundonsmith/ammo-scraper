declare module Ammo {
  declare class btMaterial {
    constructor();
    constructor(fric: number, rest: number);
    get_m_friction(): number;	set_m_friction(value: number): number;
    get_m_restitution(): number;	set_m_restitution(value: number): number;
    get_pad(): number;	set_pad(value: number): number;
  }
}
