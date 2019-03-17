declare module Ammo {
  declare class btQuantizedBvh {
    constructor();
    constructor();
    setQuantizationValues(bvhAabbMin: btVector3, bvhAabbMax: btVector3, quantizationMargin: number): void;
    getLeafNodeArray(): QuantizedNodeArray;
    buildInternal(): void;
    reportAabbOverlappingNodex(nodeCallback: btNodeOverlapCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    reportRayOverlappingNodex(nodeCallback: btNodeOverlapCallback, raySource: btVector3, rayTarget: btVector3): void;
    reportBoxCastOverlappingNodex(nodeCallback: btNodeOverlapCallback, raySource: btVector3, rayTarget: btVector3, aabbMin: btVector3, aabbMax: btVector3): void;
    quantize(out: short, point: btVector3, isMax: number): void;
    quantizeWithClamp(out: short, point2: btVector3, isMax: number): void;
    unQuantize(vecIn: short): btVector3;
    setTraversalMode(traversalMode: btTraversalMode): void;
    getQuantizedNodeArray(): QuantizedNodeArray;
    getSubtreeInfoArray(): BvhSubtreeInfoArray;
    calculateSerializeBufferSize(): unsigned;
    serialize(o_alignedDataBuffer: void, e: i_dataBufferSiz, i_swapEndian: boolean): boolean;
    calculateSerializeBufferSizeNew(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    deSerializeFloat(btQuantizedBvhFloatData: struct): void;
    deSerializeDouble(btQuantizedBvhDoubleData: struct): void;
    isQuantized(): boolean;
    get_btQuantizedBvh(): static;	set_btQuantizedBvh(value: static): static;
    get_unsigned(): static;	set_unsigned(value: static): static;
  }
}
