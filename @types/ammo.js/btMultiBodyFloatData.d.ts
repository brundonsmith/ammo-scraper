declare module Ammo {
  declare class btMultiBodyFloatData {

    get_m_baseWorldPosition(): btVector3FloatData;	set_m_baseWorldPosition(value: btVector3FloatData): btVector3FloatData;
    get_m_baseWorldOrientation(): btQuaternionFloatData;	set_m_baseWorldOrientation(value: btQuaternionFloatData): btQuaternionFloatData;
    get_m_baseLinearVelocity(): btVector3FloatData;	set_m_baseLinearVelocity(value: btVector3FloatData): btVector3FloatData;
    get_m_baseAngularVelocity(): btVector3FloatData;	set_m_baseAngularVelocity(value: btVector3FloatData): btVector3FloatData;
    get_m_baseInertia(): btVector3FloatData;	set_m_baseInertia(value: btVector3FloatData): btVector3FloatData;
    get_m_baseMass(): number;	set_m_baseMass(value: number): number;
    get_m_numLinks(): number;	set_m_numLinks(value: number): number;
    get_m_baseName(): string;	set_m_baseName(value: string): string;
    get_m_links(): btMultiBodyLinkFloatData;	set_m_links(value: btMultiBodyLinkFloatData): btMultiBodyLinkFloatData;
    get_m_baseCollider(): btCollisionObjectFloatData;	set_m_baseCollider(value: btCollisionObjectFloatData): btCollisionObjectFloatData;

  }
}
