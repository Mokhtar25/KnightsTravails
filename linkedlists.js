function Node(data) {
  let value = data;
  let next = null;

  return { value, next };
}

export default function LinkedList() {
  let head = null;
  let tail = null;
  let index = -1;

  const make = (array) => {
    array.forEach((element) => {
      push(element);
    });
  };
  const push = (data) => {
    const newNode = Node(data);
    if (head === null) {
      head = newNode;
    } else {
      tail.next = newNode;
    }
    tail = newNode;
    index++;
  };
  const findSquare = (value) => {
    let cur = head;
    try {
      while (cur) {
        if (cur.value[0] === value[0] && cur.value[1] === value[1]) {
          return true;
        }
        cur = cur.next;
      }
    } catch (e) {
      return e;
    }
    return false;
  };
  const shift = () => {
    const tmp = head;
    head = tmp.next;
    return tmp;
  };
  const print = () => {
    let cur = head;
    while (cur) {
      console.log(cur.value);
      cur = cur.next;
    }
  };
  const del = () => {
    console.log(head, "\n", tail, index);
  };

  return { head, tail, make, push, shift, del, print, findSquare };
}

// const ara = LinkedList();
// ara.push([1, 2]);
// ara.push([1, 3]);
//
// console.log(ara.findSquare([1, 3]));
// const item = ara.shift();
// console.log("this is item: ", item);
// ara.print();
