
const link = document.getElementById('link')
const h5 = document.getElementById('h5')
const make = document.getElementById('make')
const ten = document.getElementById('ten')
const csh = document.getElementById('csh')
const av = document.getElementById('av')
const id = document.getElementById('id')
const kenh = document.getElementById('kenh')

function check() {
  var value = link.value
  if (value.includes('www.dropbox.com') || value.includes('drive.google.com')) {
    h5.innerText = "Link chuẩn rồi đấy"
  }
  else {
    h5.innerText = "Đây không phải link của Driver"
  }
}

csh.value = localStorage.getItem("csh") || ""
av.value = localStorage.getItem("av") || ""
kenh.value = localStorage.getItem("kenh") || ""

function lcsh() {
  localStorage.setItem("csh", csh.value)
}

function lk() {
  if (av.value.includes('imgur.com')) {
    localStorage.setItem("av", av.value)
  }
}

function lkenh() {
  localStorage.setItem("kenh", kenh.value)
}

function tao() {
  var value = link.value
  if (value.includes('www.dropbox.com') || value.includes('drive.google.com')) {
    var a = "s" + (Math.floor(Math.random() * 999999999) + 999999999)
    var b = encodeURIComponent(ten.value)
    if (value.includes('dropbox')) {
      var k = value.slice(31, value.length - 5) + "0"
    } else {
      var k = value.slice(32, value.indexOf("/", 32)) + "1"
    }
    
    const newURL = `https://ronaov.github.io/DisposableWeb/link/?a=${encodeURIComponent(k)}&id=${a}&b=${b}&c=${encodeURIComponent(csh.value)}&d=${av.value.slice(18)}&e=${id.value}&f=${kenh.value}`
    navigator.clipboard.writeText(newURL)
    
    //window.location.href = `link/?id=${a}&b=${b}&c=${encodeURIComponent(csh.value)}&d=${av.value.slice(18)}&e=${id.value}&f=${kenh.value}`
    
    h5.innerText = "Đã sao chép vào bàn phím"
  }
}