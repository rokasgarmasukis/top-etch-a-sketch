
const h1 = document.querySelector("h1")
const drawing = document.querySelector(".drawing")

for (let i = 0; i < 256; i ++) {
  let div = document.createElement("div")
  div.classList.add("pixel")
  // div.textContent="a"
  drawing.appendChild(div)
}
