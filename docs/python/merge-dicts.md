---
title: Merge 2 Dicts together
type: python
---

Using Kwargs we pass all the elements of the first dictionary into the third one and then pass the second dictionary into the third. This will replace the duplicate keys of the first dictionary.

```python

# dict_1 = {'a': 1, 'b': 2}
# dict_2 = {'c': 3, 'd': 4}

new_dict = {**dict_1, **dict_2}

# new_dict output
{'a': 1, 'b': 2, 'c': 3, 'd': 4}

```
