declare module Ammo {
  declare class btDynamicsWorldFloatData {
    get_m_solverInfo(): btContactSolverInfoFloatData;	set_m_solverInfo(value: btContactSolverInfoFloatData): btContactSolverInfoFloatData;
    get_m_gravity(): btVector3FloatData;	set_m_gravity(value: btVector3FloatData): btVector3FloatData;
  }
}
