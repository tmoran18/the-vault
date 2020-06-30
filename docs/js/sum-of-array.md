---
title: Sum of array values - Reduce
type: js
---

Using the reduce method, iterate through the array, adding the current element value<br>to the sum of the previous element values

```javascript
const arr = [1, 2, 3, 4, 5];

// ES6
arr.reduce((total, amount) => total + amount);

// ES5
arr.reduce(function(total, amount) {
  return total + amount;
});
```
