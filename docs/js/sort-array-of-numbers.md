---
title: Sort an Array of Numbers - Sort
type: js
---

By default, the sort method sorts elements alphabetically. To sort numerically a compare function is added

```javascript
let arr = [4, 2, 5, 1, 3];

// ES6
arr.sort((a, b) => a - b);

// ES5
arr.sort(function(a, b) {
  return a - b;
});

// [1, 2, 3, 4, 5]
```
