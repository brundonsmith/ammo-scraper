declare module Ammo {
  declare class btSoftBody_Cluster {
    constructor();

    get_m_clusterIndex(): number;	set_m_clusterIndex(value: number): number;
    get_m_collide(): boolean;	set_m_collide(value: boolean): boolean;
    get_m_framerefs(): tVector3Array;	set_m_framerefs(value: tVector3Array): tVector3Array;
    get_m_framexform(): btTransform;	set_m_framexform(value: btTransform): btTransform;
    get_m_idmass(): number;	set_m_idmass(value: number): number;
    get_m_imass(): number;	set_m_imass(value: number): number;
    get_m_locii(): btMatrix3x3;	set_m_locii(value: btMatrix3x3): btMatrix3x3;
    get_m_invwi(): btMatrix3x3;	set_m_invwi(value: btMatrix3x3): btMatrix3x3;
    get_m_com(): btVector3;	set_m_com(value: btVector3): btVector3;
    get_m_vimpulses(): btVector3;	set_m_vimpulses(value: btVector3): btVector3;
    get_m_dimpulses(): btVector3;	set_m_dimpulses(value: btVector3): btVector3;
    get_m_nvimpulses(): number;	set_m_nvimpulses(value: number): number;
    get_m_masses(): tScalarArray;	set_m_masses(value: tScalarArray): tScalarArray;
    get_m_lv(): btVector3;	set_m_lv(value: btVector3): btVector3;
    get_m_av(): btVector3;	set_m_av(value: btVector3): btVector3;
    get_m_leaf(): btDbvtNode;	set_m_leaf(value: btDbvtNode): btDbvtNode;
    get_m_ndamping(): number;	set_m_ndamping(value: number): number;
    get_m_ldamping(): number;	set_m_ldamping(value: number): number;
    get_m_adamping(): number;	set_m_adamping(value: number): number;
    get_m_matching(): number;	set_m_matching(value: number): number;
    get_m_maxSelfCollisionImpulse(): number;	set_m_maxSelfCollisionImpulse(value: number): number;
    get_m_selfCollisionImpulseFactor(): number;	set_m_selfCollisionImpulseFactor(value: number): number;
    get_m_containsAnchor(): boolean;	set_m_containsAnchor(value: boolean): boolean;
    get_m_ndimpulses(): number;	set_m_ndimpulses(value: number): number;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

  }
}
