export class Counter {
    constructor(baseCount = 0) {
        this._count = baseCount;
    }

    increment(i = 1) {
        this._count+=i;
    }

    reset() {
        this._count = 0;
    }

    get count() {
        return this._count;
    }
}