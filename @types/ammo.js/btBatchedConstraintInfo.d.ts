declare module Ammo {
  declare class btBatchedConstraintInfo {
    get_constraintIndex(): number;	set_constraintIndex(value: number): number;
    get_numConstraintRows(): number;	set_numConstraintRows(value: number): number;
    get_bodyIds(): number;	set_bodyIds(value: number): number;
  }
}
