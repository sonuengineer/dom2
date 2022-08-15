//parentElement
var parentEle=document.querySelector("#items")
//parentEle.parentNode.style.backgroundColor="blue"

//lastElemntchild
//parentEle.lastElementChild.style.backgroundColor="blue"


//firstElementChild
//parentEle.firstElementChild.style.fontSize="20px"

//nextElementSibling
//console.log(parentEle.nextElementSibling)

//previousSibling
//console.log(parentEle.previousSibling)


//console.log(parentEle.previousElementSibling)
//parentEle.previousElementSibling.style.color="green"

//creat element

var ndiv=document.createElement("div")
var ndiv1=document.createElement("div")

ndiv.className="hello"
ndiv.id="hello1"

ndiv1.className="helloo"
ndiv1.id="helloo1"


//setattribute
ndiv.setAttribute("title","hello div");
var ndivtext=document.createTextNode("hello sonu")
var ndivtextt=document.createTextNode("hello sonu2")

ndiv.appendChild(ndivtext);
ndiv1.appendChild(ndivtextt);


var container=document.querySelector("header .container")
var h1=document.querySelector(" header h1")

var h2=document.querySelector(" header h2")

container.insertBefore(ndiv,h1)
container.insertBefore(ndiv1,h2)
