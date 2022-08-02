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
    const originalHTML = members.innerHTML;
    members.querySelectorAll('a').forEach(elem => {
        elem.setAttribute('aria-hidden', 'true');
        elem.setAttribute('tabindex', '-1');
    });
    members.innerHTML = originalHTML + members.innerHTML;
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
