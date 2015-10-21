add = function () {
  var text, list, item, box, itemtext, priority
  list = document.querySelector("#tasklist");
  item = document.createElement("li");
  
  box = document.createElement("input");
  box.type = "checkbox";
  item.appendChild(box);
  box.onclick = boxChecked
  
  text = document.querySelector("#text").value;
  itemtext = document.createTextNode(text);
  item.appendChild(itemtext);
  list.appendChild(item);
  
  priority = document.querySelector("#priority");
  item.classList.add(priority.value);
  item.className = priority.value;
}

boxChecked = function() {
  this.parentNode.classList.add("done");
}
