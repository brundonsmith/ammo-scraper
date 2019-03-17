declare module Ammo {
  declare class btWheelInfoConstructionInfo {
    get_m_chassisConnectionCS(): btVector3;	set_m_chassisConnectionCS(value: btVector3): btVector3;
    get_m_wheelDirectionCS(): btVector3;	set_m_wheelDirectionCS(value: btVector3): btVector3;
    get_m_wheelAxleCS(): btVector3;	set_m_wheelAxleCS(value: btVector3): btVector3;
    get_m_suspensionRestLength(): number;	set_m_suspensionRestLength(value: number): number;
    get_m_maxSuspensionTravelCm(): number;	set_m_maxSuspensionTravelCm(value: number): number;
    get_m_wheelRadius(): number;	set_m_wheelRadius(value: number): number;
    get_m_suspensionStiffness(): number;	set_m_suspensionStiffness(value: number): number;
    get_m_wheelsDampingCompression(): number;	set_m_wheelsDampingCompression(value: number): number;
    get_m_wheelsDampingRelaxation(): number;	set_m_wheelsDampingRelaxation(value: number): number;
    get_m_frictionSlip(): number;	set_m_frictionSlip(value: number): number;
    get_m_maxSuspensionForce(): number;	set_m_maxSuspensionForce(value: number): number;
    get_m_bIsFrontWheel(): boolean;	set_m_bIsFrontWheel(value: boolean): boolean;
  }
}
