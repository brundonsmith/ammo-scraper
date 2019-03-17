declare module Ammo {
  declare class btGImpactTriangleCallback {
    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
    get_algorithm(): btGImpactCollisionAlgorithm;	set_algorithm(value: btGImpactCollisionAlgorithm): btGImpactCollisionAlgorithm;
    get_body0Wrap(): btCollisionObjectWrapper;	set_body0Wrap(value: btCollisionObjectWrapper): btCollisionObjectWrapper;
    get_body1Wrap(): btCollisionObjectWrapper;	set_body1Wrap(value: btCollisionObjectWrapper): btCollisionObjectWrapper;
    get_gimpactshape0(): btGImpactShapeInterface;	set_gimpactshape0(value: btGImpactShapeInterface): btGImpactShapeInterface;
    get_swapped(): boolean;	set_swapped(value: boolean): boolean;
    get_margin(): number;	set_margin(value: number): number;
  }
}
