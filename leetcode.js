var addTwoNumbers = function (l1, l2) {
  const checker = (n1, n2, extra = 0) => {
    if (!n1 && !n2 && !extra) return null;
    const newVal = (n1?.val || 0) + (n2?.val || 0) + extra;
    const nextNode = checker(n1?.next, n2?.next, Math.floor(newVal / 10));
    return new ListNode(newVal % 10, nextNode);
  };
  return checker(l1, l2);
};
