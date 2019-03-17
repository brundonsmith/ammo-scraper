declare module Ammo {
  declare class btAxisSweep3Internal< {
    constructor();
    SetNextFree(next: BP_FP_INT_TYPE): void;
    GetNextFree(): BP_FP_INT_TYPE;
    get_m_minEdges(): BP_FP_INT_TYPE;	set_m_minEdges(value: BP_FP_INT_TYPE): BP_FP_INT_TYPE;
    get_m_maxEdges(): BP_FP_INT_TYPE;	set_m_maxEdges(value: BP_FP_INT_TYPE): BP_FP_INT_TYPE;
    get_m_dbvtProxy(): btBroadphaseProxy;	set_m_dbvtProxy(value: btBroadphaseProxy): btBroadphaseProxy;
  }
}
