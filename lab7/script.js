const flex = document.querySelector(".task-container")
document.querySelectorAll(".controller-btn").forEach(el => {el.addEventListener('click', ({target}) => {
  document.querySelector(".active").classList.remove("active")
  flex.style = `flex-direction: ${target.innerText}`
  target.classList.add("active")
})})