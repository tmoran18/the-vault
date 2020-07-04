---
title: Destructing Props in Functional Component
type: react
---

When using multiple props in a component it is cleaner to use destructoring in the<br> function parameters

```javascript
const Component = ({ id, name }) } => {
    return (
        <div>
            <h1>{ id }</h1>
            <h2>{ name }</h2>
        </div>
    )
})
```
