declare module Ammo {
  declare class btGjkEpaSolver3_sResults {
    get_btGjkEpaSolver3::sResults::eStatus(): enum;	set_btGjkEpaSolver3_sResults_eStatus(value: enum): enum;
    get_witnesses(): btVector3;	set_witnesses(value: btVector3): btVector3;
    get_normal(): btVector3;	set_normal(value: btVector3): btVector3;
    get_distance(): number;	set_distance(value: number): number;
  }
}