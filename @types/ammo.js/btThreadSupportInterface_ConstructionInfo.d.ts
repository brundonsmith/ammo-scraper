declare module Ammo {
  declare class btThreadSupportInterface_ConstructionInfo {
    constructor(uniqueName: string, userThreadFunc: ThreadFunc, threadStackSize: number);

    get_m_uniqueName(): string;	set_m_uniqueName(value: string): string;
    get_m_userThreadFunc(): ThreadFunc;	set_m_userThreadFunc(value: ThreadFunc): ThreadFunc;
    get_m_threadStackSize(): number;	set_m_threadStackSize(value: number): number;

  }
}
