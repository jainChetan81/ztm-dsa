// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

//     void push(int x) Pushes element x to the top of the stack.
//     int pop() Removes the element on the top of the stack and returns it.
//     int top() Returns the element on the top of the stack.
//     boolean empty() Returns true if the stack is empty, false otherwise.

// Notes:

//     You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
//     Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

// Example 1:

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False
class MyStack {
	queue: number[] = [];
	constructor() {
		this.queue = [];
	}

	push(x: number): void {
		this.queue.push(x);
	}

	pop(): number {
		return this.queue.shift() ?? -1;
	}

	top(): number {
		return this.queue.at(-1)! ?? -1;
	}

	empty(): boolean {
		return this.queue.length === 0;
	}
}

const stack2222 = new MyStac1k();
stack2222.push(1);
stack2222.push(2);
console.log(stack2222.top()); // 2
console.log(stack2222.pop()); // 2
console.log(stack2222.top()); // 1
console.log(stack2222.pop()); // 1
stack2222.push(3);
console.log(stack2222.top()); // 3
console.log(stack2222.empty()); // false
