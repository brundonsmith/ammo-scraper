declare module Ammo {
  declare class btRaycastVehicle_btVehicleTuning {
    constructor();
    get_m_suspensionStiffness(): number;	set_m_suspensionStiffness(value: number): number;
    get_m_suspensionCompression(): number;	set_m_suspensionCompression(value: number): number;
    get_m_suspensionDamping(): number;	set_m_suspensionDamping(value: number): number;
    get_m_maxSuspensionTravelCm(): number;	set_m_maxSuspensionTravelCm(value: number): number;
    get_m_frictionSlip(): number;	set_m_frictionSlip(value: number): number;
    get_m_maxSuspensionForce(): number;	set_m_maxSuspensionForce(value: number): number;
  }
}
