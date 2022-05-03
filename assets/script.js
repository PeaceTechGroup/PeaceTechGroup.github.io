window.onscroll = function () {
    const shrinkAfter = 50;
    const requiredHeight = 150;
    if (document.body.scrollTop > shrinkAfter || document.documentElement.scrollTop > shrinkAfter) {
        if (document.body.scrollHeight - window.screenY - shrinkAfter > requiredHeight || document.documentElement.scrollHeight - window.screenY - shrinkAfter > requiredHeight) {
            document.body.classList.add('collapsed-header');
        }
    } else {
        document.body.classList.remove('collapsed-header');
    }
}

window.onload = function() {
    const members = document.querySelector('.members div');
    const width = members.scrollWidth;
    members.innerHTML = members.innerHTML + members.innerHTML;
    const keyframes = document.createElement('style');
    keyframes.innerHTML = `
        @keyframes slider {
            from {
                left: 0;
            }
            to {
                left: -${width}px;
            }
        }
    `;
    document.head.appendChild(keyframes);
}
