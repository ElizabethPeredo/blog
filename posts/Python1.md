---
title: 'Python'
date: 'Agosto 23, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
<table></table>

# Python Comments
Comments starts with a #, and Python will ignore them:

```python
#
print("Hello World!")
```

# Python Keywords


# Variables
Variables are containers for storing data values.

## Variable Names

```python
myvar="Elizabeth"
my_var="Elizabeth"
_my_var="Elizabeth"
myVar="Elizabeth"
MYVAR="Elizabeth"
myvar2="Elizabeth"

#Illegal variable names
2myvar="Elizabeth"
my-var="Elizabeth"
my var="Elizabeth"
```

**Code Sample:**
```js
import marked from "marked";
import prismjs from "prismjs";

marked.setOptions({
  renderer,
  highlight: function(code, lang) {
    try {
      return prismjs.highlight(code, prismjs.languages[lang], lang);
    } catch {
      return code;
    }
  }
});
```
```python
def median(pool):
    '''Statistical median to demonstrate doctest.
    >>> median([2, 9, 9, 7, 9, 2, 4, 5, 8])
    7
    '''
    copy = sorted(pool)
    size = len(copy)
    if size % 2 == 1:
        return copy[(size - 1) / 2]
    else:
        return (copy[size/2 - 1] + copy[size/2]) / 2
if __name__ == '__main__':
    import doctest
    doctest.testmod()
```