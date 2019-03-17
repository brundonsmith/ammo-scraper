declare module Ammo {
  declare class btSoftBody_sRayCast {
    get_body(): btSoftBody;	set_body(value: btSoftBody): btSoftBody;
    get_feature(): eFeature__;	set_feature(value: eFeature__): eFeature__;
    get_index(): number;	set_index(value: number): number;
    get_fraction(): number;	set_fraction(value: number): number;
  }
}
