# copy
Copy to clipboard. No Flash. - 复制文本到剪切板，无需 Flash

需要在用户 click 事件回调函数里 调用.

```js
window.addEventListener('click', function(e){
   copy(e.target.outerHTML);
}, true);
```
或

```html
<pre>
// code ...
</pre>
<button onclick="copy(this.previousElementSibling.innerText)">复制代码</button>
```


