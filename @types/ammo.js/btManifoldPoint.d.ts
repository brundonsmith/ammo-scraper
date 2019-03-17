declare module Ammo {
  declare class btManifoldPoint {
    constructor();
    constructor(pointA: btVector3, pointB: btVector3, normal: btVector3, distance: number);
    getDistance(): number;
    getLifeTime(): number;
    getPositionWorldOnA(): btVector3;
    getPositionWorldOnB(): btVector3;
    setDistance(dist: number): void;
    getAppliedImpulse(): number;
    get_m_localPointA(): btVector3;	set_m_localPointA(value: btVector3): btVector3;
    get_m_localPointB(): btVector3;	set_m_localPointB(value: btVector3): btVector3;
    get_m_positionWorldOnB(): btVector3;	set_m_positionWorldOnB(value: btVector3): btVector3;
    get_m_positionWorldOnA(): btVector3;	set_m_positionWorldOnA(value: btVector3): btVector3;
    get_m_normalWorldOnB(): btVector3;	set_m_normalWorldOnB(value: btVector3): btVector3;
    get_m_distance1(): number;	set_m_distance1(value: number): number;
    get_m_combinedFriction(): number;	set_m_combinedFriction(value: number): number;
    get_m_combinedRollingFriction(): number;	set_m_combinedRollingFriction(value: number): number;
    get_m_combinedSpinningFriction(): number;	set_m_combinedSpinningFriction(value: number): number;
    get_m_combinedRestitution(): number;	set_m_combinedRestitution(value: number): number;
    get_m_partId0(): number;	set_m_partId0(value: number): number;
    get_m_partId1(): number;	set_m_partId1(value: number): number;
    get_m_index0(): number;	set_m_index0(value: number): number;
    get_m_index1(): number;	set_m_index1(value: number): number;
    get_m_userPersistentData(): void;	set_m_userPersistentData(value: void): void;
    get_m_contactPointFlags(): number;	set_m_contactPointFlags(value: number): number;
    get_m_appliedImpulse(): number;	set_m_appliedImpulse(value: number): number;
    get_m_appliedImpulseLateral1(): number;	set_m_appliedImpulseLateral1(value: number): number;
    get_m_appliedImpulseLateral2(): number;	set_m_appliedImpulseLateral2(value: number): number;
    get_m_contactMotion1(): number;	set_m_contactMotion1(value: number): number;
    get_m_contactMotion2(): number;	set_m_contactMotion2(value: number): number;
    get_n(): unio;	set_n(value: unio): unio;
    get_m_contactCFM(): number;	set_m_contactCFM(value: number): number;
    get_m_combinedContactStiffness1(): number;	set_m_combinedContactStiffness1(value: number): number;
    get_n(): unio;	set_n(value: unio): unio;
    get_m_contactERP(): number;	set_m_contactERP(value: number): number;
    get_m_combinedContactDamping1(): number;	set_m_combinedContactDamping1(value: number): number;
    get_m_frictionCFM(): number;	set_m_frictionCFM(value: number): number;
    get_m_lifeTime(): number;	set_m_lifeTime(value: number): number;
    get_m_lateralFrictionDir1(): btVector3;	set_m_lateralFrictionDir1(value: btVector3): btVector3;
    get_m_lateralFrictionDir2(): btVector3;	set_m_lateralFrictionDir2(value: btVector3): btVector3;
  }
}
