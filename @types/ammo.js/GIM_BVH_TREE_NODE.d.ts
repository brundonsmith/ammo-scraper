declare module Ammo {
  declare class GIM_BVH_TREE_NODE {
    constructor();

    get_m_bound(): btAABB;	set_m_bound(value: btAABB): btAABB;

    getEscapeIndex(): number;
    getDataIndex(): number;
    isLeafNode(): boolean;
    setEscapeIndex(index: number): void;
    setDataIndex(index: number): void;
  }
}
