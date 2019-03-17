declare module Ammo {
  declare class btJointFeedback {
    constructor();
    get_m_appliedForceBodyA(): btVector3;	set_m_appliedForceBodyA(value: btVector3): btVector3;
    get_m_appliedTorqueBodyA(): btVector3;	set_m_appliedTorqueBodyA(value: btVector3): btVector3;
    get_m_appliedForceBodyB(): btVector3;	set_m_appliedForceBodyB(value: btVector3): btVector3;
    get_m_appliedTorqueBodyB(): btVector3;	set_m_appliedTorqueBodyB(value: btVector3): btVector3;
  }
}
