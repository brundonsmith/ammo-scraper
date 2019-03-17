declare module Ammo {
  declare class Bullet_btMultiSphereShapeData {
    get_m_convexInternalShapeData(): btConvexInternalShapeData;	set_m_convexInternalShapeData(value: btConvexInternalShapeData): btConvexInternalShapeData;
    get_m_localPositionArrayPtr(): btPositionAndRadius;	set_m_localPositionArrayPtr(value: btPositionAndRadius): btPositionAndRadius;
    get_m_localPositionArraySize(): number;	set_m_localPositionArraySize(value: number): number;
    get_m_padding(): string;	set_m_padding(value: string): string;
  }
}
