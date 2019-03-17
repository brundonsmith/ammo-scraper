declare module Ammo {
  declare class btPersistentManifold {
    constructor();
    constructor();
    constructor(body0: btCollisionObject, body1: btCollisionObject, t: in, contactBreakingThreshold: number, contactProcessingThreshold: number);
    getBody0(): btCollisionObject;
    getBody1(): btCollisionObject;
    setBodies(body0: btCollisionObject, body1: btCollisionObject): void;
    clearUserCache(pt: btManifoldPoint): void;
    getNumContacts(): number;
    setNumContacts(cachedPoints: number): void;
    getContactPoint(index: number): btManifoldPoint;
    getContactPoint(index: number): btManifoldPoint;
    getContactBreakingThreshold(): number;
    getContactProcessingThreshold(): number;
    setContactBreakingThreshold(contactBreakingThreshold: number): void;
    setContactProcessingThreshold(contactProcessingThreshold: number): void;
    getCacheEntry(newPoint: btManifoldPoint): number;
    addManifoldPoint(newPoint: btManifoldPoint, isPredictive: boolean): number;
    removeContactPoint(index: number): void;
    replaceContactPoint(newPoint: btManifoldPoint, insertIndex: number): void;
    validContactDistance(pt: btManifoldPoint): boolean;
    refreshContactPoints(trA: btTransform, trB: btTransform): void;
    clearManifold(): void;
    calculateSerializeBufferSize(): number;
    serialize(manifold: btPersistentManifold, dataBuffer: void, serializer: btSerializer): string;
    deSerialize(btPersistentManifoldDoubleData: struct): void;
    deSerialize(btPersistentManifoldFloatData: struct): void;
    get_m_companionIdA(): number;	set_m_companionIdA(value: number): number;
    get_m_companionIdB(): number;	set_m_companionIdB(value: number): number;
    get_m_index1a(): number;	set_m_index1a(value: number): number;
  }
}
