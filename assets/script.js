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
