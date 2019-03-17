declare module Ammo {
  declare class btHashString {
    constructor();
    constructor(name: string);

    get_m_string1(): std_string;	set_m_string1(value: std_string): std_string;
    get_m_hash(): number;	set_m_hash(value: number): number;

    equals(other: btHashString): boolean;
    getHash(): number;
  }
}
