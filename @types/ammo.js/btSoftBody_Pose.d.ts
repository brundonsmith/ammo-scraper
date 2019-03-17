declare module Ammo {
  declare class btSoftBody_Pose {

    get_m_bvolume(): boolean;	set_m_bvolume(value: boolean): boolean;
    get_m_bframe(): boolean;	set_m_bframe(value: boolean): boolean;
    get_m_volume(): number;	set_m_volume(value: number): number;
    get_m_pos(): tVector3Array;	set_m_pos(value: tVector3Array): tVector3Array;
    get_m_wgh(): tScalarArray;	set_m_wgh(value: tScalarArray): tScalarArray;
    get_m_com(): btVector3;	set_m_com(value: btVector3): btVector3;
    get_m_rot(): btMatrix3x3;	set_m_rot(value: btMatrix3x3): btMatrix3x3;
    get_m_scl(): btMatrix3x3;	set_m_scl(value: btMatrix3x3): btMatrix3x3;
    get_m_aqq(): btMatrix3x3;	set_m_aqq(value: btMatrix3x3): btMatrix3x3;

  }
}
