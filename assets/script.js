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
    shuffleElements(members);
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

// Shuffle algorithm based on https://javascript.tutorialink.com/javascript-shuffle-html-list-element-order/
//   "This is based on Fisher–Yates shuffle, and exploits the fact that when you append a node, it’s moved from its old place.
//    Performance is within 10% of shuffling a detached copy even on huge lists (100 000 elements)."
function shuffleElements(parentElement) {
    for (let i = parentElement.children.length; i >= 0; i--) {
        parentElement.appendChild(parentElement.children[Math.random() * i | 0]);
    }
}
