declare module Ammo {
  declare class btIDebugDraw_DefaultColors {
    constructor();

    get_m_activeObject(): btVector3;	set_m_activeObject(value: btVector3): btVector3;
    get_m_deactivatedObject(): btVector3;	set_m_deactivatedObject(value: btVector3): btVector3;
    get_m_wantsDeactivationObject(): btVector3;	set_m_wantsDeactivationObject(value: btVector3): btVector3;
    get_m_disabledDeactivationObject(): btVector3;	set_m_disabledDeactivationObject(value: btVector3): btVector3;
    get_m_disabledSimulationObject(): btVector3;	set_m_disabledSimulationObject(value: btVector3): btVector3;
    get_m_aabb(): btVector3;	set_m_aabb(value: btVector3): btVector3;
    get_m_contactPoint(): btVector3;	set_m_contactPoint(value: btVector3): btVector3;

  }
}
