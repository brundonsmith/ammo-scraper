declare module Ammo {
  declare class HullLibrary {
    CreateConvexHull(desc: HullDesc, result: HullResult): HullError;
    ReleaseResult(result: HullResult): HullError;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
  }
}
