declare module Ammo {
  declare class btSolverConstraint {
    constructor();

    get_m_solverBodyIdB(): number;	set_m_solverBodyIdB(value: number): number;
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
    get_m_relpos1CrossNormal(): btVector3;	set_m_relpos1CrossNormal(value: btVector3): btVector3;
    get_m_lowerLimit(): number;	set_m_lowerLimit(value: number): number;
    get_m_upperLimit(): number;	set_m_upperLimit(value: number): number;
    get_m_rhsPenetration(): number;	set_m_rhsPenetration(value: number): number;
    get_m_solverBodyIdA(): number;	set_m_solverBodyIdA(value: number): number;
    get_m_originalContactPoint(): void;	set_m_originalContactPoint(value: void): void;
    get_m_unusedPadding4(): number;	set_m_unusedPadding4(value: number): number;
    get_m_numRowsForNonContactConstraint(): number;	set_m_numRowsForNonContactConstraint(value: number): number;
    get_m_overrideNumSolverIterations(): number;	set_m_overrideNumSolverIterations(value: number): number;
    get_m_frictionIndex(): number;	set_m_frictionIndex(value: number): number;
    get_m_cfm(): number;	set_m_cfm(value: number): number;
    get_n(): unio;	set_n(value: unio): unio;

  }
}
