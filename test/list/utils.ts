import { expect } from 'chai';
import { randomFill } from 'crypto';
import { CompareFn } from 'src';
import { LinkedNode } from 'src/list';
import { linkedMergeSort } from 'src/list/utils';

describe('List.utils unit tests', function () {
    const compareFn: CompareFn<number> = (a, b) => a - b;
    const values = getRandomArray(36);

    function getRandomArray(length: number): number[] {
        const arr = new Uint32Array(length);
        // eslint-disable-next-line
        randomFill(arr, (_) => {});
        return Array.from(arr);
    }

    function toArray<T>(list: LinkedNode<T> | undefined): T[] {
        const arr: T[] = [];
        while (list) {
            arr.push(list.value);
            list = list.next;
        }
        return arr;
    }

    function toList<T>(arr: ArrayLike<T>): LinkedNode<T> | undefined {
        const n = arr.length;
        const root = {} as LinkedNode<T>;
        let node = root;
        for (let i = 0; i < n; ++i) {
            node = node.next = { value: arr[i] };
        }
        return root.next;
    }

    describe('#linkedMergeSort()', function () {
        it('Should work on a single element list', function () {
            const list = toList([12])!;
            const actual = linkedMergeSort(list, 1, false, compareFn);
            expect(actual[0]).to.equal(list);
            expect(actual[1]).to.equal(list);
        });
        it('Should sort the list', function () {
            for (let i = 1; i <= values.length; ++i) {
                const expected = values.slice(0, i);
                const list = toList(expected)!;
                expected.sort(compareFn);
                const res = linkedMergeSort(list, expected.length, false, compareFn);
                const actual = toArray(res[0]);
                expect(res[0].value).to.equal(expected[0]);
                expect(res[1].value).to.equal(expected[i - 1]);
                expect(actual).to.eql(expected);
            }
        });
    });
    describe('#linkedMergeSorted()', function () {
        it('TODO');
    });
});
