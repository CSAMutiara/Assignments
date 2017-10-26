dragElement(document.getElementById(("div1")));

function dragElement(elmnt) {
  var x1 = 0, y1 = 0, x2 = 0, y2 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    x2 = e.clientX;
    y2 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    x1 = x2 - e.clientX;
    y1 = y2 - e.clientY;
    x2 = e.clientX;
    y2 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - y1) + "px";
    elmnt.style.left = (elmnt.offsetLeft - x1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}