const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor")
const body = document.querySelector("selector")

window.addEventListener("scroll", function(){
  if(contenedor.getBoundingClientRect().top<10){
    header.classList.add("scroll")
  }
  else {
    header.classList.remove("scroll")
  }
})