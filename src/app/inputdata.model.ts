export class InputData {
    constructor
    (
        public startAmount: number,
        public stockRatio: number,
        public cashRatio: number,
        public durationYear: number,
        public stockReturn: number,
        public cashReturn: number,
        public id?: number,
    ) { }
}