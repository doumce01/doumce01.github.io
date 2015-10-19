add = function () {
  var text, list, item, box, itemtext
  list = document.querySelector("tasklist");
  item = document.createElement("li");
  item.className = priority.value;
  
  box = document.createElement("input");
  box.type = "checkbox";
  item.appendChild(box);
  
  text = document.querySelector("#text").value;
  itemtext = document.createTextNode(text);
  item.appendChild(itemtext);
  list.appendChild(item);
}
