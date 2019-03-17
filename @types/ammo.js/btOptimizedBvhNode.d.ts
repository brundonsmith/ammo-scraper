declare module Ammo {
  declare class btOptimizedBvhNode {
    constructor();

    get_m_aabbMinOrg(): btVector3;	set_m_aabbMinOrg(value: btVector3): btVector3;
    get_m_aabbMaxOrg(): btVector3;	set_m_aabbMaxOrg(value: btVector3): btVector3;
    get_m_escapeIndex(): number;	set_m_escapeIndex(value: number): number;
    get_m_subPart(): number;	set_m_subPart(value: number): number;
    get_m_triangleIndex(): number;	set_m_triangleIndex(value: number): number;
    get_m_padding(): string;	set_m_padding(value: string): string;

  }
}
