declare module Ammo {
  declare class btTriIndex {
    constructor(partId: number, triangleIndex: number, shape: btCollisionShape);
    getTriangleIndex(): number;
    getPartId(): number;
    getUid(): number;
    get_m_PartIdTriangleIndex(): number;	set_m_PartIdTriangleIndex(value: number): number;
    get_btCollisionShape(): class;	set_btCollisionShape(value: class): class;
  }
}
