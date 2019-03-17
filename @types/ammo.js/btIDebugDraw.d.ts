declare module Ammo {
  declare class btIDebugDraw {
    getDefaultColors(): DefaultColors;
    setDefaultColors(s: DefaultColor): void;
    drawLine(from: btVector3, to: btVector3, color: btVector3): void;
    drawLine(from: btVector3, to: btVector3, fromColor: btVector3, toColor: btVector3): void;
    drawSphere(radius: number, transform: btTransform, color: btVector3): void;
    drawSphere(p: btVector3, radius: number, color: btVector3): void;
    drawTriangle(v0: btVector3, v1: btVector3, v2: btVector3, 3: btVector, 3: btVector, 3: btVector, color: btVector3, alpha: number): void;
    drawTriangle(v0: btVector3, v1: btVector3, v2: btVector3, color: btVector3, r: btScala): void;
    drawContactPoint(PointOnB: btVector3, normalOnB: btVector3, distance: number, lifeTime: number, color: btVector3): void;
    reportErrorWarning(warningString: string): void;
    draw3dText(location: btVector3, textString: string): void;
    setDebugMode(debugMode: number): void;
    getDebugMode(): number;
    drawAabb(from: btVector3, to: btVector3, color: btVector3): void;
    drawTransform(transform: btTransform, orthoLen: number): void;
    drawArc(center: btVector3, normal: btVector3, axis: btVector3, radiusA: number, radiusB: number, minAngle: number, maxAngle: number, color: btVector3, drawSect: boolean, stepDegrees: number): void;
    drawSpherePatch(center: btVector3, up: btVector3, axis: btVector3, radius: number, minTh: number, maxTh: number, minPs: number, maxPs: number, color: btVector3, stepDegrees: number): void;
    drawBox(bbMin: btVector3, bbMax: btVector3, color: btVector3): void;
    drawBox(bbMin: btVector3, bbMax: btVector3, trans: btTransform, color: btVector3): void;
    drawCapsule(radius: number, halfHeight: number, upAxis: number, transform: btTransform, color: btVector3): void;
    drawCylinder(radius: number, halfHeight: number, upAxis: number, transform: btTransform, color: btVector3): void;
    drawCone(radius: number, height: number, upAxis: number, transform: btTransform, color: btVector3): void;
    drawPlane(planeNormal: btVector3, planeConst: number, transform: btTransform, color: btVector3): void;
    clearLines(): void;
    flushLines(): void;
  }
}
