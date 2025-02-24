const grid = document.querySelector(".task-container")
document.querySelectorAll(".controller-btn").forEach(el => {el.addEventListener('click', ({target}) => {
  document.querySelector(".active").classList.remove("active")
  grid.style = `grid-auto-flow: ${target.innerText}`
  target.classList.add("active")
})})