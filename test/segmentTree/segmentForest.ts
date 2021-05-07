import { expect } from 'chai';
import { SegmentForest } from 'src/segmentTree/segmentForest';

describe('SegmentForest unit tests', function() {

  let empty: SegmentForest<number>;
  let filled: SegmentForest<number>;
  const values = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const updatedValues = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

  function permutate(forest: SegmentForest<number>, vals: number[]) {
    for (let size = 1; size <= forest.size; ++size) {
      let max = 0;
      let min = 0;
      let sum = 0;
      
      do {
        sum += vals[max++];
      } while (max < size);
      // console.log(`[${min}, ${max}) = ${sum}`);
      expect(forest.query(min, max)).to.equal(sum);

      while (max < forest.size) {
        sum -= vals[min++];
        sum += vals[max++];
        // console.log(`[${min}, ${max}) = ${sum}`);
        expect(forest.query(min, max)).to.equal(sum);
      }
    }
  }

  beforeEach(function() {
    empty = new SegmentForest((a, b) => a + b);
    filled = new SegmentForest((a, b) => a + b, values);
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
    });

    it('Should return the last added value', function() {
      empty.push(12);
      expect(empty.pop()).to.equal(12);
      expect(empty.pop()).to.equal(undefined);

    });

    it('Should return the last added values', function() {
      empty.push(1);
      empty.push(2);
      empty.push(3);
      expect(empty.pop()).to.equal(3);
      expect(empty.pop()).to.equal(2);
      expect(empty.pop()).to.equal(1);
      expect(empty.pop()).to.equal(undefined);
    });

    it ('Should not break aggregation', function () {
      while (filled.size > 1) {
        filled.pop();
        permutate(filled, values);
      }
    });
  });

  describe('#push()', function() {

    it ('Should not break aggregation', function () {
      for (const value of values) {
        empty.push(value);
        permutate(empty, values);
      }
    });
  });

  describe('#query()', function() {

    it ('Should throw error when querying an empty forest', function() {
      expect(() => empty.query(0, 0)).to.throw(RangeError);
    });

    it ('Should throw error when querying below the actual range', function() {
      empty.push(12);
      expect(() => empty.query(-10, -5)).to.throw(RangeError);
      expect(() => empty.query(-5, 1)).to.throw(RangeError);
      expect(() => empty.query(-5, 5)).to.throw(RangeError);
    });

    it ('Should throw error when querying after the actual range', function() {
      empty.push(12);
      expect(() => empty.query(5, 10)).to.throw(RangeError);
      expect(() => empty.query(0, 5)).to.throw(RangeError);
      expect(() => empty.query(-5, 5)).to.throw(RangeError);
    });

    it ('Should throw error when querying an empty range', function() {
      empty.push(12);
      expect(() => empty.query(0, 0)).to.throw(RangeError);
    });

    it ('Should return the queried value', function() {
      empty.push(12);
      expect(empty.query(0, 1)).to.equal(12);
    });

    it ('Should return the value when querying for a range of size 1', function() {
      for (let i = 0; i < filled.size; ++i) {
        expect(filled.query(i, i+1)).to.equal(values[i]);
      }
    });

    it ('Should return aggregated values when querying for ranges of size > 1', function() {
      permutate(filled, values);
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
    });
  });

  describe('#update()', function() {

    it ('Should work when empty', function() {
      expect(() => empty.update(0, 0, v => v)).to.not.throw(RangeError);
    });

    it ('Should work with empty range', function() {
      expect(() => filled.update(5, 5, v => v)).to.not.throw(RangeError);
      expect(() => filled.update(5, 0, v => v)).to.not.throw(RangeError);
    });

    it ('Should throw error when querying below the actual range', function() {
      expect(() => filled.update(-10, -5, v => v)).to.throw(RangeError);
      expect(() => filled.update(-5, 0, v => v)).to.throw(RangeError);
      expect(() => filled.update(-5, 5, v => v)).to.throw(RangeError);
    });

    it ('Should throw error when querying after the actual range', function() {
      empty.push(12);
      expect(() => empty.update(5, 10, v => v)).to.throw(RangeError);
      expect(() => empty.update(1, 5, v => v)).to.throw(RangeError);
      expect(() => empty.update(0, 5, v => v)).to.throw(RangeError);
      expect(() => empty.update(-5, 5, v => v)).to.throw(RangeError);
    });
    
    it('Should correctly update a forest', function() {
      for (let size = 1; size <= values.length; ++size) {
        let max = size;
        for (let min = 0; max <= values.length; ++min, ++max) {
          const forest = new SegmentForest((a, b) => a + b, values);
          const vals = Array.from(values);
          for (let i = min; i < max; ++i) {
            vals[i] = updatedValues[i];
          }
          // console.log('BEFORE     :', values.join(', '));
          // console.log(`AFTER[${min}, ${max}):`, vals.join(', '));
          forest.update(min, max, (_, i) => vals[i]);
          permutate(forest, vals);
        }
      }
    });
  });
});