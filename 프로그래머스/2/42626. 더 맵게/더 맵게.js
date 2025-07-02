class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while(index > 0) {
      const parentIndex = this.getParentIndex(index);
      if(this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  pop() {
    if(this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while(this.getLeftChildIndex(index) < length) {
      const leftIndex = this.getLeftChildIndex(index);
      const rightIndex = this.getRightChildIndex(index);

      let smallerChildIndex = leftIndex;
      if(rightIndex < length && this.heap[rightIndex] < this.heap[leftIndex]) {
        smallerChildIndex = rightIndex;
      }

      if(this.heap[index] > this.heap[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();

  // 1. 모든 스코빌 지수를 최소힙에 넣는다.
  for (const s of scoville) {
    heap.push(s);
  }

  let count = 0;

  // 2. 최소 힙에서 가장 맵지 않은 두 음식을 뽑아 합친다.
  while(heap.size() > 1 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();

    const mixed = first + second * 2;
    heap.push(mixed);
    count++;
  }

  // 3. 모든 음식이 K 이상인지 확인
  return heap.peek() >= K ? count : -1;
}