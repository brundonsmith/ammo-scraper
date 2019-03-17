declare module Ammo {
  declare class BT_QUANTIZED_BVH_NODE {
    constructor();
    isLeafNode(): boolean;
    getEscapeIndex(): number;
    setEscapeIndex(index: number): void;
    getDataIndex(): number;
    setDataIndex(index: number): void;
    testQuantizedBoxOverlapp(quantizedMin: short, quantizedMax: short): boolean;
    get_int(): short;	set_int(value: short): short;
    get_int(): short;	set_int(value: short): short;
    get_m_escapeIndexOrDataIndex(): number;	set_m_escapeIndexOrDataIndex(value: number): number;
  }
}
