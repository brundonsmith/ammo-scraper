declare module Ammo {
  declare class MultiBodyInplaceSolverIslandCallback {
    constructor(solver: btMultiBodyConstraintSolver, dispatcher: btDispatcher);

    get_m_numMultiBodyConstraints(): number;	set_m_numMultiBodyConstraints(value: number): number;
    get_m_dispatcher(): btDispatcher;	set_m_dispatcher(value: btDispatcher): btDispatcher;
    get_m_debugDrawer(): btIDebugDraw;	set_m_debugDrawer(value: btIDebugDraw): btIDebugDraw;
    get_m_numConstraints(): number;	set_m_numConstraints(value: number): number;
    get_m_sortedConstraints(): btTypedConstraint;	set_m_sortedConstraints(value: btTypedConstraint): btTypedConstraint;
    get_m_solverInfo(): btContactSolverInfo;	set_m_solverInfo(value: btContactSolverInfo): btContactSolverInfo;
    get_m_solver(): btMultiBodyConstraintSolver;	set_m_solver(value: btMultiBodyConstraintSolver): btMultiBodyConstraintSolver;
    get_m_multiBodySortedConstraints(): btMultiBodyConstraint;	set_m_multiBodySortedConstraints(value: btMultiBodyConstraint): btMultiBodyConstraint;
    get_operator(): MultiBodyInplaceSolverIslandCallback;	set_operator(value: MultiBodyInplaceSolverIslandCallback): MultiBodyInplaceSolverIslandCallback;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    processConstraints(): void;
    processIsland(bodies: btCollisionObject, numBodies: number, manifolds: btPersistentManifold, numManifolds: number, islandId: number): void;
    setMultiBodyConstraintSolver(solver: btMultiBodyConstraintSolver): void;
    setup(solverInfo: btContactSolverInfo, sortedConstraints: btTypedConstraint, numConstraints: number, sortedMultiBodyConstraints: btMultiBodyConstraint, numMultiBodyConstraints: number, debugDrawer: btIDebugDraw): void;
  }
}
