declare module Ammo {
  declare class btSoftColliders_ClusterBase {
    constructor();
    SolveContact(res: btGjkEpaSolver2_sResults, ba: btSoftBody_Body, bb: btSoftBody_Body, joint: btSoftBody_CJoint): boolean;
    get_erp(): number;	set_erp(value: number): number;
    get_idt(): number;	set_idt(value: number): number;
    get_m_margin(): number;	set_m_margin(value: number): number;
    get_friction(): number;	set_friction(value: number): number;
    get_threshold(): number;	set_threshold(value: number): number;
  }
}
