declare module Ammo {
  declare class btSubSimplexClosestResult {

    get_m_closestPointOnSimplex(): btVector3;	set_m_closestPointOnSimplex(value: btVector3): btVector3;
    get_m_usedVertices(): btUsageBitfield;	set_m_usedVertices(value: btUsageBitfield): btUsageBitfield;
    get_m_barycentricCoords(): number;	set_m_barycentricCoords(value: number): number;
    get_m_degenerate(): boolean;	set_m_degenerate(value: boolean): boolean;

    isValid(): boolean;
    reset(): void;
    setBarycentricCoordinates(a: number): void;
  }
}
