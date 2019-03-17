declare module Ammo {
  declare class btConvexPolyhedron {
    constructor();
    constructor();

    get_mC(): btVector3;	set_mC(value: btVector3): btVector3;
    get_m_radius(): number;	set_m_radius(value: number): number;
    get_m_extents(): btVector3;	set_m_extents(value: btVector3): btVector3;
    get_m_localCenter(): btVector3;	set_m_localCenter(value: btVector3): btVector3;
    get_mE(): btVector3;	set_mE(value: btVector3): btVector3;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    initialize2(): void;
    initialize(): void;
    project(trans: btTransform, dir: btVector3, minProj: number, maxProj: number, witnesPtMin: btVector3, witnesPtMax: btVector3): void;
    testContainment(): boolean;
  }
}
