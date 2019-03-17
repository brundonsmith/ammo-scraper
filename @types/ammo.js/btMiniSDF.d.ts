declare module Ammo {
  declare class btMiniSDF {
    constructor();

    get_m_domain(): btAlignedBox3d;	set_m_domain(value: btAlignedBox3d): btAlignedBox3d;
    get_m_isValid(): boolean;	set_m_isValid(value: boolean): boolean;
    get_m_n_fields(): std_size_t;	set_m_n_fields(value: std_size_t): std_size_t;
    get_m_n_cells(): std_size_t;	set_m_n_cells(value: std_size_t): std_size_t;
    get_m_inv_cell_size(): btVector3;	set_m_inv_cell_size(value: btVector3): btVector3;
    get_m_cell_size(): btVector3;	set_m_cell_size(value: btVector3): btVector3;
    get_m_resolution(): number;	set_m_resolution(value: number): number;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    interpolate(field_id: number, dist: number, const: btVector3, gradient: btVector3): boolean;
    isValid(): boolean;
    load(data: string, size: number): boolean;
    multiToSingleIndex(const: btMultiIndex): number;
    singleToMultiIndex(l: number): btMultiIndex;
    subdomain(l: number): btAlignedBox3d;
    shape_function_(const: btVector3, gradient: btShapeGradients): btShapeMatrix;
    subdomain(const: btMultiIndex): btAlignedBox3d;
  }
}
