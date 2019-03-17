declare module Ammo {
  declare class btWheelInfo {
    constructor(ci: btWheelInfoConstructionInfo);
    constructor();

    get_m_wheelsDampingRelaxation(): number;	set_m_wheelsDampingRelaxation(value: number): number;
    get_m_wheelsSuspensionForce(): number;	set_m_wheelsSuspensionForce(value: number): number;
    get_m_raycastInfo(): RaycastInfo;	set_m_raycastInfo(value: RaycastInfo): RaycastInfo;
    get_m_worldTransform(): btTransform;	set_m_worldTransform(value: btTransform): btTransform;
    get_m_chassisConnectionPointCS(): btVector3;	set_m_chassisConnectionPointCS(value: btVector3): btVector3;
    get_m_wheelDirectionCS(): btVector3;	set_m_wheelDirectionCS(value: btVector3): btVector3;
    get_m_wheelAxleCS(): btVector3;	set_m_wheelAxleCS(value: btVector3): btVector3;
    get_m_suspensionRestLength1(): number;	set_m_suspensionRestLength1(value: number): number;
    get_m_maxSuspensionTravelCm(): number;	set_m_maxSuspensionTravelCm(value: number): number;
    get_m_wheelsRadius(): number;	set_m_wheelsRadius(value: number): number;
    get_m_suspensionStiffness(): number;	set_m_suspensionStiffness(value: number): number;
    get_m_wheelsDampingCompression(): number;	set_m_wheelsDampingCompression(value: number): number;
    get_m_skidInfo(): number;	set_m_skidInfo(value: number): number;
    get_m_frictionSlip(): number;	set_m_frictionSlip(value: number): number;
    get_m_steering(): number;	set_m_steering(value: number): number;
    get_m_rotation(): number;	set_m_rotation(value: number): number;
    get_m_deltaRotation(): number;	set_m_deltaRotation(value: number): number;
    get_m_rollInfluence(): number;	set_m_rollInfluence(value: number): number;
    get_m_maxSuspensionForce(): number;	set_m_maxSuspensionForce(value: number): number;
    get_m_engineForce(): number;	set_m_engineForce(value: number): number;
    get_m_brake(): number;	set_m_brake(value: number): number;
    get_m_bIsFrontWheel(): boolean;	set_m_bIsFrontWheel(value: boolean): boolean;
    get_m_clientInfo(): void;	set_m_clientInfo(value: void): void;
    get_m_clippedInvContactDotSuspension(): number;	set_m_clippedInvContactDotSuspension(value: number): number;
    get_m_suspensionRelativeVelocity(): number;	set_m_suspensionRelativeVelocity(value: number): number;

    getSuspensionRestLength(): number;
    updateWheel(chassis: btRigidBody, raycastInfo: RaycastInfo): void;
  }
}
