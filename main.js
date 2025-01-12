
const link = document.getElementById('link')
const h5 = document.getElementById('h5')
const make = document.getElementById('make')
const ten = document.getElementById('ten')
const csh = document.getElementById('csh')
const av = document.getElementById('av')
const id = document.getElementById('id')


function check() {
  var value = link.value
  if (value.includes('drive.google.com')) {
    h5.innerText = "Link chuẩn rồi đấy"
  }
  else {
    h5.innerText = "Đây không phải link của Driver"
  }
}

csh.value = localStorage.getItem("csh") || "";
av.value = localStorage.getItem("av") || "";

function lcsh() {
  localStorage.setItem("csh", csh.value)
}

function lk() {
  if (av.value.includes('imgur.com')) {
    localStorage.setItem("av", av.value)
  }
}

function tao() {
  var value = link.value
  if (value.includes('drive.google.com')) {
    var a = "s" + (Math.floor(Math.random() * 999999999) + 999999999)
    var b = encodeURIComponent(ten.value)
    var k = value.slice(32, value.indexOf("/", 32))
    const newURL = `https://ronaov.github.io/DisposableWeb/link/?a=${encodeURIComponent(k)}&id=${a}&b=${b}&c=${encodeURIComponent(csh.value)}&d=${av.value.slice(18)}&e=${id.value}`
    navigator.clipboard.writeText(newURL)
    
    h5.innerText = "Đã tạo sao sao chép"
  }
}