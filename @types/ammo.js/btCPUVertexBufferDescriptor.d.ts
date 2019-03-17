declare module Ammo {
  declare class btCPUVertexBufferDescriptor {
    constructor(basePointer: number, vertexOffset: number, vertexStride: number);
    constructor(basePointer: number, vertexOffset: number, vertexStride: number, normalOffset: number, normalStride: number);
    getBufferType(): BufferTypes;
    getBasePointer(): number;
  }
}
