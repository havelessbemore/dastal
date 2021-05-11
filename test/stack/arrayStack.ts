import { expect } from 'chai';
import { ArrayStack } from 'src/stack/arrayStack';

describe('ArrayStack unit tests', function() {

  let empty: ArrayStack<number>;
  let filled: ArrayStack<number>;
  const values = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  beforeEach(function() {
    empty = new ArrayStack();
    filled = new ArrayStack(Array.from(values));
  });

  describe('#clear()', function() {

    it ('Should clear when empty', function() {
      empty.clear();
      expect(empty.size).to.equal(0);
      expect(empty.pop()).to.equal(undefined);
    });

    it ('Should clear value', function() {
      empty.push(12);
      empty.clear();
      expect(empty.size).to.equal(0);
      expect(empty.pop()).to.equal(undefined);
    });

    it ('Should clear values', function() {
      empty.push(1);
      empty.push(2);
      empty.push(3);
      empty.clear();
      expect(empty.size).to.equal(0);
      expect(empty.pop()).to.equal(undefined);
    });
  });

  describe('#pop()', function() {

    it('Should return `undefined` when empty', function() {
      expect(empty.pop()).to.equal(undefined);
      expect(empty.pop()).to.equal(undefined);
    });

    it('Should return the added value', function() {
      empty.push(12);
      expect(empty.pop()).to.equal(12);
      expect(empty.pop()).to.equal(undefined);

    });

    it('Should return the newest added value', function() {
      empty.push(1);
      empty.push(2);
      empty.push(3);
      expect(empty.pop()).to.equal(3);
      expect(empty.pop()).to.equal(2);
      expect(empty.pop()).to.equal(1);
      expect(empty.pop()).to.equal(undefined);

      for(let i = filled.size - 1; i >= 0; --i) {
        expect(filled.pop()).to.equal(values[i]);
      }
    });
  });

  describe('#push()', function() {
    // Nothing to test directly
  });

  describe('#peek()', function() {

    it ('Should return `undefined` when empty', function() {
      expect(empty.peek()).to.equal(undefined);
      expect(empty.peek()).to.equal(undefined);
    });

    it ('Should return the added value', function() {
      empty.push(12);
      expect(empty.peek()).to.equal(12);
    });

    it ('Should return the last added value', function() {
      empty.push(1);
      empty.push(2);
      expect(empty.peek()).to.equal(2);
    });

    it ('Should return the newest added value', function() {
      empty.push(1);
      empty.push(2);
      empty.push(3);
      expect(empty.peek()).to.equal(3);
      empty.pop();
      expect(empty.peek()).to.equal(2);
      empty.pop();
      expect(empty.peek()).to.equal(1);
      empty.pop();
      expect(empty.peek()).to.equal(undefined);

      for(let i = filled.size - 1; i >= 0; --i) {
        expect(filled.peek()).to.equal(values[i]);
        filled.pop();
      }
    });
  });

  describe('#size', function() {

    it('Should show 0 when empty', function() {
      expect(empty.size).to.equal(0);
    });

    it('Should show 1 when value is added', function() {
      empty.push(12);
      expect(empty.size).to.equal(1);
    });

    it('Should show correct size when adding values', function() {
      empty.push(1);
      expect(empty.size).to.equal(1);
      empty.push(1);
      expect(empty.size).to.equal(2);
      empty.push(1);
      expect(empty.size).to.equal(3);
    });

    it('Should show 0 if popping when empty', function() {
      empty.pop();
      expect(empty.size).to.equal(0);
    });

    it('Should show 0 when value is removed', function() {
      empty.push(12);
      empty.pop();
      expect(empty.size).to.equal(0);
    });

    it('Should show correct size when removing values', function() {
      empty.push(1);
      empty.push(1);
      empty.push(1);
      empty.pop();
      expect(empty.size).to.equal(2);
      empty.pop();
      expect(empty.size).to.equal(1);
      empty.pop();
      expect(empty.size).to.equal(0);

      let n = values.length;
      while (n > 0) {
        filled.pop();
        expect(filled.size).to.equal(--n);
      }
    });
  });

  describe('#toArray()', function() {

    it('Should return an array copy of the values', function() {
      const vals: number[] = [];
      expect(empty.toArray()).to.eql(vals);

      for (let i = 0; i < values.length; ++i) {
        empty.push(vals[i] = values[i]);
        expect(empty.toArray()).to.eql(vals);
      }
    });
  });
});