declare module Ammo {
  declare class CONTACT_KEY_TOKEN {
    constructor();
    constructor(key: number, token: number);
    constructor(rtoken: CONTACT_KEY_TOKEN);

    get_m_key(): number;	set_m_key(value: number): number;
    get_m_value(): number;	set_m_value(value: number): number;
    get_operator(): boolean;	set_operator(value: boolean): boolean;
    get_operator(): boolean;	set_operator(value: boolean): boolean;

  }
}
