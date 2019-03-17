declare module Ammo {
  declare class btSoftBodyJointData {

    get_m_delete(): number;	set_m_delete(value: number): number;
    get_m_bodyA(): void;	set_m_bodyA(value: void): void;
    get_m_refs(): btVector3FloatData;	set_m_refs(value: btVector3FloatData): btVector3FloatData;
    get_m_cfm(): number;	set_m_cfm(value: number): number;
    get_m_erp(): number;	set_m_erp(value: number): number;
    get_m_split(): number;	set_m_split(value: number): number;
    get_m_bodyB(): void;	set_m_bodyB(value: void): void;
    get_m_relPosition(): btVector3FloatData;	set_m_relPosition(value: btVector3FloatData): btVector3FloatData;
    get_m_bodyAtype(): number;	set_m_bodyAtype(value: number): number;
    get_m_bodyBtype(): number;	set_m_bodyBtype(value: number): number;
    get_m_jointType(): number;	set_m_jointType(value: number): number;
    get_m_pad(): number;	set_m_pad(value: number): number;

  }
}
