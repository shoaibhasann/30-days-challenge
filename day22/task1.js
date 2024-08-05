var addTwoNumbers = function (l1, l2) {
  let head = new ListNode();
  let current = head;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    const newNode = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    head.next = newNode;
    head = head.next;

    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  if (carry > 0) {
    head.next = new ListNode(carry);
  }

  return current.next;
};
