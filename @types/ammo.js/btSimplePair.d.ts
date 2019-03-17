declare module Ammo {
  declare class btSimplePair {
    constructor(indexA: number, indexB: number);

    get_m_indexA(): number;	set_m_indexA(value: number): number;
    get_m_indexB(): number;	set_m_indexB(value: number): number;
    get_m_userPointer(): void;	set_m_userPointer(value: void): void;
    get_m_userValue(): number;	set_m_userValue(value: number): number;
    get_n(): unio;	set_n(value: unio): unio;

  }
}
