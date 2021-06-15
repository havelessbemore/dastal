import { expect } from 'chai';
import { BinaryTreeNode } from 'src/tree';
import {
    clone,
    inOrderTraverse,
    leftmost,
    levelOrderTraverse,
    predecessor,
    rightmost,
    successor,
    toBinaryTree,
} from 'src/tree/binaryTreeUtils';

describe('tree/binaryTreeUtils unit tests', function () {
    const compareFn = (a: number, b: number) => a - b;
    const values = [
        16, 8, 24, 4, 12, 20, 28, 2, 6, 10, 14, 18, 22, 26, 30, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19,
        21, 23, 25, 27, 29, 31,
    ];
    const tree = toBinaryTree(values)!;
    describe('#clone()', function () {
        it('Should return undefined if undefined given', function () {
            expect(clone(undefined)).to.equal(undefined);
        });
        it('Should return a copy of the node', function () {
            const node: BinaryTreeNode<number> = { value: 12 };
            const copy = clone(node);
            expect(copy).to.not.equal(node);
            expect(copy.value).to.equal(node.value);
        });
        it('Should return a copy of the tree', function () {
            const copy = clone(tree);
            expect(copy).to.not.equal(tree);
            expect(Array.from(levelOrderTraverse(copy)).map((n) => n.value)).to.eql(values);
        });
    });
    describe('#leftmost()', function () {
        it('Should return undefined if undefined given', function () {
            expect(leftmost(undefined)).to.equal(undefined);
        });
        it('Should return the node', function () {
            const node: BinaryTreeNode<number> = { value: 12 };
            const res = leftmost(node);
            expect(res).to.equal(node);
        });
        it('Should return the leftmost node', function () {
            const res = leftmost(tree);
            expect(res.value).to.equal(values[2 ** Math.floor(Math.log2(values.length)) - 1]);
        });
    });
    describe('#inOrderTraverse()', function () {
        it('Should work with undefined', function () {
            expect(Array.from(inOrderTraverse(undefined))).to.eql([]);
        });
        it('Should work with a node', function () {
            const node: BinaryTreeNode<number> = { value: 12 };
            expect(Array.from(inOrderTraverse(node)).map((n) => n.value)).to.eql([12]);
        });
        it('Should work with a tree', function () {
            const actual = Array.from(inOrderTraverse(tree)).map((n) => n.value);
            const expected = Array.from(values).sort(compareFn);
            expect(actual).to.eql(expected);
        });
    });
    describe('#levelOrderTraverse()', function () {
        it('Should work with undefined', function () {
            expect(Array.from(levelOrderTraverse(undefined))).to.eql([]);
        });
        it('Should work with a node', function () {
            const node: BinaryTreeNode<number> = { value: 12 };
            expect(Array.from(levelOrderTraverse(node)).map((n) => n.value)).to.eql([12]);
        });
        it('Should work with a tree', function () {
            const actual = Array.from(levelOrderTraverse(tree)).map((n) => n.value);
            expect(actual).to.eql(values);
        });
    });
    describe('#postOrderTraverse()', function () {
        it('TODO');
    });
    describe('#predecessor()', function () {
        it('Should return undefined if undefined given', function () {
            expect(predecessor(undefined)).to.equal(undefined);
        });
        it('Should return undefined if no left child', function () {
            const node: BinaryTreeNode<number> = { value: 12 };
            const res = predecessor(node);
            expect(res).to.equal(undefined);
        });
        it('Should return the left child', function () {
            const node: BinaryTreeNode<number> = { left: { value: 10 }, value: 12 };
            const res = predecessor(node)!;
            expect(res).to.equal(node.left);
            expect(res.value).to.equal(node.left!.value);
        });
        it('Should return the predecessor', function () {
            const res = predecessor(tree)!;
            expect(res.value).to.equal(values[22]);
        });
    });
    describe('#preOrderTraverse()', function () {
        it('TODO');
    });
    describe('#reverse()', function () {
        it('TODO');
    });
    describe('#rightmost()', function () {
        it('Should return undefined if undefined given', function () {
            expect(rightmost(undefined)).to.equal(undefined);
        });
        it('Should return the node', function () {
            const node: BinaryTreeNode<number> = { value: 12 };
            const res = rightmost(node);
            expect(res).to.equal(node);
        });
        it('Should return the rightmost node', function () {
            const res = rightmost(tree);
            expect(res.value).to.equal(values[2 ** Math.ceil(Math.log2(values.length)) - 2]);
        });
    });
    describe('#search()', function () {
        it('TODO');
    });
    describe('#successor()', function () {
        it('Should return undefined if undefined given', function () {
            expect(successor(undefined)).to.equal(undefined);
        });
        it('Should return undefined if no right child', function () {
            const node: BinaryTreeNode<number> = { value: 12 };
            const res = successor(node);
            expect(res).to.equal(undefined);
        });
        it('Should return the right child', function () {
            const node: BinaryTreeNode<number> = { right: { value: 10 }, value: 12 };
            const res = successor(node)!;
            expect(res).to.equal(node.right);
            expect(res.value).to.equal(node.right!.value);
        });
        it('Should return the successor', function () {
            const res = successor(tree)!;
            expect(res.value).to.equal(values[23]);
        });
    });
    describe('#toBinaryTree()', function () {
        it('TODO');
    });
});
