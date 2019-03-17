declare module Ammo {
  declare class btVertexBufferDescriptor {
    constructor();
    hasVertexPositions(): boolean;
    hasNormals(): boolean;
    getBufferType(): BufferTypes;
    getVertexOffset(): number;
    getVertexStride(): number;
    getNormalOffset(): number;
    getNormalStride(): number;
  }
}
