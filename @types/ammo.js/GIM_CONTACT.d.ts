declare module Ammo {
  declare class GIM_CONTACT {
    constructor();
    constructor(contact: GIM_CONTACT);
    constructor(point: btVector3, normal: btVector3, depth: number, feature1: number, feature2: number);
    calc_key_contact(): number;
    interpolate_normals(normals: btVector3, normal_count: number): void;
    constructor();
    constructor(contact: GIM_CONTACT);
    constructor(point: btVector3, normal: btVector3, depth: GREAL, feature1: GUINT, feature2: GUINT);
    calc_key_contact(): GUINT;
    interpolate_normals(normals: btVector3, normal_count: GUINT): void;
    get_m_point(): btVector3;	set_m_point(value: btVector3): btVector3;
    get_m_normal(): btVector3;	set_m_normal(value: btVector3): btVector3;
    get_m_depth(): number;	set_m_depth(value: number): number;
    get_m_distance(): number;	set_m_distance(value: number): number;
    get_m_feature1(): number;	set_m_feature1(value: number): number;
    get_m_feature2(): number;	set_m_feature2(value: number): number;
    get_m_depth(): GREAL;	set_m_depth(value: GREAL): GREAL;
    get_m_distance(): GREAL;	set_m_distance(value: GREAL): GREAL;
    get_m_feature1(): GUINT;	set_m_feature1(value: GUINT): GUINT;
    get_m_feature2(): GUINT;	set_m_feature2(value: GUINT): GUINT;
  }
}
