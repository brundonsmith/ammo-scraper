declare module Ammo {
  declare class btCapsuleShapeData {
    get_m_convexInternalShapeData(): btConvexInternalShapeData;	set_m_convexInternalShapeData(value: btConvexInternalShapeData): btConvexInternalShapeData;
    get_m_upAxis(): number;	set_m_upAxis(value: number): number;
    get_m_padding(): string;	set_m_padding(value: string): string;
  }
}
