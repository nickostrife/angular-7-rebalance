export class InputData {

    // TRY make it into a contructor
    // id?: number;
    // startAmount: number;
    // stockRatio: number;
    // cashRatio: number;
    // durationYear: number;
    // stockReturn: number;
    // cashReturn: number;

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