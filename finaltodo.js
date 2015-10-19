add = function () {
  document.body.style.backgroundColor = "black";
  
  var text, list, item, box, itemtext
  list = document.body.ul;
  item = document.createElement("li");
  
  box = document.createElement("input");
  box.type = "checkbox";
  item.appendChild(box);
  
  text = document.querySelector("#text").value;
  itemtext = document.createTextNode(text);
  item.appendChild(itemtext);
  list.appendChild(item);
}
