---
title: Destructing State or props
type: react
---

Often in class based components, you will find yourself using this.state.name or this.props.name <br>alot, to minimise this and make things look cleaner you can unpack values from the object.

```javascript
state = {
  id: "1",
  name: "John",
};

const { id, name } = this.state;

<div>
  <h1>{id}</h1>
  <h2>{name}</h2>
</div>;
```
