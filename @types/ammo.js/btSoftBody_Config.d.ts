declare module Ammo {
  declare class btSoftBody_Config {
    get_aeromodel(): eAeroModel__;	set_aeromodel(value: eAeroModel__): eAeroModel__;
    get_kVCF(): number;	set_kVCF(value: number): number;
    get_kDP(): number;	set_kDP(value: number): number;
    get_kDG(): number;	set_kDG(value: number): number;
    get_kLF(): number;	set_kLF(value: number): number;
    get_kPR(): number;	set_kPR(value: number): number;
    get_kVC(): number;	set_kVC(value: number): number;
    get_kDF(): number;	set_kDF(value: number): number;
    get_kMT(): number;	set_kMT(value: number): number;
    get_kCHR(): number;	set_kCHR(value: number): number;
    get_kKHR(): number;	set_kKHR(value: number): number;
    get_kSHR(): number;	set_kSHR(value: number): number;
    get_kAHR(): number;	set_kAHR(value: number): number;
    get_kSRHR_CL(): number;	set_kSRHR_CL(value: number): number;
    get_kSKHR_CL(): number;	set_kSKHR_CL(value: number): number;
    get_kSSHR_CL(): number;	set_kSSHR_CL(value: number): number;
    get_kSR_SPLT_CL(): number;	set_kSR_SPLT_CL(value: number): number;
    get_kSK_SPLT_CL(): number;	set_kSK_SPLT_CL(value: number): number;
    get_kSS_SPLT_CL(): number;	set_kSS_SPLT_CL(value: number): number;
    get_maxvolume(): number;	set_maxvolume(value: number): number;
    get_timescale(): number;	set_timescale(value: number): number;
    get_viterations(): number;	set_viterations(value: number): number;
    get_piterations(): number;	set_piterations(value: number): number;
    get_diterations(): number;	set_diterations(value: number): number;
    get_citerations(): number;	set_citerations(value: number): number;
    get_collisions(): number;	set_collisions(value: number): number;
    get_m_vsequence(): tVSolverArray;	set_m_vsequence(value: tVSolverArray): tVSolverArray;
    get_m_psequence(): tPSolverArray;	set_m_psequence(value: tPSolverArray): tPSolverArray;
    get_m_dsequence(): tPSolverArray;	set_m_dsequence(value: tPSolverArray): tPSolverArray;
  }
}
