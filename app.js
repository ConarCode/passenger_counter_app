
let count = 0
const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")

function increment() {
  // count = count + 1
  count += 1
  countEl.textContent = count
}

function save() {
  let totalEntries = count + " - "
  saveEl.textContent += totalEntries
  countEl.textContent = 0
  count = 0
}