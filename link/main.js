const url = new URLSearchParams(window.location.search)
const h4 = document.getElementById('h4')
const down = document.getElementById('down')

var k = url.get('a')
const id = url.get('id')
url.delete('a')
if (k != null) {
  localStorage.setItem(id, k)
} else {
  k = localStorage.getItem(id)
}

window.history.replaceState(null, '', window.location.pathname + "?" + url.toString())

const link = "https://drive.google.com/uc?export=download&id=" + k
if (k != null) {
  var name = link.slice(link.indexOf("/", 31)+1, link.indexOf("?"))
} else {
  var name = "Xin hãy vượt link"
  down.style.background = "red"
  down.innerText = "Can't Download"
}
h4.innerText = name

function tai() {
  if (k != null) {
    window.location.href = link
  }
}