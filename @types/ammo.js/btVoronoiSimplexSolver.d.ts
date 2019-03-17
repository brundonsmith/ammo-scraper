declare module Ammo {
  declare class btVoronoiSimplexSolver {
    constructor();
    removeVertex(index: number): void;
    reduceVertices(usedVerts: btUsageBitfield): void;
    updateClosestVectorAndPoints(): boolean;
    closestPtPointTetrahedron(p: btVector3, a: btVector3, b: btVector3, c: btVector3, d: btVector3, finalResult: btSubSimplexClosestResult): boolean;
    pointOutsideOfPlane(p: btVector3, a: btVector3, b: btVector3, c: btVector3, d: btVector3): number;
    closestPtPointTriangle(p: btVector3, a: btVector3, b: btVector3, c: btVector3, result: btSubSimplexClosestResult): boolean;
    constructor();
    reset(): void;
    addVertex(w: btVector3, p: btVector3, q: btVector3): void;
    setEqualVertexThreshold(threshold: number): void;
    getEqualVertexThreshold(): number;
    closest(v: btVector3): boolean;
    maxVertex(): number;
    fullSimplex(): boolean;
    getSimplex(pBuf: btVector3, qBuf: btVector3, yBuf: btVector3): number;
    inSimplex(w: btVector3): boolean;
    backup_closest(v: btVector3): void;
    emptySimplex(): boolean;
    compute_points(p1: btVector3, p2: btVector3): void;
    numVertices(): number;
    get_m_numVertices(): number;	set_m_numVertices(value: number): number;
    get_m_simplexVectorW(): btVector3;	set_m_simplexVectorW(value: btVector3): btVector3;
    get_m_simplexPointsP(): btVector3;	set_m_simplexPointsP(value: btVector3): btVector3;
    get_m_simplexPointsQ(): btVector3;	set_m_simplexPointsQ(value: btVector3): btVector3;
    get_m_cachedP1(): btVector3;	set_m_cachedP1(value: btVector3): btVector3;
    get_m_cachedP2(): btVector3;	set_m_cachedP2(value: btVector3): btVector3;
    get_m_cachedV(): btVector3;	set_m_cachedV(value: btVector3): btVector3;
    get_m_lastW(): btVector3;	set_m_lastW(value: btVector3): btVector3;
    get_m_equalVertexThreshold(): number;	set_m_equalVertexThreshold(value: number): number;
    get_m_cachedValidClosest(): boolean;	set_m_cachedValidClosest(value: boolean): boolean;
    get_m_cachedBC(): btSubSimplexClosestResult;	set_m_cachedBC(value: btSubSimplexClosestResult): btSubSimplexClosestResult;
    get_m_needsUpdate(): boolean;	set_m_needsUpdate(value: boolean): boolean;
  }
}
