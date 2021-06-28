Inspired by [Tristan Hume's IForestIndex](https://thume.ca/2021/03/14/iforests) ([github](https://github.com/trishume/gigatrace)).  

An InOrderSegmentTree is a SegmentTree that's internally represented as a binary
tree within an array, with nodes stored in in-order traversal. The tree's leaf nodes
represent the elements of the segment tree.

## Complexity

### Space  

2n - 1

### Time

| Operation | |  Best | Worst | Amortized |
|---|---|---|---|---|
| build | 2n | | | |
| Pop() | 2 |
| Push() | lsb(n + 1) | 1 | log<sub>2</sub>(n) | 2 |
| Query() | log<sub>2</sub>(n) | 1 | log<sub>2</sub>(n) + 1 | log<sub>2</sub>(n) - 1 |
| Update() | log<sub>2</sub>(n/k) + 2k - 2 | 2k - 1 | log<sub>2</sub>(n) + 2k - 2 | |

## Illustration

```
                                                                                                                            +
                             /''''''''''''''''''''''''''''''+''''''''''''''''''''''''''''''\                                |
             /''''''''''''''+''''''''''''''\                |               /'''''''''''''''+''''''''''''''\                |
     /''''''+''''''\        |        /''''''+'''''\         |        /''''''+'''''\         |        /''''''+'''''\         |
 /''+''\    |    /''+''\    |    /''+''\    |    /''+''\    |    /''+''\    |    /''+''\    |    /''+''\    |    /''+''\    |
0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
---------------------------------------------------------------------------------------------------------------------------------
0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0   1   0
0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0   0   1   1   0
0   0   0   0   1   1   1   1   0   0   0   0   1   1   1   1   0   0   0   0   1   1   1   1   0   0   0   0   1   1   1   1   0
0   0   0   0   0   0   0   0   1   1   1   1   1   1   1   1   0   0   0   0   0   0   0   0   1   1   1   1   1   1   1   1   0
0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   0
0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   1
```

Given this layout, we can observe:
1. All leaf nodes have even indices
2. All interior nodes have odd indices

Getting more specific, the internal array can be viewed as 
not holding one binary tree, but rather a set of perfect binary trees. 
A perfect binary tree is a binary tree in which all interior nodes have 
two children and all leaves have the same depth ([source](https://en.wikipedia.org/wiki/Binary_tree)).
Until stated otherwise, all mentions of "tree" or "subtree" henceforth
is shorthand for "perfect binary tree" (since the subtree
of a perfect binary tree is also a perfect binary tree).

## Operations

### Push()

As elements are inserted, an internal node is inserted with it and
trees are joined when doing so can create a larger tree.

Example 1: Let's say our data structure has 3 elements. In our array,
this would be two trees: The first with root at index 1 and the
second with root at index 4 (a single-element tree). The node 
at index 3 not associated with any tree for now; let's say this 
node is unclaimed.
```
            +
 /''+''\    |
0   1   2   3   4
```
Example 2: Now let's say a new element is inserted. We now have 
3 trees with root indices 1, 4 and 6.
```
            +
 /''+''\    |       +
0   1   2   3   4   5   6
```
The trees with root indices 4 and 6 can be combined to form a
larger tree with root index 5. The value of the new root
becomes the aggregated value of its left and right children 
(i.e. the two previous roots).
```
            +
 /''+''\    |    /''+''\
0   1   2   3   4   5   6
```
Now both trees (root indices 1 and 5) can be combined to form a
larger tree with root index 3.
```
     /''''''+''''''\
 /''+''\    |    /''+''\
0   1   2   3   4   5   6
```
We can see that the process of joining trees occurs iteratively
from right to left, starting at the newly inserted element,
until trees cannot be combined with its left-hand neighbor.

Example 3: When the element at index 12 (below) was inserted,
it could not be combined with its left-hand neighbor, so we are 
left with 3 trees (root indices 3, 9 and 12).
```
                            +
     /''''''+''''''\        |               +
 /''+''\    |    /''+''\    |    /''+''\    |
0   1   2   3   4   5   6   7   8   9  10  11  12
```
If another element is added, there would briefly be 4 trees, which
would be combined from right to left until there is only one tree
with root index 7.
```
             /''''''''''''''+''''''''''''''\
     /''''''+''''''\        |        /''''''+''''''\
 /''+''\    |    /''+''\    |    /''+''\    |    /''+''\
0   1   2   3   4   5   6   7   8   9  10  11  12  13  14
```
So we can observe that trees on the left are larger than trees on
the right in strictly descending order. There is only
one tree with a given size / height at a time, and trees are joined
if they are the same size / height.

### Pop()

If an element is removed, the internal node inserted with it is also
removed. Going back to Example #2, if the last element (index 6) were
removed, the data structure returns to having two trees, with index 3 
unclaimed. And since relationships between nodes are implied by their 
index, no further work is needed.
```
            +
 /''+''\    |
0   1   2   3   4
```
If in the future a new element is inserted, there will once again
be enough elements to combine the trees. At that time, the Push
operation will automatically reclaim the node at index 3 and 
update it to be the aggregated value of its children.

### Query()

We can see visually that nodes at the same height h occur at intervals
of 2^h. For instance, leaf nodes (h = 1) occur every 2 indices, their
parents (h = 2) every 4 indices, trees of h = 3 every 8 indices, etc.
For any subtree with root node N at index i:

3. The height N_h is: lsb(N_i+1)
4. The number of leaf nodes N_l is: 2^N_h
5. The total number of nodes (size) N_s is: 2^(N_h+1) - 1 = 2*N_l - 1
6. The root node's index N_i is: 2^N_h - 1 = (N_s - 1) / 2
7. The most left leaf L's index L_i is: N_i & (N_i+1)
8. The most right leaf R's index R_i is: (N_i | (N_i+1)) - 1
9. The size N_s can also be calculated as: R_i - L_i + 1
10. The leftmost leaf of the tree's next neighbor is: R_i + 2 = L_i + N_s + 1

From a leaf's perspective, we can observe that for any leaf node L at index L_i:

11. The largest tree with root N of which it is the leftmost leaf is: L_i - 1 + lsp(L_i)/2
12. The rightmost leaf R of N is: L_i + lsp(L_i) - 2
13. The size of N's subtree N_s is: R_i - L_i + 1 = L_i + lsp(L_i) - 2 - L_i + 1 = lsp(L_i) - 1
14. The leftmost leaf of the tree's next neighbor is: R_i + 2 = L_i + lsp(L_i) + 1

Restructuring 11 - 14, we get:

11. N_i = L_i - 1 + ((N_s + 1) / 2)
12. R_i = L_i + N_s - 1
13. N_s = R_i - L_i + 1 = lsp(L_i) - 1.
14. R_i + 2 = L_i + N_s + 1

15. Following from 4 & 5, a tree's size roughly doubles as its height increases; To
merge a tree with x elements, 2*x total elements is required. If a segment tree has
y elements such that x < y < 2x, then it cannot be merged and there will still be multiple
trees. The largest tree in this case has 2**floor(log2(y)) elements, which is equal to msp(y).

16. Let's say we want to query for the first tree fully within a given range. The range
is defined by indices min and max where A) both represent leaf nodes, B) min < max and
C) max is exclusive. From 13, we know the size of the largest tree min could be a part of is:
- N_s = lsp(min) - 1
From 12, we know the index of the tree's rightmost leaf node is:
- R_i = L_i + N_s - 1 = min + lsp(min) - 2
Since max is exclusive, max must be greater than R_i. From 14:
- The tree's neighboring leaf node is R_i + 2
Thus:
- max >= R_i + 2 = min + lsp(min)
- max - min >= lsp(min)

17. From 1, we know that there are (max - min)/2 leaf nodes in the range. From 5 & 15, we know
that the largest tree with y leaf nodes has msp(y) leaves:
- N_l = msp((max - min)/2) = msp(max - min) / 2
- N_s = 2*N_l - 1 = 2*msp(max - min) / 2 - 1 = msp(max - min) - 1
- R_i = min + N_s - 1 = min + msp(max - min) - 2
From 14:
- R_i + 2 = min + msp(max - min)
Similar to 16:
- max >= R_i + 2 = min + msp(max - min)
- max - min >= msp(max - min)

With 15 - 17, we have found 2 definitions for the first and largest tree within [min, max); its size and
its rightmost node. 16 shows that at minimum the size of the range must be lsp(min) for the tree to
be within it. 17 shows the minimum size of the range must be msp(max - min). Combined:
18. R_i + 2 = min + Math.min(lsp(min), msp(max - min))

Since both inputs to Math.min() are powers of 2, it can be reformulated as:
18. R_i + 2 = min + lsp(min | msp(max - min))

We can finally say: given [min, max), the first and largest tree within it has the following properties:
- Its leftmost leaf has index min
- From 18, its size is N_s = lsp(min | msp(max - min)) - 1
- From 12, its rightmost leaf is R_i = min + N_s - 1
- From 14, its neighbor's leftmost leaf is: R_i + 2 = min + N_s + 1 = min + lsp(min | msp(max - min))
- From 11, its root is N_i = min - 1 + ((N_s + 1) / 2)
= min - 1 + (lsp(min | msp(max - min)) - 1 + 1) / 2
= min - 1 + lsp(min | msp(max - min))/2

### Update()

To understand Update(), let's first revisit Push(). Push() can 
be reframed as a specific use  of the Update 
operation that takes advantage of certain assumptions to 
simplify its logic. The real Update() cannot do the same.
```
                            +
     /''''''+''''''\        |
 /''+''\    |    /''+''\    | 
0   1   2   3   4   5  6    7   8
```
Let's say we have 5 elements (shown above). We'd describe this as
2 individual trees (root indices 3 and 8) with index 7 unclaimed.

The first assumption is that Push() is only for one element. 
Update(), like Query(), works on a range defined by indices 
min (inclusive) and max (exclusive), where min < max and both 
indices are for leaf nodes.

The second assumption is that Push() is an update that is always 
on the rightmost path of a tree. This let us move strictly leftward 
as we combined trees (i.e. update internal nodes). Since Update() 
should work on any element, we now also have to follow left-to-right 
paths upwards from child to parent. For instance, if the element at 
index 2 were updated with Push()'s logic, only indices 2 and 1 would 
be updated. A real update would have to continue moving upwards by going 
right to index 3.

Example 5: Let's say we have the array below and we want to update
range (2, 10] (i.e leaf nodes 2, 4, 6 and 8).
```
                            +
     /''''''+''''''\        |
 /''+''\    |    /''+''\    |
0   1   2   3   4   5   6   7   8
```
The update will be done in 2 stages. For the first stage, we will notice
that Push() works really well for updating up leftward edges of a tree.
Since a subtree is just a smaller tree, it can
work just as well here. When index 2 is updated, Push()'s logic 
says that so will index 1. Index 4 only updates itself. Index 6 also 
updates indices 5 and 3. At this point, all internal updates up to 
root index 3 have been taken care of. Index 8 updates itself and now 
we've reached completed our update.

Example 6: Now let's say we want to update the same range [2, 10) but 
our array now looks like:
```
                            +
     /''''''+''''''\        |
 /''+''\    |    /''+''\    |    /''+''\
0   1   2   3   4   5   6   7   8   9  10
```
Like before, the first stage correctly updates indices 2-6 and 8.
However, index 9 still needs to be updated by the second stage.

Example 7: Lastly, let's say we want to update the same range 
[2, 10) one more time but our array is now:
```
             /''''''''''''''+''''''''''''''\
     /''''''+''''''\        |        /''''''+'''''\
 /''+''\    |    /''+''\    |    /''+''\    |    /''+''\
0   1   2   3   4   5   6   7   8   9  10  11  12  13  14
```
Once again, the first stage correctly updates indices 2-6 and 8.
However, now we need to update the remaining indices 9, 11 and 7.

Examples 5-7 show that the second stage can focus on updating
the path to the root of the last updated leaf node. In order
to determine the root, we need to know the last node's index
as well as the size of the array.

To be continued!