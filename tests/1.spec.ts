import { expect } from 'chai';

describe('Spec 1', () => {
    it('test 1', () => {
        expect(1).to.eql(1);
    });

    it('test 2', () => {
        expect(1).to.eql(1);
    });

    it('test 3', () => {
        expect(1).to.eql(1);
    });

    it('test 4', () => {
        // tslint:disable-next-line:no-console
        console.log(process.env.KEY);
        // tslint:disable-next-line:no-unused-expression
        expect(process.env.KEY).to.include('my');
    });
});
