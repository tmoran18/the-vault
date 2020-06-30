---
title: Repsonsive Font
type: css
---

Range 14px min size @ 300px 26px max size @ 1600px

```css
body {
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) 
  / (1600 - 300)));
}
```
