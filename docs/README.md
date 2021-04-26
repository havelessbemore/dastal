dastal - v1.0.0

# dastal - v1.0.0

## Table of contents

### Classes

- [ArrayList](classes/arraylist.md)
- [ArrayQueue](classes/arrayqueue.md)
- [ArrayStack](classes/arraystack.md)
- [BinaryHeap](classes/binaryheap.md)
- [BinaryMaxHeap](classes/binarymaxheap.md)
- [BinaryMinHeap](classes/binaryminheap.md)
- [HeapQueue](classes/heapqueue.md)
- [LinkedList](classes/linkedlist.md)
- [ListQueue](classes/listqueue.md)
- [ListStack](classes/liststack.md)

### Interfaces

- [Comparator](interfaces/comparator.md)
- [ComparatorFn](interfaces/comparatorfn.md)
- [Heap](interfaces/heap.md)
- [LinkedNode](interfaces/linkednode.md)
- [List](interfaces/list.md)
- [Queue](interfaces/queue.md)
- [Sortable](interfaces/sortable.md)
- [SortableFn](interfaces/sortablefn.md)
- [Sorted](interfaces/sorted.md)
- [Stack](interfaces/stack.md)

### Functions

- [bubbleUp](README.md#bubbleup)
- [heapify](README.md#heapify)
- [maxHeapify](README.md#maxheapify)
- [minHeapify](README.md#minheapify)
- [sinkDown](README.md#sinkdown)

## Functions

### bubbleUp

▸ **bubbleUp**<T\>(`index`: *number*, `ate`: (`a`: T, `b`: T) => *boolean*, `array`: T[]): *void*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `ate` | (`a`: T, `b`: T) => *boolean* |
| `array` | T[] |

**Returns:** *void*

Defined in: [algorithms/heapify.ts:18](https://github.com/havelessbemore/dastal/blob/5fab342/src/algorithms/heapify.ts#L18)

___

### heapify

▸ **heapify**<T\>(`ate`: (`a`: T, `b`: T) => *boolean*, `array`: T[]): *void*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `ate` | (`a`: T, `b`: T) => *boolean* |
| `array` | T[] |

**Returns:** *void*

Defined in: [algorithms/heapify.ts:11](https://github.com/havelessbemore/dastal/blob/5fab342/src/algorithms/heapify.ts#L11)

___

### maxHeapify

▸ **maxHeapify**<T\>(`comparator`: [*Comparator*](interfaces/comparator.md)<T\>, `array`: T[]): *void*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `comparator` | [*Comparator*](interfaces/comparator.md)<T\> |
| `array` | T[] |

**Returns:** *void*

Defined in: [algorithms/heapify.ts:3](https://github.com/havelessbemore/dastal/blob/5fab342/src/algorithms/heapify.ts#L3)

___

### minHeapify

▸ **minHeapify**<T\>(`comparator`: [*Comparator*](interfaces/comparator.md)<T\>, `array`: T[]): *void*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `comparator` | [*Comparator*](interfaces/comparator.md)<T\> |
| `array` | T[] |

**Returns:** *void*

Defined in: [algorithms/heapify.ts:7](https://github.com/havelessbemore/dastal/blob/5fab342/src/algorithms/heapify.ts#L7)

___

### sinkDown

▸ **sinkDown**<T\>(`index`: *number*, `ate`: (`a`: T, `b`: T) => *boolean*, `array`: T[]): *void*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `ate` | (`a`: T, `b`: T) => *boolean* |
| `array` | T[] |

**Returns:** *void*

Defined in: [algorithms/heapify.ts:39](https://github.com/havelessbemore/dastal/blob/5fab342/src/algorithms/heapify.ts#L39)
