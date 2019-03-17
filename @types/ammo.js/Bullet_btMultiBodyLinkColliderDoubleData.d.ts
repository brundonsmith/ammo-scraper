declare module Ammo {
  declare class Bullet_btMultiBodyLinkColliderDoubleData {
    get_m_colObjData(): btCollisionObjectDoubleData;	set_m_colObjData(value: btCollisionObjectDoubleData): btCollisionObjectDoubleData;
    get_m_multiBody(): btMultiBodyDoubleData;	set_m_multiBody(value: btMultiBodyDoubleData): btMultiBodyDoubleData;
    get_m_link(): number;	set_m_link(value: number): number;
    get_m_padding(): string;	set_m_padding(value: string): string;
  }
}
