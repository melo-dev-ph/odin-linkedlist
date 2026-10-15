export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        if(this.head === null) {
            return null;
        } else {
            return this.head.value;
        }
    }

    getTail() {
        current = this.head;
        if(!current) {
            return null;
        } else {
            while(current.next !== null) {
                current = current.next;
            }
            return current.value;
        }
    }

    at(index) {
        let current = this.head;
        if(this.isEmpty()) {
            return null;
        } else {
            for(let i = 1; i < index; i++) {
                current = current.next;
            }

            return current.value
        }
    }

    pop() {
        if(this.isEmpty()) {
            return null;
        } else {
            let removedValue = this.head.value; 

            this.head = this.head.next; 
            
            this.size--;
            return removedValue;
        }
    }

    contains(value) {
        if(this.isEmpty()) {
            return null;
        } else {
            let current = this.head;
            while(current !== null) {
                if(current.value === value) { 
                    return true;
                }

                current = current.next;
            }

            return false;
        }
    }

    findIndex(value) {
        if(this.isEmpty()) {
            return -1;
        } else {
            let current = this.head;

            for(let i = 0; current !== null; i++) {
                if(value === current.value) {
                    return i;
                }

                current = current.next;
            }

            return -1;
        }
    }

    toString() {
        if(this.isEmpty()) {
            return null;
        } else {
            let trueString = '';
            let current = this.head

            while(current !== null) {
                trueString += `(${current.value}) -> `;
                current = current.next;
            }

            trueString += 'null';
            return trueString;
        }
    }

    prepend(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }
}

// prepend(20)

    // Node {
    //     value 20,
    //     next: Node {
    //         value: 30, 
    //         next:
    //     }
    // }
