document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.createElement('div');
    textElement.className = 'color-scroll-text';
    textElement.innerText = '这里是彩色滚动变换的文字内容';
    document.body.appendChild(textElement);
});