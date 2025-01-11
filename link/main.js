const url = new URLSearchParams(window.location.search)
const h4 = document.getElementById('h4')
var k = url.get('a')
const id = url.get('id')
url.delete('a')
if (k != null) {
  localStorage.setItem(id, k)
} else {
  k = localStorage.getItem(id)
}

window.history.replaceState(null, '', window.location.pathname + "?" + url.toString())

const link = "https://www.dropbox.com/scl/fi/" + k + "=1"
if (k != null) {
  var name = link.slice(link.indexOf("/", 31)+1, link.indexOf("?"))
} else {
  var name = "Xin hãy vượt link"
}
h4.innerText = name