declare module Ammo {
  declare class btConvexHullShapeData {

    get_m_convexInternalShapeData(): btConvexInternalShapeData;	set_m_convexInternalShapeData(value: btConvexInternalShapeData): btConvexInternalShapeData;
    get_m_unscaledPointsFloatPtr(): btVector3FloatData;	set_m_unscaledPointsFloatPtr(value: btVector3FloatData): btVector3FloatData;
    get_m_unscaledPointsDoublePtr(): btVector3DoubleData;	set_m_unscaledPointsDoublePtr(value: btVector3DoubleData): btVector3DoubleData;
    get_m_numUnscaledPoints(): number;	set_m_numUnscaledPoints(value: number): number;
    get_m_padding3(): string;	set_m_padding3(value: string): string;

  }
}
