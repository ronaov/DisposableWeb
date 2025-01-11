
const link = document.getElementById('link')
const h5 = document.getElementById('h5')
const make = document.getElementById('make')
const ten = document.getElementById('ten')

function check() {
  var value = link.value
  if (value.includes('drive.google.com')) {
    h5.innerText = "Link chuẩn rồi đấy"
  }
  else {
    h5.innerText = "Đây không phải link của Driver"
  }
}

function tao() {
  var value = link.value
  if (value.includes('drive.google.com')) {
    var a = "s" + (Math.floor(Math.random() * 999999999) + 999999999)
    var b = ten.value
    var k = value.slice(32, value.indexOf("/", 32))
    const newURL = `https://ronaov.github.io/DisposableWeb/link/?a=${encodeURIComponent(k)}&id=${a}&b=${b}`
    navigator.clipboard.writeText(newURL)
    h5.innerText = "Đã tạo sao sao chép"
  }
}