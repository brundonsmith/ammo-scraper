declare module Ammo {
  declare class btDispatcherInfo {
    constructor();
    get_m_timeStep(): number;	set_m_timeStep(value: number): number;
    get_m_stepCount(): number;	set_m_stepCount(value: number): number;
    get_m_dispatchFunc(): number;	set_m_dispatchFunc(value: number): number;
    get_m_timeOfImpact(): number;	set_m_timeOfImpact(value: number): number;
    get_m_useContinuous(): boolean;	set_m_useContinuous(value: boolean): boolean;
    get_btIDebugDraw(): class;	set_btIDebugDraw(value: class): class;
    get_m_enableSatConvex(): boolean;	set_m_enableSatConvex(value: boolean): boolean;
    get_m_enableSPU(): boolean;	set_m_enableSPU(value: boolean): boolean;
    get_m_useEpa(): boolean;	set_m_useEpa(value: boolean): boolean;
    get_m_allowedCcdPenetration(): number;	set_m_allowedCcdPenetration(value: number): number;
    get_m_useConvexConservativeDistanceUtil(): boolean;	set_m_useConvexConservativeDistanceUtil(value: boolean): boolean;
    get_m_convexConservativeDistanceThreshold(): number;	set_m_convexConservativeDistanceThreshold(value: number): number;
    get_m_deterministicOverlappingPairs(): boolean;	set_m_deterministicOverlappingPairs(value: boolean): boolean;
  }
}
