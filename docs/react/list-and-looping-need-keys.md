---
title: Lists & Looping Need Keys
type: react
---

When you create a list of elements using a iterative function you will get a warning<br> if you do not assign a "key" on each of your list elements.

Keys help React identify which items have changed, are added, or are removed.

```javascript
 state = {
     users: [
         {
            id: '1',
            name: 'John'
         },
         {
             id: '2',
             name: 'Jane'
         }
     ]
 }
 <div>
    {this.state.users.map((user) => (
        <li key={user.id}>{user.name}</li>
    ))}
 </div>
```
