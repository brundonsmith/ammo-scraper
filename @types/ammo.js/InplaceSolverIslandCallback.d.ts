declare module Ammo {
  declare class InplaceSolverIslandCallback {
    constructor(solver: btConstraintSolver, stackAlloc: btStackAlloc, dispatcher: btDispatcher);

    get_m_sortedConstraints(): btTypedConstraint;	set_m_sortedConstraints(value: btTypedConstraint): btTypedConstraint;
    get_m_dispatcher(): btDispatcher;	set_m_dispatcher(value: btDispatcher): btDispatcher;
    get_m_debugDrawer(): btIDebugDraw;	set_m_debugDrawer(value: btIDebugDraw): btIDebugDraw;
    get_m_numConstraints(): number;	set_m_numConstraints(value: number): number;
    get_m_solverInfo(): btContactSolverInfo;	set_m_solverInfo(value: btContactSolverInfo): btContactSolverInfo;
    get_m_solver(): btConstraintSolver;	set_m_solver(value: btConstraintSolver): btConstraintSolver;
    get_operator(): InplaceSolverIslandCallback;	set_operator(value: InplaceSolverIslandCallback): InplaceSolverIslandCallback;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    processConstraints(): void;
    processIsland(bodies: btCollisionObject, numBodies: number, manifolds: btPersistentManifold, numManifolds: number, islandId: number): void;
    setup(solverInfo: btContactSolverInfo, sortedConstraints: btTypedConstraint, numConstraints: number, debugDrawer: btIDebugDraw): void;
  }
}
