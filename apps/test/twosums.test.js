import twoSums from "../questions/twosums";
import { expect } from "./tools/assertions";

describe.only('Testing TwoSums.', () => {
    it('should get two sum array. For: [1,3,5,7,9]', () => {
        const array = [1,3,5,7,9];
        const result = twoSums(array);
        expect(result).to.be.eql([[1,9], [3,7]]);
    });

    it('should get two sum array. For: [9,7,5,3,1]', () => {
        const array = [1,3,5,7,9].reverse();
        const result = twoSums(array);
        expect(result).to.be.eql([[1,9].reverse(), [3,7].reverse()]);
    });

    it('should get two sum array. For: [1,9,1,9]', () => {
        const array = [1,9,1,9];
        const result = twoSums(array);
        expect(result).to.be.eql([[1,9], [1,9]]);
    });

    it('should get two sum array. For: [9,1,9,1]', () => {
        const array = [1,9,1,9].reverse();
        const result = twoSums(array);
        expect(result).to.be.eql([[1,9].reverse(), [1,9].reverse()]);
    });
});