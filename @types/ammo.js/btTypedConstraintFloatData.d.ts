declare module Ammo {
  declare class btTypedConstraintFloatData {
    get_m_rbA(): btRigidBodyFloatData;	set_m_rbA(value: btRigidBodyFloatData): btRigidBodyFloatData;
    get_m_rbB(): btRigidBodyFloatData;	set_m_rbB(value: btRigidBodyFloatData): btRigidBodyFloatData;
    get_m_name(): string;	set_m_name(value: string): string;
    get_m_objectType(): number;	set_m_objectType(value: number): number;
    get_m_userConstraintType(): number;	set_m_userConstraintType(value: number): number;
    get_m_userConstraintId(): number;	set_m_userConstraintId(value: number): number;
    get_m_needsFeedback(): number;	set_m_needsFeedback(value: number): number;
    get_m_appliedImpulse(): number;	set_m_appliedImpulse(value: number): number;
    get_m_dbgDrawSize(): number;	set_m_dbgDrawSize(value: number): number;
    get_m_disableCollisionsBetweenLinkedBodies(): number;	set_m_disableCollisionsBetweenLinkedBodies(value: number): number;
    get_m_overrideNumSolverIterations(): number;	set_m_overrideNumSolverIterations(value: number): number;
    get_m_breakingImpulseThreshold(): number;	set_m_breakingImpulseThreshold(value: number): number;
    get_m_isEnabled(): number;	set_m_isEnabled(value: number): number;
  }
}
