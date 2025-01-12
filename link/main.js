const bg = document.getElementById('container')
const u = new URLSearchParams(window.location.search)
const anh = document.getElementById('anh')
const ten = document.getElementById('ten')
const logo = document.getElementById('logo')
const td = document.getElementById('td')

const link = u.get('a')
const id = u.get('id')

const link0 = "https://drive.google.com/uc?export=download&id=" + link

if (link != "" && link) {
  localStorage.setItem(id, link)
}

u.delete('a')

const newlink = window.location.pathname + "?" + u.toString()
history.replaceState(null, '', newlink)

ten.innerText = u.get('c')
if (u.get('b') != "") {
  td.innerText = u.get('b')
}


const av = "https://imgur.com/" + u.get('d') + ".jpg"
var bgid = "https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/" + u.get('e') + ".jpg"

if (!localStorage.getItem(id)) {
  bgid = Math.floor(Math.random()*3) + ".jpg"
  td.innerHTML = "Thế này là không ổn rồi"
  btn.style.background = "gray"
  btn.innerHTML = "VƯỢT LINK ĐI MÁ"
}

var test = document.createElement('img')
test.setAttribute('src', bgid)
test.onload = function (){
  bg.style.backgroundImage = `url('${bgid}')`
  anh.src = bgid
}

var test2 = document.createElement('img')
test2.setAttribute('src', av)
test2.onload = function () {
  logo.src = av
}

function taixuong() {
  if (localStorage.getItem(id)) {
    window.location.href = link0
    btn.style.background = "gray"
    btn.innerText = "DOWLOADING..."
  }
}