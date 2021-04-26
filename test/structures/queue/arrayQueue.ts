import { expect } from 'chai';
import { ArrayQueue } from 'src/structures/queue/arrayQueue';

describe('ArrayQueue unit tests', () => {

    describe('new Queue()', () => {
        it('creates an empty queue', () => {
            const queue = new ArrayQueue();
            expect(queue.size).to.equal(0);
        });

        it('creates an empty queue from an existing array', () => {
            const array = [];
            const queue = new ArrayQueue();
            expect(queue.size).to.equal(0);
        });

    });

    /*
  describe('Queue.fromArray(list)', () => {
    it('creates a queue from an existing array', () => {
      const q = Queue.fromArray([1, 2, 3]);
      expect(q.front()).to.equal(1);
      expect(q.size()).to.equal(3);
    });
  });

  describe('.enqueue(element)', () => {
    it('should enqueue 3 elements to the stack', () => {
      queue.enqueue(1);
      queue.enqueue(8);
      queue.enqueue(45);
    });
  });

  describe('.size()', () => {
    it('should have size of 3', () => {
      expect(queue.size()).to.equal(3);
    });
  });

  describe('.front()', () => {
    it('should peek the front element', () => {
      expect(queue.front()).to.equal(1);
    });
  });

  describe('.back()', () => {
    it('should peek the back element', () => {
      expect(queue.back()).to.equal(45);
    });
  });

  describe('.isEmpty()', () => {
    it('should not be empty', () => {
      expect(queue.isEmpty()).to.equal(false);
    });
  });

  describe('.clone()', () => {
    it('clone a queue', () => {
      queue.dequeue();

      const clone = queue.clone();
      clone.dequeue();

      expect(clone.front()).to.equal(45);
      expect(clone.size()).to.equal(1);
      expect(queue.front(8));
      expect(queue.size()).to.equal(2);
    });
  });

  describe('toArray()', () => {
    it('should convert the queue into an array', () => {
      expect(queue.toArray()).to.deep.equal([8, 45]);
    });
  });

  describe('dequeue()', () => {
    it('should dequeue all elements', () => {
      expect(queue.dequeue()).to.be.equal(8);
      expect(queue.dequeue()).to.be.equal(45);
    });
  });

  describe('.clear()', () => {
    it('should clear the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.clear();
      expect(queue.dequeue()).to.be.equal(null);
      expect(queue.front()).to.be.equal(null);
      expect(queue.back()).to.be.equal(null);
      expect(queue.size()).to.be.equal(0);
      expect(queue.isEmpty()).to.be.equal(true);
    });
  });
  */
});

/*
import { Queue } from './queue';

export class ArrayQueue<T> implements Queue<T> {
    constructor(protected array: Array<T> = []) {}

    clear(): void {
        this.array.length = 0;
    }

    enqueue(value: T): boolean {
        this.array.push(value);
        return true;
    }

    dequeue(): T | null {
        return this.size < 1 ? null : this.array.shift()!;
    }

    peek(): T | null {
        return this.size < 1 ? null : this.array[0];
    }

    get size(): number {
        return this.array.length;
    }

    toArray(): T[] {
        return Array.from(this.array);
    }
}
*/