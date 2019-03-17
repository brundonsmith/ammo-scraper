declare module Ammo {
  declare class btSoftBody_LJoint {

    get_m_rpos(): btVector3;	set_m_rpos(value: btVector3): btVector3;

    Prepare(dt: number, iterations: number): void;
    Solve(dt: number, sor: number): void;
    Terminate(dt: number): void;
    Type(): eType__;
  }
}
