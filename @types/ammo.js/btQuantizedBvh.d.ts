declare module Ammo {
  declare class btQuantizedBvh {
    constructor();
    constructor();

    get_btQuantizedBvh(): static;	set_btQuantizedBvh(value: static): static;
    get_unsigned(): static;	set_unsigned(value: static): static;

    buildInternal(): void;
    calculateSerializeBufferSizeNew(): number;
    calculateSerializeBufferSize(): unsigned;
    deSerializeDouble(btQuantizedBvhDoubleData: struct): void;
    deSerializeFloat(btQuantizedBvhFloatData: struct): void;
    getSubtreeInfoArray(): BvhSubtreeInfoArray;
    getQuantizedNodeArray(): QuantizedNodeArray;
    getLeafNodeArray(): QuantizedNodeArray;
    isQuantized(): boolean;
    quantizeWithClamp(out: short, point2: btVector3, isMax: number): void;
    quantize(out: short, point: btVector3, isMax: number): void;
    reportAabbOverlappingNodex(nodeCallback: btNodeOverlapCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    reportBoxCastOverlappingNodex(nodeCallback: btNodeOverlapCallback, raySource: btVector3, rayTarget: btVector3, aabbMin: btVector3, aabbMax: btVector3): void;
    reportRayOverlappingNodex(nodeCallback: btNodeOverlapCallback, raySource: btVector3, rayTarget: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    serialize(o_alignedDataBuffer: void, e: i_dataBufferSiz, i_swapEndian: boolean): boolean;
    setTraversalMode(traversalMode: btTraversalMode): void;
    setQuantizationValues(bvhAabbMin: btVector3, bvhAabbMax: btVector3, quantizationMargin: number): void;
    unQuantize(vecIn: short): btVector3;
  }
}
