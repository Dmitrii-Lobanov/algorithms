import { SinglyLinkedList, SingleNode } from "./singlyLinkedList";

type ReverseSLL = <T>(list: SinglyLinkedList<T>) => SinglyLinkedList<T>;

export const reverseSLL: ReverseSLL = <T>(
  list: SinglyLinkedList<T>,
): SinglyLinkedList<T> => {
  let current: SingleNode<T> | null = list.head;
  list.head = list.tail;
  list.tail = current;

  let next: SingleNode<T> | null = null;
  let previous: SingleNode<T> | null = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return list;
};
