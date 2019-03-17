declare module Ammo {
  declare class btBlock {
    get_previous(): btBlock;	set_previous(value: btBlock): btBlock;
    get_address(): string;	set_address(value: string): string;
  }
}
