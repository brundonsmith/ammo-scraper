declare module Ammo {
  declare class btSoftBody_CJoint {
    Prepare(dt: number, iterations: number): void;
    Solve(dt: number, sor: number): void;
    Terminate(dt: number): void;
    Type(): eType__;
    get_m_life(): number;	set_m_life(value: number): number;
    get_m_maxlife(): number;	set_m_maxlife(value: number): number;
    get_m_rpos(): btVector3;	set_m_rpos(value: btVector3): btVector3;
    get_m_normal(): btVector3;	set_m_normal(value: btVector3): btVector3;
    get_m_friction(): number;	set_m_friction(value: number): number;
  }
}
