## 1.写一个正则表达式 匹配所有 Number 直接量

```
const reg = /^[-\+]?(\.\d+|(0|[1-9]\d*)\.?\d*?)([eE][-\+]?d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/
```

## 2.写一个 UTF-8 Encoding 的函数

```
function Encoding(data) {
    const code = encodeURIComponent(data);
    const bytes = [];
    for (let i of code) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return bytes;
}
```

## 3.写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

```
/(^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E])[\u0021-\u007E]{6,16}$)|(^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[\x21-\x7E]{6,16}$)|((?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*)/
```