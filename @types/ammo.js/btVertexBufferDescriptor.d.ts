declare module Ammo {
  declare class btVertexBufferDescriptor {
    constructor();


    getBufferType(): BufferTypes;
    getVertexOffset(): number;
    getVertexStride(): number;
    getNormalOffset(): number;
    getNormalStride(): number;
    hasVertexPositions(): boolean;
    hasNormals(): boolean;
  }
}
