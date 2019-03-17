declare module Ammo {
  declare class btSoftBody_Joint {
    constructor();

    get_m_delete(): boolean;	set_m_delete(value: boolean): boolean;
    get_m_massmatrix(): btMatrix3x3;	set_m_massmatrix(value: btMatrix3x3): btMatrix3x3;
    get_m_sdrift(): btVector3;	set_m_sdrift(value: btVector3): btVector3;
    get_m_drift(): btVector3;	set_m_drift(value: btVector3): btVector3;
    get_m_bodies(): Body;	set_m_bodies(value: Body): Body;
    get_m_refs(): btVector3;	set_m_refs(value: btVector3): btVector3;
    get_m_split(): number;	set_m_split(value: number): number;
    get_m_erp(): number;	set_m_erp(value: number): number;
    get_m_cfm(): number;	set_m_cfm(value: number): number;

    Prepare(dt: number, iterations: number): void;
    Solve(dt: number, sor: number): void;
    Type(): eType__;
    Terminate(dt: number): void;
  }
}
