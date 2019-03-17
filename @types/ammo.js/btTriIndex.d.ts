declare module Ammo {
  declare class btTriIndex {
    constructor(partId: number, triangleIndex: number, shape: btCollisionShape);

    get_btCollisionShape(): class;	set_btCollisionShape(value: class): class;
    get_m_PartIdTriangleIndex(): number;	set_m_PartIdTriangleIndex(value: number): number;

    getTriangleIndex(): number;
    getPartId(): number;
    getUid(): number;
  }
}
