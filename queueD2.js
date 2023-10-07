/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Determines whether the sum of the left half of the queue items is equal to
     * the sum of the right half. Avoid indexing the queue items directly via
     * bracket notation, use the queue methods instead for practice.
     * Use no extra array or objects.
     * The queue should be returned to it's original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Whether the sum of the left and right halves is equal.
     */
    isSumOfHalvesEqual() { 
        let sum1 = 0;
        let sum2 = 0;
        let count = 0;
        const half = Math.floor(this.size()/2);
        console.log("This is our half " + half);
        console.log("This is the size " + this.size());
        while(count < this.size()){
            count++;
            const tempVal = this.dequeue();
            if(this.size() %2 != 0){
                if(count == half+1){
                    continue
                }
            }
            else if(count <= half){
                sum1 += tempVal;
                console.log("1: " + sum1);
            }
            else{
                sum2 += tempVal;
                console.log("2: " + sum2);
            }
            this.enqueue(tempVal)
        }
        return sum1 == sum2
    }

    /**
     * Compares this queue to another given queue to see if they are equal.
     * Avoid indexing the queue items directly via bracket notation, use the
     * queue methods instead for practice.
     * Use no extra array or objects.
     * The queues should be returned to their original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */
    compareQueues(q2) { 
        if(this.size() !== q2.size()){
            return false
        } else {
            let areTheSame = true;
            for(const item in this.items){
                const q1First = this.dequeue();
                const q2First = q2.dequeue();
                if(q1First !== q2First){
                    areTheSame = false;
                }
                this.enqueue(q1First);
                q2.enqueue(q2First);
            }
            return areTheSame
        }
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    // isPalindrome() { 
    //     const oGQ = this;
    //     const stack = new Stack;
    //     const isPalindrome = false;
    //     for(const item in this.items){
    //         stack.push(oGQ.dequeue());
            
    //     }
    //     if(oGQ.items == stack.items){
    //         isPalindrome = true;
    //     }
    //     for(const item in stack.items){
    //         oGQ.enqueue(stack.pop());
    //     }
    //     return isPalindrome
    // }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
        return this.size();
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
}

/* Rebuild the above class using a linked list instead of an array. */

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if the list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Adds a given val to the back of the queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} val
     * @returns {number} The new size of the queue.
     */
    enqueue(val) {
        const newTail = new QueueNode(val);

        if (this.isEmpty()) {
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            this.tail = newTail;
        }
        // pre-increment so the new size is returned otherwise old size is returned
        return ++this.size;
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item.
     */
    dequeue() {
        // remove head
        if (!this.head) {
            return null;
        }

        const dequeued = this.head;
        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        }

        this.size--;
        return dequeued.data;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item.
     */
    front() {
        return this.head ? this.head.data : null;
    }

    /**
     * Determines if the given item is in the queue.
     * - Time: O(n) linear.
     * - Space: O(1) constant.
     * @param {any} searchVal
     * @returns {boolean}
     */
    contains(searchVal) {
        let runner = this.head;

        while (runner) {
            if (runner.searchVal === searchVal) return true;
            runner = runner.next;
        }
        return false;
    }

    /**
     * Enqueues each of the given items.
     * - Time: O(n) linear since enqueue is O(1), n = vals.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals
     */
    seed(vals) {
        vals.forEach((val) => this.enqueue(val));
    }
}

//////////////////////////////////////////////
const QueueOne = new Queue;
const QueueTwo = new Queue;
const QueueThree = new Queue;
const QueueFour = new Queue;

QueueOne.enqueue(4)
QueueOne.enqueue(3)
QueueOne.enqueue(2)
QueueOne.enqueue(1)

QueueTwo.enqueue(4)
QueueTwo.enqueue(3)
QueueTwo.enqueue(2)
QueueTwo.enqueue(1)

QueueThree.enqueue(4)
QueueThree.enqueue(7)
QueueThree.enqueue(6)
QueueThree.enqueue(3)

QueueFour.enqueue(1)
QueueFour.enqueue(3)
QueueFour.enqueue(2)
QueueFour.enqueue(3)
QueueFour.enqueue(1)
QueueFour.enqueue(2)

// console.log(QueueOne.compareQueues(QueueTwo));
// console.log(QueueOne.compareQueues(QueueThree));


///////////////////////////////////////////////
console.log(QueueFour.isSumOfHalvesEqual());















////////////////////////////////////////////
/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
// class Stack {
//     /**
//      * The constructor is executed when instantiating a new Stack() to construct
//      * a new instance.
//      * @returns {Stack} This new Stack instance is returned without having to
//      *    explicitly write 'return' (implicit return).
//      */
//     constructor() {
//         this.items = [];
//     }

//     /**
//      * Adds a new given item to the top / back of this stack.
//      * - Time: O(1) constant.
//      * - Space: O(1) constant.
//      * @param {any} item The new item to be added to the top / back.
//      * @returns {number} The new length of this stack.
//      */
//     push(item) {
//         const itemsArr = this.items;
//         itemsArr[itemsArr.length] = item;
//         return this
//     }

//     /**
//      * Removes the top / last item from this stack.
//      * - Time: O(1) constant.
//      * - Space: O(1) constant.
//      * @returns {any} The removed item or undefined if this stack was empty.
//      */
//     pop() { 
//         const itemsArr = this.items;
//         const lastItem = itemsArr[itemsArr.length-1];
//         if(itemsArr.length-1){
//             itemsArr.length--;
//         }
//         return lastItem
//     }

//     /**
//      * Retrieves the top / last item from this stack without removing it.
//      * - Time: O(1) constant.
//      * - Space: O(1) constant.
//      * @returns {any} The top / last item of this stack.
//      */
//     peek() { 
//         return this.items[0] == null? null : this.items[0];
//     }

//     /**
//      * Returns whether or not this stack is empty.
//      * - Time: O(1) constant.
//      * - Space: O(1) constant.
//      * @returns {boolean}
//      */
//     isEmpty() { 
//         return this.items.length < 1? true : false;
//     }

//     /**
//      * Returns the size of this stack.
//      * - Time: O(1) constant.
//      * - Space: O(1) constant.
//      * @returns {number} The length.
//      */
//     size() { 
//         return this.items.length < 1? 0 : this.items.length;
//     }
// }


// //EXTRA - Try re-creating a stack using a linked list data structure

// class StackNode {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedListStack {
//     constructor() {
//         this.head = null;
//     }
// }




// ////////////////////////
// const newStack = new Stack();
// newStack.push(1);
// newStack.push(2);
// newStack.push(3);
// newStack.push(4);
// console.log(newStack.pop());
// console.log(newStack);

// console.log(newStack.peek());

// const newLLStack = new LinkedListStack();
// newLLStack.head = new StackNode(1);
// newLLStack.head.next = newStack(2);

// console.log(QueueOne.isPalindrome());
