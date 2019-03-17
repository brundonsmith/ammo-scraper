declare module Ammo {
  declare class AssignConstraintsToGridBatchesLoop {
    constructor(params: AssignConstraintsToGridBatchesParams);

    get_m_params(): AssignConstraintsToGridBatchesParams;	set_m_params(value: AssignConstraintsToGridBatchesParams): AssignConstraintsToGridBatchesParams;

    forLoop(iBegin: number, iEnd: number): void;
  }
}
