declare module Ammo {
  declare class btSoftClusterCollisionShape {
    constructor(cluster: btSoftBody_Cluster);
    localGetSupportingVertex(vec: btVector3): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getShapeType(): number;
    getName(): string;
    setMargin(margin: number): void;
    getMargin(): number;
    get_m_cluster(): btSoftBody_Cluster;	set_m_cluster(value: btSoftBody_Cluster): btSoftBody_Cluster;
  }
}
