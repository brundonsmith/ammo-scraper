declare module Ammo {
  declare class MultiBodyInplaceSolverIslandCallback {
    constructor(solver: btMultiBodyConstraintSolver, dispatcher: btDispatcher);
    get_operator(): MultiBodyInplaceSolverIslandCallback;	set_operator(value: MultiBodyInplaceSolverIslandCallback): MultiBodyInplaceSolverIslandCallback;
    setup(solverInfo: btContactSolverInfo, t: btTypedConstrain, numConstraints: number, t: btMultiBodyConstrain, numMultiBodyConstraints: number, debugDrawer: btIDebugDraw): void;
    setMultiBodyConstraintSolver(solver: btMultiBodyConstraintSolver): void;
    processIsland(t: btCollisionObjec, numBodies: number, d: btPersistentManifol, numManifolds: number, islandId: number): void;
    processConstraints(): void;
    get_m_solverInfo(): btContactSolverInfo;	set_m_solverInfo(value: btContactSolverInfo): btContactSolverInfo;
    get_m_solver(): btMultiBodyConstraintSolver;	set_m_solver(value: btMultiBodyConstraintSolver): btMultiBodyConstraintSolver;
    get_m_multiBodySortedConstraints(): btMultiBodyConstraint;	set_m_multiBodySortedConstraints(value: btMultiBodyConstraint): btMultiBodyConstraint;
    get_m_numMultiBodyConstraints(): number;	set_m_numMultiBodyConstraints(value: number): number;
    get_m_sortedConstraints(): btTypedConstraint;	set_m_sortedConstraints(value: btTypedConstraint): btTypedConstraint;
    get_m_numConstraints(): number;	set_m_numConstraints(value: number): number;
    get_m_debugDrawer(): btIDebugDraw;	set_m_debugDrawer(value: btIDebugDraw): btIDebugDraw;
    get_m_dispatcher(): btDispatcher;	set_m_dispatcher(value: btDispatcher): btDispatcher;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
  }
}
