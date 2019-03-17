declare module Ammo {
  declare class btMultiBodySolverConstraint {
    constructor();
    constructor();

    get_m_deltaVelAindex(): number;	set_m_deltaVelAindex(value: number): number;
    get_m_jacAindex(): number;	set_m_jacAindex(value: number): number;
    get_m_deltaVelBindex(): number;	set_m_deltaVelBindex(value: number): number;
    get_m_jacBindex(): number;	set_m_jacBindex(value: number): number;
    get_m_relpos1CrossNormal(): btVector3;	set_m_relpos1CrossNormal(value: btVector3): btVector3;
    get_m_contactNormal1(): btVector3;	set_m_contactNormal1(value: btVector3): btVector3;
    get_m_relpos2CrossNormal(): btVector3;	set_m_relpos2CrossNormal(value: btVector3): btVector3;
    get_m_contactNormal2(): btVector3;	set_m_contactNormal2(value: btVector3): btVector3;
    get_m_angularComponentA(): btVector3;	set_m_angularComponentA(value: btVector3): btVector3;
    get_m_angularComponentB(): btVector3;	set_m_angularComponentB(value: btVector3): btVector3;
    get_m_appliedPushImpulse(): btSimdScalar;	set_m_appliedPushImpulse(value: btSimdScalar): btSimdScalar;
    get_m_appliedImpulse(): btSimdScalar;	set_m_appliedImpulse(value: btSimdScalar): btSimdScalar;
    get_m_friction(): number;	set_m_friction(value: number): number;
    get_m_jacDiagABInv(): number;	set_m_jacDiagABInv(value: number): number;
    get_m_rhs(): number;	set_m_rhs(value: number): number;
    get_m_orgDofIndex(): number;	set_m_orgDofIndex(value: number): number;
    get_m_lowerLimit(): number;	set_m_lowerLimit(value: number): number;
    get_m_upperLimit(): number;	set_m_upperLimit(value: number): number;
    get_m_rhsPenetration(): number;	set_m_rhsPenetration(value: number): number;
    get_m_orgConstraint(): btMultiBodyConstraint;	set_m_orgConstraint(value: btMultiBodyConstraint): btMultiBodyConstraint;
    get_m_originalContactPoint(): void;	set_m_originalContactPoint(value: void): void;
    get_m_unusedPadding4(): number;	set_m_unusedPadding4(value: number): number;
    get_m_overrideNumSolverIterations(): number;	set_m_overrideNumSolverIterations(value: number): number;
    get_m_frictionIndex(): number;	set_m_frictionIndex(value: number): number;
    get_m_solverBodyIdA(): number;	set_m_solverBodyIdA(value: number): number;
    get_m_multiBodyA(): btMultiBody;	set_m_multiBodyA(value: btMultiBody): btMultiBody;
    get_m_linkA(): number;	set_m_linkA(value: number): number;
    get_m_solverBodyIdB(): number;	set_m_solverBodyIdB(value: number): number;
    get_m_multiBodyB(): btMultiBody;	set_m_multiBodyB(value: btMultiBody): btMultiBody;
    get_m_linkB(): number;	set_m_linkB(value: number): number;
    get_m_cfm(): number;	set_m_cfm(value: number): number;
    get_n(): unio;	set_n(value: unio): unio;

  }
}
