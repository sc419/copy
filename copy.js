/**
 * 复制文本到剪切板，需在用户 (click 事件) 事件回调函数里 调用
 * 如
 * window.addEventListener('click', function(e){
 *    copy(e.target.outerHTML);
 * }, true);
**/
function copy(text){
	var $text = document.createElement('textarea');
	var current = document.activeElement;
	$text.value = text;
	document.body.appendChild($text);
	$text.select();
	document.execCommand('copy', true);
	document.body.removeChild($text);
	current.focus();
}
