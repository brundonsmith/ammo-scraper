declare module Ammo {
  declare class btAngularLimit {
    constructor();


    fit(angle: number): void;
    getLow(): number;
    getSoftness(): number;
    getBiasFactor(): number;
    getRelaxationFactor(): number;
    getCorrection(): number;
    getError(): number;
    getHalfRange(): number;
    getHigh(): number;
    getSign(): number;
    isLimit(): boolean;
    set(low: number, high: number, _softness: number, _biasFactor: number, _relaxationFactor: number): void;
    test(angle: number): void;
  }
}
