// //gives the properties and methods of document
// console.dir(document);

// //get domain
// console.log(document.domain);

// //get url
// console.log(document.URL);

// //get title
// console.log(document.title);

// console.log(document.doctype);

// console.log(document.head);
// console.log(document.body);

// console.log(document.all);

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// //GET ELEMENTBYID

// console.log(document.getElementById("header-title"));

// headertitle = document.getElementById("header-title");

// //headertitle.style.backgroundColor = "red";

// //GET ELEMENTBYCLASS

// var items = document.getElementsByClassName("list-group-item");

// //console.log(items);
// console.log(items[0]);
// items[0].textContent = "hello";

// items[0].style.color = "darkgreen";
// //items[0].style.backgroundColor = "lightgreen";
// items[0].style.fontWeight = "bold";

// // for applying style to all items in a list

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "lightgreen";
// }

// //GET ELEMENTBYTAG

// li = document.getElementsByTagName("li");

// for (let x = 0; x < li.length; x++) {
//   li[x].style.color = "darkgreen";
// }

// //QUERY SELECTOR

// var submit = document.querySelector("input[type='submit']");
// submit.value = "Add";

// //PARENTNODE

// var itemlist = document.querySelector("#items");

// console.log(itemlist.parentNode);

// itemlist.parentNode.style.backgroundColor = "#f4f4f4";

// // create element without html

// // create a div

// var div = document.createElement("div");
// console.log(div);

// // add class
// div.className = "newele";

// // add id
// div.id = "newele1";

// // add attribute
// div.setAttribute("title", "hello div");

// //create textnode
// var divtext = document.createTextNode("add your todo items");

// //add to text to div
// div.appendChild(divtext);

// //now add this new element to html in header container
// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");

// container.insertBefore(div, h1);

// ALL THE ABOVE CODE IS THE BASIC STUFF REQUIRED FOR DOM MANUPLATION

// JS CODE FOR TODO APP STARTS HERE

var form = document.getElementById("addform");
var itemlist = document.getElementById("items");

//form submit event
form.addEventListener("submit", additem);

//delete event
itemlist.addEventListener("click", removeitem);

// add item function
function additem(e) {
  e.preventDefault();

  // get input value
  var newitem = document.getElementById("item").value;

  //create new li element
  var li = document.createElement("li");

  // add to class
  li.className = "list-group-item";

  //add textnode with input value
  li.appendChild(document.createTextNode(newitem));

  //create delete button
  var deletebtn = document.createElement("button");

  //add class
  deletebtn.className = "btn btn-danger btn-sm float-right delete";

  //add textnode
  deletebtn.appendChild(document.createTextNode("Delete"));

  //add button to li

  li.appendChild(deletebtn);

  //append li to list
  itemlist.appendChild(li);
}

//function remove item

function removeitem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure ?")) {
      var li = e.target.parentElement;
      itemlist.removeChild(li);
    }
  }
}
