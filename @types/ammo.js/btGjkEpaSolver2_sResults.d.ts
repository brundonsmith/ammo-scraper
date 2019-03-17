declare module Ammo {
  declare class btGjkEpaSolver2_sResults {

    get_btGjkEpaSolver2::sResults::eStatus(): enum;	set_btGjkEpaSolver2_sResults_eStatus(value: enum): enum;
    get_distance(): number;	set_distance(value: number): number;
    get_normal(): btVector3;	set_normal(value: btVector3): btVector3;
    get_witnesses(): btVector3;	set_witnesses(value: btVector3): btVector3;

  }
}
