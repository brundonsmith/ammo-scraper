declare module Ammo {
  declare class Bullet_SoftBodyConfigData {
    get_m_aeroModel(): number;	set_m_aeroModel(value: number): number;
    get_m_baumgarte(): number;	set_m_baumgarte(value: number): number;
    get_m_damping(): number;	set_m_damping(value: number): number;
    get_m_drag(): number;	set_m_drag(value: number): number;
    get_m_lift(): number;	set_m_lift(value: number): number;
    get_m_pressure(): number;	set_m_pressure(value: number): number;
    get_m_volume(): number;	set_m_volume(value: number): number;
    get_m_dynamicFriction(): number;	set_m_dynamicFriction(value: number): number;
    get_m_poseMatch(): number;	set_m_poseMatch(value: number): number;
    get_m_rigidContactHardness(): number;	set_m_rigidContactHardness(value: number): number;
    get_m_kineticContactHardness(): number;	set_m_kineticContactHardness(value: number): number;
    get_m_softContactHardness(): number;	set_m_softContactHardness(value: number): number;
    get_m_anchorHardness(): number;	set_m_anchorHardness(value: number): number;
    get_m_softRigidClusterHardness(): number;	set_m_softRigidClusterHardness(value: number): number;
    get_m_softKineticClusterHardness(): number;	set_m_softKineticClusterHardness(value: number): number;
    get_m_softSoftClusterHardness(): number;	set_m_softSoftClusterHardness(value: number): number;
    get_m_softRigidClusterImpulseSplit(): number;	set_m_softRigidClusterImpulseSplit(value: number): number;
    get_m_softKineticClusterImpulseSplit(): number;	set_m_softKineticClusterImpulseSplit(value: number): number;
    get_m_softSoftClusterImpulseSplit(): number;	set_m_softSoftClusterImpulseSplit(value: number): number;
    get_m_maxVolume(): number;	set_m_maxVolume(value: number): number;
    get_m_timeScale(): number;	set_m_timeScale(value: number): number;
    get_m_velocityIterations(): number;	set_m_velocityIterations(value: number): number;
    get_m_positionIterations(): number;	set_m_positionIterations(value: number): number;
    get_m_driftIterations(): number;	set_m_driftIterations(value: number): number;
    get_m_clusterIterations(): number;	set_m_clusterIterations(value: number): number;
    get_m_collisionFlags(): number;	set_m_collisionFlags(value: number): number;
  }
}
