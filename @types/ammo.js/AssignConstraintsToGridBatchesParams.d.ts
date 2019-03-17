declare module Ammo {
  declare class AssignConstraintsToGridBatchesParams {
    constructor();
    get_bodyDynamicFlags(): boolean;	set_bodyDynamicFlags(value: boolean): boolean;
    get_bodyGridCoords(): btIntVec3;	set_bodyGridCoords(value: btIntVec3): btIntVec3;
    get_numBodies(): number;	set_numBodies(value: number): number;
    get_conInfos(): btBatchedConstraintInfo;	set_conInfos(value: btBatchedConstraintInfo): btBatchedConstraintInfo;
    get_constraintBatchIds(): number;	set_constraintBatchIds(value: number): number;
    get_gridChunkDim(): btIntVec3;	set_gridChunkDim(value: btIntVec3): btIntVec3;
    get_maxNumBatchesPerPhase(): number;	set_maxNumBatchesPerPhase(value: number): number;
    get_numPhases(): number;	set_numPhases(value: number): number;
    get_phaseMask(): number;	set_phaseMask(value: number): number;
  }
}
