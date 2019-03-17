declare module Ammo {
  declare class btGImpactMeshShapePart_TrimeshPrimitiveManager {
    constructor();
    constructor(meshInterface: btStridingMeshInterface, part: number);
    constructor(manager: TrimeshPrimitiveManager);

    get_indexstride(): number;	set_indexstride(value: number): number;
    get_indexbase(): string;	set_indexbase(value: string): string;
    get_indicestype(): PHY_ScalarType;	set_indicestype(value: PHY_ScalarType): PHY_ScalarType;
    get_m_part(): number;	set_m_part(value: number): number;
    get_m_margin(): number;	set_m_margin(value: number): number;
    get_m_lock_count(): number;	set_m_lock_count(value: number): number;
    get_m_scale(): btVector3;	set_m_scale(value: btVector3): btVector3;
    get_m_meshInterface(): btStridingMeshInterface;	set_m_meshInterface(value: btStridingMeshInterface): btStridingMeshInterface;
    get_numfaces(): number;	set_numfaces(value: number): number;
    get_numverts(): number;	set_numverts(value: number): number;
    get_stride(): number;	set_stride(value: number): number;
    get_type(): PHY_ScalarType;	set_type(value: PHY_ScalarType): PHY_ScalarType;
    get_vertexbase(): string;	set_vertexbase(value: string): string;

    get_vertex_count(): number;
    get_indices(face_index: number, i0: number, i1: number, i2: number): void;
    get_bullet_triangle(prim_index: number, triangle: btTriangleShapeEx): void;
    get_primitive_triangle(prim_index: number, triangle: btPrimitiveTriangle): void;
    get_primitive_box(prim_index: number, primbox: btAABB): void;
    get_vertex(vertex_index: number, vertex: btVector3): void;
    get_primitive_count(): number;
    is_trimesh(): boolean;
    lock(): void;
    unlock(): void;
  }
}
