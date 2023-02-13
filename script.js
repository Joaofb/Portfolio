const toggle = document.getElementById("chk")
const menu = document.getElementById("nav")
const mudarCor = document.getElementById("link")


toggle.addEventListener("change", () =>{
  if(document.body.classList.toggle('dark')){
 document.getElementById('nav').style.background = "#232323"
}else{
 document.getElementById('nav').style.background ='#FFF'
}
}
)
function openMenu(){
  if(menu.style.display == 'none'){
  menu.style.display = 'block'
  }else{
  menu.style.display= 'none'
  }

}

function tamanhoTela(){
  if(window.innerWidth > 300){ 
    menu.style.display = 'block'
  }else{
    menu.style.display='none'
  }
}
