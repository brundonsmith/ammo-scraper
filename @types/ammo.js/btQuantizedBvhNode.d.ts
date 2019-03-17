declare module Ammo {
  declare class btQuantizedBvhNode {
    constructor();

    get_int(): short;	set_int(value: short): short;
    get_int(): short;	set_int(value: short): short;
    get_m_escapeIndexOrTriangleIndex(): number;	set_m_escapeIndexOrTriangleIndex(value: number): number;

    getEscapeIndex(): number;
    getTriangleIndex(): number;
    getPartId(): number;
    isLeafNode(): boolean;
  }
}
