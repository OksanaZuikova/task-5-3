interface ObjectA {
    [key: string]: undefined | {
        cvalue: string | number | undefined | ObjectA;
    };
}
declare const testObj: ObjectA;
declare function summ(a: ObjectA): number;
//# sourceMappingURL=index.d.ts.map