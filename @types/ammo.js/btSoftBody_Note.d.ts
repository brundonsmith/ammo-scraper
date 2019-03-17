declare module Ammo {
  declare class btSoftBody_Note {
    get_m_text(): string;	set_m_text(value: string): string;
    get_m_offset(): btVector3;	set_m_offset(value: btVector3): btVector3;
    get_m_rank(): number;	set_m_rank(value: number): number;
    get_m_nodes(): Node;	set_m_nodes(value: Node): Node;
    get_m_coords(): number;	set_m_coords(value: number): number;
  }
}
