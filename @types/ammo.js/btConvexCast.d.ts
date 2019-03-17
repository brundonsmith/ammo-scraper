declare module Ammo {
  declare class btConvexCast {


    calcTimeOfImpact(fromA: btTransform, toA: btTransform, fromB: btTransform, toB: btTransform, result: CastResult): boolean;
  }
}
