declare module Ammo {
  declare class btBroadphaseRayCallback {
    get_m_rayDirectionInverse(): btVector3;	set_m_rayDirectionInverse(value: btVector3): btVector3;
    get_m_signs(): number;	set_m_signs(value: number): number;
    get_m_lambda_max(): number;	set_m_lambda_max(value: number): number;
  }
}
