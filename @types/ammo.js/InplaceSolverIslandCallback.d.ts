declare module Ammo {
  declare class InplaceSolverIslandCallback {
    constructor(solver: btConstraintSolver, stackAlloc: btStackAlloc, dispatcher: btDispatcher);
    get_operator(): InplaceSolverIslandCallback;	set_operator(value: InplaceSolverIslandCallback): InplaceSolverIslandCallback;
    setup(solverInfo: btContactSolverInfo, t: btTypedConstrain, numConstraints: number, debugDrawer: btIDebugDraw): void;
    processIsland(t: btCollisionObjec, numBodies: number, d: btPersistentManifol, numManifolds: number, islandId: number): void;
    processConstraints(): void;
    get_m_solverInfo(): btContactSolverInfo;	set_m_solverInfo(value: btContactSolverInfo): btContactSolverInfo;
    get_m_solver(): btConstraintSolver;	set_m_solver(value: btConstraintSolver): btConstraintSolver;
    get_m_sortedConstraints(): btTypedConstraint;	set_m_sortedConstraints(value: btTypedConstraint): btTypedConstraint;
    get_m_numConstraints(): number;	set_m_numConstraints(value: number): number;
    get_m_debugDrawer(): btIDebugDraw;	set_m_debugDrawer(value: btIDebugDraw): btIDebugDraw;
    get_m_dispatcher(): btDispatcher;	set_m_dispatcher(value: btDispatcher): btDispatcher;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
  }
}
