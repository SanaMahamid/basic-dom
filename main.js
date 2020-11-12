 console.log(document)
 const playingField = document.getElementById("playing-field")
 console.log(playingField)
 const down = document.getElementById("down")
 console.log(down)
 console.log(down.innerHTML)
 console.log(playingField.innerHTML)
 document.getElementById("block").style.backgroundColor = "yellow"
 const moveRight = function(){
    let l = parseInt(document.getElementById("block").style.left) || 0
    l += 15
    document.getElementById("block").style.left = l + "px"
  }
  moveRight()
  moveRight()
  moveRight()
  console.log(parseInt("15px")) // prints 15

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
header.setAttribute("class", "my-header") //<h1 class="my-header"></h1>
const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: Sana"
subHeader.setAttribute("class","sub-header")
document.body.appendChild(subHeader)


const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const colorMe = function() {
    box.style.backgroundColor = "#8e44ad"
}

const list = document.getElementById("myList")
const addItem = function () {
    const newItem = document.createElement("li")
    newItem.innerHTML = "A new item!"
    list.appendChild(newItem)
}
  
