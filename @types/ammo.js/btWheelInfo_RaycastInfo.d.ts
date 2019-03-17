declare module Ammo {
  declare class btWheelInfo_RaycastInfo {

    get_m_contactNormalWS(): btVector3;	set_m_contactNormalWS(value: btVector3): btVector3;
    get_m_contactPointWS(): btVector3;	set_m_contactPointWS(value: btVector3): btVector3;
    get_m_suspensionLength(): number;	set_m_suspensionLength(value: number): number;
    get_m_hardPointWS(): btVector3;	set_m_hardPointWS(value: btVector3): btVector3;
    get_m_wheelDirectionWS(): btVector3;	set_m_wheelDirectionWS(value: btVector3): btVector3;
    get_m_wheelAxleWS(): btVector3;	set_m_wheelAxleWS(value: btVector3): btVector3;
    get_m_isInContact(): boolean;	set_m_isInContact(value: boolean): boolean;
    get_m_groundObject(): void;	set_m_groundObject(value: void): void;

  }
}
