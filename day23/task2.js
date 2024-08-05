class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    this.heap.push(node);
    this._heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].val >= this.heap[parentIndex].val) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftIndex < length &&
        this.heap[leftIndex].val < this.heap[smallest].val
      ) {
        smallest = leftIndex;
      }

      if (
        rightIndex < length &&
        this.heap[rightIndex].val < this.heap[smallest].val
      ) {
        smallest = rightIndex;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function mergeKLists(lists) {
  const minHeap = new MinHeap();

  // Initialize the heap with the first node of each list
  for (const list of lists) {
    if (list !== null) {
      minHeap.insert(list);
    }
  }

  const dummy = new ListNode();
  let current = dummy;

  while (!minHeap.isEmpty()) {
    const minNode = minHeap.extractMin();
    current.next = minNode;
    current = current.next;

    if (minNode.next !== null) {
      minHeap.insert(minNode.next);
    }
  }

  return dummy.next;
}

// Example usage:
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const lists = [list1, list2, list3];
const mergedList = mergeKLists(lists);

let current = mergedList;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
// Output: 1, 1, 2, 3, 4, 4, 5, 6
