declare module Ammo {
  declare class btSoftBodyFloatData {
    get_m_collisionObjectData(): btCollisionObjectFloatData;	set_m_collisionObjectData(value: btCollisionObjectFloatData): btCollisionObjectFloatData;
    get_m_pose(): SoftBodyPoseData;	set_m_pose(value: SoftBodyPoseData): SoftBodyPoseData;
    get_m_materials(): SoftBodyMaterialData;	set_m_materials(value: SoftBodyMaterialData): SoftBodyMaterialData;
    get_m_nodes(): SoftBodyNodeData;	set_m_nodes(value: SoftBodyNodeData): SoftBodyNodeData;
    get_m_links(): SoftBodyLinkData;	set_m_links(value: SoftBodyLinkData): SoftBodyLinkData;
    get_m_faces(): SoftBodyFaceData;	set_m_faces(value: SoftBodyFaceData): SoftBodyFaceData;
    get_m_tetrahedra(): SoftBodyTetraData;	set_m_tetrahedra(value: SoftBodyTetraData): SoftBodyTetraData;
    get_m_anchors(): SoftRigidAnchorData;	set_m_anchors(value: SoftRigidAnchorData): SoftRigidAnchorData;
    get_m_clusters(): SoftBodyClusterData;	set_m_clusters(value: SoftBodyClusterData): SoftBodyClusterData;
    get_m_joints(): btSoftBodyJointData;	set_m_joints(value: btSoftBodyJointData): btSoftBodyJointData;
    get_m_numMaterials(): number;	set_m_numMaterials(value: number): number;
    get_m_numNodes(): number;	set_m_numNodes(value: number): number;
    get_m_numLinks(): number;	set_m_numLinks(value: number): number;
    get_m_numFaces(): number;	set_m_numFaces(value: number): number;
    get_m_numTetrahedra(): number;	set_m_numTetrahedra(value: number): number;
    get_m_numAnchors(): number;	set_m_numAnchors(value: number): number;
    get_m_numClusters(): number;	set_m_numClusters(value: number): number;
    get_m_numJoints(): number;	set_m_numJoints(value: number): number;
    get_m_config(): SoftBodyConfigData;	set_m_config(value: SoftBodyConfigData): SoftBodyConfigData;
  }
}
