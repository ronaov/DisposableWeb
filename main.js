
const link = document.getElementById('link')
const h5 = document.getElementById('h5')
const make = document.getElementById('make')

function check() {
  var value = link.value
  if (value.includes('www.dropbox.com')) {
    h5.innerText = "Link chuẩn rồi đấy"
  }
  else {
    h5.innerText = "Đây không phải link của Dropbox"
  }
}

function tao() {
  var value = link.value
  if (value.includes('www.dropbox.com')) {
    var a = "s" + (Math.floor(Math.random() * 999999999) + 999999999)
    var k = value.slice(31, value.length - 2)
    window.location.href = `link/?a=${encodeURIComponent(k)}&id=${a}`
  }
}