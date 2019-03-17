declare module Ammo {
  declare class btConvexHullComputer_Edge {
    getSourceVertex(): number;
    getTargetVertex(): number;
    getNextEdgeOfVertex(): Edge;
    getNextEdgeOfFace(): Edge;
    getReverseEdge(): Edge;
  }
}
