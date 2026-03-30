import { list, SinglyLinkedList, SingleNode } from "../singlyLinkedList";

type ReverseSLL = <T>(list: SinglyLinkedList<T>) => SinglyLinkedList<T>;

const reverseSLL: ReverseSLL = <T>(list: SinglyLinkedList<T>): SinglyLinkedList<T> => {
  let current: SingleNode<T> = list.head;
  list.head = list.tail;
  list.tail = current;

  let next: SingleNode<T>;
  let previous: SingleNode<T>;

  while(current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return list;
}

reverseSLL<number>(list);