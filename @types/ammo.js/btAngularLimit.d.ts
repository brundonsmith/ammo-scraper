declare module Ammo {
  declare class btAngularLimit {
    constructor();
    set(low: number, high: number, _softness: number, _biasFactor: number, _relaxationFactor: number): void;
    test(angle: number): void;
    getSoftness(): number;
    getBiasFactor(): number;
    getRelaxationFactor(): number;
    getCorrection(): number;
    getSign(): number;
    getHalfRange(): number;
    isLimit(): boolean;
    fit(angle: number): void;
    getError(): number;
    getLow(): number;
    getHigh(): number;
  }
}
