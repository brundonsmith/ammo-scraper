declare module Ammo {
  declare class Bullet_SoftBodyPoseData {
    get_m_rot(): btMatrix3x3FloatData;	set_m_rot(value: btMatrix3x3FloatData): btMatrix3x3FloatData;
    get_m_scale(): btMatrix3x3FloatData;	set_m_scale(value: btMatrix3x3FloatData): btMatrix3x3FloatData;
    get_m_aqq(): btMatrix3x3FloatData;	set_m_aqq(value: btMatrix3x3FloatData): btMatrix3x3FloatData;
    get_m_com(): btVector3FloatData;	set_m_com(value: btVector3FloatData): btVector3FloatData;
    get_m_positions(): btVector3FloatData;	set_m_positions(value: btVector3FloatData): btVector3FloatData;
    get_m_weights(): number;	set_m_weights(value: number): number;
    get_m_numPositions(): number;	set_m_numPositions(value: number): number;
    get_m_numWeigts(): number;	set_m_numWeigts(value: number): number;
    get_m_bvolume(): number;	set_m_bvolume(value: number): number;
    get_m_bframe(): number;	set_m_bframe(value: number): number;
    get_m_restVolume(): number;	set_m_restVolume(value: number): number;
    get_m_pad(): number;	set_m_pad(value: number): number;
  }
}
