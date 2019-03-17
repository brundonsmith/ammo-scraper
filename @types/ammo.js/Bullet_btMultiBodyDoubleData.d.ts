declare module Ammo {
  declare class Bullet_btMultiBodyDoubleData {
    get_m_baseWorldPosition(): btVector3DoubleData;	set_m_baseWorldPosition(value: btVector3DoubleData): btVector3DoubleData;
    get_m_baseWorldOrientation(): btQuaternionDoubleData;	set_m_baseWorldOrientation(value: btQuaternionDoubleData): btQuaternionDoubleData;
    get_m_baseLinearVelocity(): btVector3DoubleData;	set_m_baseLinearVelocity(value: btVector3DoubleData): btVector3DoubleData;
    get_m_baseAngularVelocity(): btVector3DoubleData;	set_m_baseAngularVelocity(value: btVector3DoubleData): btVector3DoubleData;
    get_m_baseInertia(): btVector3DoubleData;	set_m_baseInertia(value: btVector3DoubleData): btVector3DoubleData;
    get_m_baseMass(): number;	set_m_baseMass(value: number): number;
    get_m_numLinks(): number;	set_m_numLinks(value: number): number;
    get_m_padding(): string;	set_m_padding(value: string): string;
    get_m_baseName(): string;	set_m_baseName(value: string): string;
    get_m_links(): btMultiBodyLinkDoubleData;	set_m_links(value: btMultiBodyLinkDoubleData): btMultiBodyLinkDoubleData;
    get_m_baseCollider(): btCollisionObjectDoubleData;	set_m_baseCollider(value: btCollisionObjectDoubleData): btCollisionObjectDoubleData;
  }
}
