---
title: Fetching Data with Axios
type: react
---

```javascript
// Using then()
componentDidMount() {
    axios
        .get('https://api.github.com/users')
        .then(res => console.log(res.data))
}

// Asynx Await
async componentDidMount() {
    const res = await axios.get('https://api.github.com/users')

    console.log(res.data);
}

```
