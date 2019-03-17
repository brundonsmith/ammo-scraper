declare module Ammo {
  declare class btSimulationIslandManagerMt_SolverParams {
    get_m_solverPool(): btConstraintSolver;	set_m_solverPool(value: btConstraintSolver): btConstraintSolver;
    get_m_solverMt(): btConstraintSolver;	set_m_solverMt(value: btConstraintSolver): btConstraintSolver;
    get_m_solverInfo(): btContactSolverInfo;	set_m_solverInfo(value: btContactSolverInfo): btContactSolverInfo;
    get_m_debugDrawer(): btIDebugDraw;	set_m_debugDrawer(value: btIDebugDraw): btIDebugDraw;
    get_m_dispatcher(): btDispatcher;	set_m_dispatcher(value: btDispatcher): btDispatcher;
  }
}
