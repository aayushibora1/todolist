var mylist = document.getElementsByTagName("LI");
var n;
for (n= 0; n < mylist.length; n++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[n].appendChild(span);
}

var close = document.getElementsByClassName("close");
var n;
for (n= 0; n< close.length; n++) {
  close[n].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("YOU TASK IS EMPTY!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (n = 0; n< close.length; n++) {
    close[n].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
