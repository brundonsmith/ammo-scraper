declare module Ammo {
  declare class btSoftClusterCollisionShape {
    constructor(cluster: btSoftBody_Cluster);

    get_m_cluster(): btSoftBody_Cluster;	set_m_cluster(value: btSoftBody_Cluster): btSoftBody_Cluster;

    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getShapeType(): number;
    getName(): string;
    getMargin(): number;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    localGetSupportingVertex(vec: btVector3): btVector3;
    setMargin(margin: number): void;
  }
}
