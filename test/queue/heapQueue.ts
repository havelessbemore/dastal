import { expect } from 'chai';
import { CompareFn } from 'src';
import { BinaryMinHeap } from 'src/heap';
import { HeapQueue } from 'src/queue/heapQueue';

describe('HeapQueue unit tests', function() {

  let empty: HeapQueue<number>;
  let filled: HeapQueue<number>;
  const values = [7, 11, 3, 9, 4, 8, 6, 0, 5, 10, 2];
  const answers = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  beforeEach(function() {
    const compare: CompareFn<number> = (a, b) => a - b;
    empty = new HeapQueue(new BinaryMinHeap<number>({compare}));
    filled = new HeapQueue(new BinaryMinHeap<number>({compare}));
    for (let i = 0; i < values.length; filled.enqueue(values[i++])){
    }
  });

  describe('#clear()', function() {

    it ('Should clear when empty', function() {
      empty.clear();
      expect(empty.size).to.equal(0);
      expect(empty.dequeue()).to.equal(undefined);
    });

    it ('Should clear value', function() {
      empty.enqueue(12);
      empty.clear();
      expect(empty.size).to.equal(0);
      expect(empty.dequeue()).to.equal(undefined);
    });

    it ('Should clear values', function() {
      empty.enqueue(1);
      empty.enqueue(2);
      empty.enqueue(3);
      empty.clear();
      expect(empty.size).to.equal(0);
      expect(empty.dequeue()).to.equal(undefined);
    });
  });

  describe('#dequeue()', function() {

    it('Should return `undefined` when empty', function() {
      expect(empty.dequeue()).to.equal(undefined);
      expect(empty.dequeue()).to.equal(undefined);
    });

    it('Should return the added value', function() {
      empty.enqueue(12);
      expect(empty.dequeue()).to.equal(12);
      expect(empty.dequeue()).to.equal(undefined);

    });

    it('Should return the largest added value', function() {
      empty.enqueue(1);
      empty.enqueue(3);
      empty.enqueue(2);
      expect(empty.dequeue()).to.equal(1);
      expect(empty.dequeue()).to.equal(2);
      expect(empty.dequeue()).to.equal(3);
      expect(empty.dequeue()).to.equal(undefined);

      for(let i = 0; i < answers.length; ++i) {
        expect(filled.dequeue()).to.equal(answers[i]);
      }
    });
  });

  describe('#enqueue()', function() {
    // Nothing to test directly
  });

  describe('#peek()', function() {

    it ('Should return `undefined` when empty', function() {
      expect(empty.peek()).to.equal(undefined);
      expect(empty.peek()).to.equal(undefined);
    });

    it ('Should return the added value', function() {
      empty.enqueue(12);
      expect(empty.peek()).to.equal(12);
    });

    it ('Should return the first added value', function() {
      empty.enqueue(1);
      empty.enqueue(2);
      expect(empty.peek()).to.equal(1);
    });

    it ('Should return the oldest added value', function() {
      empty.enqueue(1);
      empty.enqueue(2);
      empty.enqueue(3);
      expect(empty.peek()).to.equal(1);
      empty.dequeue();
      expect(empty.peek()).to.equal(2);
      empty.dequeue();
      expect(empty.peek()).to.equal(3);
      empty.dequeue();
      expect(empty.peek()).to.equal(undefined);

      for(let i = 0; i < answers.length; ++i) {
        expect(filled.peek()).to.equal(answers[i]);
        filled.dequeue();
      }
    });
  });

  describe('#size', function() {

    it('Should show 0 when empty', function() {
      expect(empty.size).to.equal(0);
    });

    it('Should show 1 when value is added', function() {
      empty.enqueue(12);
      expect(empty.size).to.equal(1);
    });

    it('Should show correct size when adding values', function() {
      empty.enqueue(1);
      expect(empty.size).to.equal(1);
      empty.enqueue(1);
      expect(empty.size).to.equal(2);
      empty.enqueue(1);
      expect(empty.size).to.equal(3);
    });

    it('Should show 0 if popping when empty', function() {
      empty.dequeue();
      expect(empty.size).to.equal(0);
    });

    it('Should show 0 when value is removed', function() {
      empty.enqueue(12);
      empty.dequeue();
      expect(empty.size).to.equal(0);
    });

    it('Should show correct size when removing values', function() {
      empty.enqueue(1);
      empty.enqueue(1);
      empty.enqueue(1);
      empty.dequeue();
      expect(empty.size).to.equal(2);
      empty.dequeue();
      expect(empty.size).to.equal(1);
      empty.dequeue();
      expect(empty.size).to.equal(0);

      let n = values.length;
      while (n > 0) {
        filled.dequeue();
        expect(filled.size).to.equal(--n);
      }
    });
  });

  describe('#[Symbol.iterator]()', function() {

    it('Should return an array copy of the values', function() {
      const vals: number[] = [];
      expect(Array.from(empty)).to.eql(vals);

      for (let i = 0; i < values.length; ++i) {
        empty.enqueue(vals[i] = values[i]);
        expect(Array.from(empty)).to.eql(vals.sort((a, b) => a - b));
      }
    });
  });
});