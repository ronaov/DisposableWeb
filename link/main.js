const url = new URLSearchParams(window.location.search)
const h4 = document.getElementById('h4')
const down = document.getElementById('down')
const filename = url.get('b')

var k = url.get('a')
const id = url.get('id')
url.delete('a')
if (k != null) {
  localStorage.setItem(id, k)
} else {
  k = localStorage.getItem(id)
}

window.history.replaceState(null, '', window.location.pathname + "?" + url.toString())

const link = "https://drive.google.com/uc?export=download&id=" + k + "&usp=drive_web"
if (k != null) {
  if (filename != "") {
    var name = filename
  } else {
    var name = "Link tải đã sẵn sàng"
  }
} else {
  var name = "Xin hãy vượt link"
  down.style.background = "red"
  down.innerText = "Can't Download"
}
h4.innerText = name

function tai() {
  if (k != null) {
    window.location.href = link
    down.style.background = "gray"
    down.innerText = "Downloading..."
  }
}