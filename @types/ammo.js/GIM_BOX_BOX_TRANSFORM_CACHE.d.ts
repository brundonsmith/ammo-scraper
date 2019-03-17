declare module Ammo {
  declare class GIM_BOX_BOX_TRANSFORM_CACHE {
    calc_absolute_matrix(): void;
    constructor();
    constructor(trans1_to_0: mat4f);
    calc_from_homogenic(trans0: btTransform, trans1: btTransform): void;
    calc_from_full_invert(trans0: btTransform, trans1: btTransform): void;
    transform(point: btVector3): btVector3;
    get_m_T1to0(): btVector3;	set_m_T1to0(value: btVector3): btVector3;
    get_m_R1to0(): btMatrix3x3;	set_m_R1to0(value: btMatrix3x3): btMatrix3x3;
    get_m_AR(): btMatrix3x3;	set_m_AR(value: btMatrix3x3): btMatrix3x3;
  }
}
