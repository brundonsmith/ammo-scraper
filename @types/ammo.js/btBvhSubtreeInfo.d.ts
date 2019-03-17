declare module Ammo {
  declare class btBvhSubtreeInfo {
    constructor();
    constructor();

    get_int(): short;	set_int(value: short): short;
    get_int(): short;	set_int(value: short): short;
    get_m_rootNodeIndex(): number;	set_m_rootNodeIndex(value: number): number;
    get_m_subtreeSize(): number;	set_m_subtreeSize(value: number): number;
    get_m_padding(): number;	set_m_padding(value: number): number;

    setAabbFromQuantizeNode(quantizedNode: btQuantizedBvhNode): void;
  }
}
