import { LinkedList } from "./index.js";

describe("LinkedList", () => {
  const linkedList = new LinkedList();

  // test("Success", () => {

  //   linkedList.prepend(10);
  //   linkedList.prepend(20);
  //   linkedList.prepend(30);
  //   expect(linkedList.head.value).toBe(30);
  //   expect(linkedList.head.next.value).toBe(20);
  //   expect(linkedList.head.next.next.value).toBe(10);
  // });

  // test("append success", () => {
  //   linkedList.append(10);
  //   linkedList.append(30);
  //   linkedList.append(20);

  //   expect(linkedList.head.value).toBe(10);
  //   expect(linkedList.head.next.value).toBe(30);
  //   expect(linkedList.head.next.next.value).toBe(20);
  // })

  // test("head has value", () => {
  //   linkedList.append(20);
  //   linkedList.prepend(30);

  //   expect(linkedList.getHead()).toBe(30);
  // })

  // test("Tail successfully gotten", () => {
  //   linkedList.append(1);
  //   linkedList.append(5);
  //   linkedList.prepend(0);

  //   expect(linkedList.getTail()).toBe(5);
  // })

  test("Contains", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);

    

    expect(linkedList.toString()).toBe('(1) -> (2) -> (3) -> (4) -> null');
  })

});