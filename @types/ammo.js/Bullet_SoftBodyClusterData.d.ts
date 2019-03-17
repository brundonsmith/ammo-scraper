declare module Ammo {
  declare class Bullet_SoftBodyClusterData {

    get_m_numMasses(): number;	set_m_numMasses(value: number): number;
    get_m_framexform(): btTransformFloatData;	set_m_framexform(value: btTransformFloatData): btTransformFloatData;
    get_m_invwi(): btMatrix3x3FloatData;	set_m_invwi(value: btMatrix3x3FloatData): btMatrix3x3FloatData;
    get_m_com(): btVector3FloatData;	set_m_com(value: btVector3FloatData): btVector3FloatData;
    get_m_vimpulses(): btVector3FloatData;	set_m_vimpulses(value: btVector3FloatData): btVector3FloatData;
    get_m_dimpulses(): btVector3FloatData;	set_m_dimpulses(value: btVector3FloatData): btVector3FloatData;
    get_m_lv(): btVector3FloatData;	set_m_lv(value: btVector3FloatData): btVector3FloatData;
    get_m_av(): btVector3FloatData;	set_m_av(value: btVector3FloatData): btVector3FloatData;
    get_m_framerefs(): btVector3FloatData;	set_m_framerefs(value: btVector3FloatData): btVector3FloatData;
    get_m_nodeIndices(): number;	set_m_nodeIndices(value: number): number;
    get_m_masses(): number;	set_m_masses(value: number): number;
    get_m_numFrameRefs(): number;	set_m_numFrameRefs(value: number): number;
    get_m_numNodes(): number;	set_m_numNodes(value: number): number;
    get_m_locii(): btMatrix3x3FloatData;	set_m_locii(value: btMatrix3x3FloatData): btMatrix3x3FloatData;
    get_m_idmass(): number;	set_m_idmass(value: number): number;
    get_m_imass(): number;	set_m_imass(value: number): number;
    get_m_nvimpulses(): number;	set_m_nvimpulses(value: number): number;
    get_m_ndimpulses(): number;	set_m_ndimpulses(value: number): number;
    get_m_ndamping(): number;	set_m_ndamping(value: number): number;
    get_m_ldamping(): number;	set_m_ldamping(value: number): number;
    get_m_adamping(): number;	set_m_adamping(value: number): number;
    get_m_matching(): number;	set_m_matching(value: number): number;
    get_m_maxSelfCollisionImpulse(): number;	set_m_maxSelfCollisionImpulse(value: number): number;
    get_m_selfCollisionImpulseFactor(): number;	set_m_selfCollisionImpulseFactor(value: number): number;
    get_m_containsAnchor(): number;	set_m_containsAnchor(value: number): number;
    get_m_collide(): number;	set_m_collide(value: number): number;
    get_m_clusterIndex(): number;	set_m_clusterIndex(value: number): number;

  }
}
