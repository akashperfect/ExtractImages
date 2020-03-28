var leftClickButton = document.getElementsByClassName('KNt1E _2ucQa')[0]

function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
    leftClickButton.click();
    var topButtonBar = document.getElementsByClassName('_3Kxus _30525')[0];
    var downloadButtonSvg = topButtonBar.children[3].children[0].children[0].children[0];
    setTimeout(triggerMouseEvent, 3000, downloadButtonSvg, "mousedown");
}

triggerMouseEvent(dow.children[3].children[0].children[0].children[0], "mousedown");
