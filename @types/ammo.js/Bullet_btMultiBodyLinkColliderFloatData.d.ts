declare module Ammo {
  declare class Bullet_btMultiBodyLinkColliderFloatData {
    get_m_colObjData(): btCollisionObjectFloatData;	set_m_colObjData(value: btCollisionObjectFloatData): btCollisionObjectFloatData;
    get_m_multiBody(): btMultiBodyFloatData;	set_m_multiBody(value: btMultiBodyFloatData): btMultiBodyFloatData;
    get_m_link(): number;	set_m_link(value: number): number;
    get_m_padding(): string;	set_m_padding(value: string): string;
  }
}
