declare module Ammo {
  declare class btBlock {

    get_address(): string;	set_address(value: string): string;
    get_previous(): btBlock;	set_previous(value: btBlock): btBlock;

  }
}
