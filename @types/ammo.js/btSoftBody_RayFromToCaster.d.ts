declare module Ammo {
  declare class btSoftBody_RayFromToCaster {
    constructor(rayFrom: btVector3, rayTo: btVector3, mxt: number);
    Process(leaf: btDbvtNode): void;
    get_btScalar(): static;	set_btScalar(value: static): static;
    get_m_rayFrom(): btVector3;	set_m_rayFrom(value: btVector3): btVector3;
    get_m_rayTo(): btVector3;	set_m_rayTo(value: btVector3): btVector3;
    get_m_rayNormalizedDirection(): btVector3;	set_m_rayNormalizedDirection(value: btVector3): btVector3;
    get_m_mint(): number;	set_m_mint(value: number): number;
    get_m_face(): Face;	set_m_face(value: Face): Face;
    get_m_tests(): number;	set_m_tests(value: number): number;
  }
}
