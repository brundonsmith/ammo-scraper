declare module Ammo {
  declare class UpdateIslandDispatcher {
    constructor(y: btAlignedObjectArra, d: btSimulationIslandManagerMt_Islan, r: islandsPt, solverParams: btSimulationIslandManagerMt_SolverParams);

    get_m_solverParams(): btSimulationIslandManagerMt_SolverParams;	set_m_solverParams(value: btSimulationIslandManagerMt_SolverParams): btSimulationIslandManagerMt_SolverParams;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    forLoop(iBegin: number, iEnd: number): void;
  }
}
