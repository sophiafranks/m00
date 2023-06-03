var clearbutton = document.getElementById("clearbutton");
clearbutton.addEventListener("click", function(event) {
  var element = document.getElementsByClassName("dot");
  while (element.length > 0) {
    element[0].parentNode.removeChild(element[0]);
  }

  // Let's stop the propagation of events
  
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});
