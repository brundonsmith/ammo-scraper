declare module Ammo {
  declare class btSoftBodySolverOutput {
    constructor();


    copySoftBodyToVertexBuffer(const: btSoftBody, vertexBuffer: btVertexBufferDescriptor): void;
  }
}
