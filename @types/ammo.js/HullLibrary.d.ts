declare module Ammo {
  declare class HullLibrary {

    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    CreateConvexHull(desc: HullDesc, result: HullResult): HullError;
    ReleaseResult(result: HullResult): HullError;
  }
}
