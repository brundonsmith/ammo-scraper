declare module Ammo {
  declare class btPersistentManifold {
    constructor();
    constructor(body0: btCollisionObject, body1: btCollisionObject, t: in, contactBreakingThreshold: number, contactProcessingThreshold: number);
    constructor();

    get_m_companionIdB(): number;	set_m_companionIdB(value: number): number;
    get_m_companionIdA(): number;	set_m_companionIdA(value: number): number;
    get_m_index1a(): number;	set_m_index1a(value: number): number;

    addManifoldPoint(newPoint: btManifoldPoint, isPredictive: boolean): number;
    clearUserCache(pt: btManifoldPoint): void;
    clearManifold(): void;
    calculateSerializeBufferSize(): number;
    deSerialize(btPersistentManifoldDoubleData: struct): void;
    deSerialize(btPersistentManifoldFloatData: struct): void;
    getContactBreakingThreshold(): number;
    getContactProcessingThreshold(): number;
    getBody1(): btCollisionObject;
    getBody0(): btCollisionObject;
    getCacheEntry(newPoint: btManifoldPoint): number;
    getContactPoint(index: number): btManifoldPoint;
    getNumContacts(): number;
    getContactPoint(index: number): btManifoldPoint;
    refreshContactPoints(trA: btTransform, trB: btTransform): void;
    replaceContactPoint(newPoint: btManifoldPoint, insertIndex: number): void;
    removeContactPoint(index: number): void;
    serialize(manifold: btPersistentManifold, dataBuffer: void, serializer: btSerializer): string;
    setBodies(body0: btCollisionObject, body1: btCollisionObject): void;
    setContactBreakingThreshold(contactBreakingThreshold: number): void;
    setNumContacts(cachedPoints: number): void;
    setContactProcessingThreshold(contactProcessingThreshold: number): void;
    validContactDistance(pt: btManifoldPoint): boolean;
  }
}
