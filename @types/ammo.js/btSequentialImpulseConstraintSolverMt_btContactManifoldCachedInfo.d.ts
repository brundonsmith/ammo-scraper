declare module Ammo {
  declare class btSequentialImpulseConstraintSolverMt_btContactManifoldCachedInfo {
    get_numTouchingContacts(): number;	set_numTouchingContacts(value: number): number;
    get_solverBodyIds(): number;	set_solverBodyIds(value: number): number;
    get_contactIndex(): number;	set_contactIndex(value: number): number;
    get_rollingFrictionIndex(): number;	set_rollingFrictionIndex(value: number): number;
    get_contactHasRollingFriction(): boolean;	set_contactHasRollingFriction(value: boolean): boolean;
    get_contactPoints(): btManifoldPoint;	set_contactPoints(value: btManifoldPoint): btManifoldPoint;
    get_const(): static;	set_const(value: static): static;
  }
}
