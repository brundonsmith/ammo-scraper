declare module Ammo {
  declare class btSparseSdf< {
    Initialize(hashsize: number, clampCells: number): void;
    Reset(): void;
    GarbageCollect(lifetime: number): void;
    RemoveReferences(pcs: btCollisionShape): number;
    Evaluate(x: btVector3, shape: btCollisionShape, normal: btVector3, margin: number): number;
    BuildCell(c: Cell): void;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_IntFrac(): static;	set_IntFrac(value: static): static;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_unsigned(): static;	set_unsigned(value: static): static;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_voxelsz(): number;	set_voxelsz(value: number): number;
    get_puid(): number;	set_puid(value: number): number;
    get_ncells(): number;	set_ncells(value: number): number;
    get_m_clampCells(): number;	set_m_clampCells(value: number): number;
    get_nprobes(): number;	set_nprobes(value: number): number;
    get_nqueries(): number;	set_nqueries(value: number): number;
  }
}
