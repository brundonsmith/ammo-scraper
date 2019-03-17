declare module Ammo {
  declare class UpdateIslandDispatcher {
    constructor(y: btAlignedObjectArra, d: btSimulationIslandManagerMt_Islan, r: islandsPt, solverParams: btSimulationIslandManagerMt_SolverParams);
    forLoop(iBegin: number, iEnd: number): void;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_m_solverParams(): btSimulationIslandManagerMt_SolverParams;	set_m_solverParams(value: btSimulationIslandManagerMt_SolverParams): btSimulationIslandManagerMt_SolverParams;
  }
}
