declare module Ammo {
  declare class GIM_BVH_TREE_NODE {
    constructor();
    isLeafNode(): boolean;
    getEscapeIndex(): number;
    setEscapeIndex(index: number): void;
    getDataIndex(): number;
    setDataIndex(index: number): void;
    get_m_bound(): btAABB;	set_m_bound(value: btAABB): btAABB;
  }
}
