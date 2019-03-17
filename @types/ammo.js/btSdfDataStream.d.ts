declare module Ammo {
  declare class btSdfDataStream {
    constructor(data: string, size: number);
    get_e(): templat;	set_e(value: templat): templat;
    read(val: T): boolean;
    get_m_data(): string;	set_m_data(value: string): string;
    get_m_size(): number;	set_m_size(value: number): number;
    get_m_currentOffset(): number;	set_m_currentOffset(value: number): number;
  }
}
