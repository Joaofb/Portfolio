let listMenu = document.getElementById('menuitens')

let menu = document.getElementById('menu')
function clickMenu(){
  if(listMenu.style.display === 'block'){
    listMenu.style.display ='none'
  }else{
    listMenu.style.display = 'block'
  }
}

function mudouTamanho(){
  if(window.innerWidth >= 1000){
    listMenu.style.display = 'block'
    menu.style.display = 'none'
  }else{
    listMenu.style.display ='none'
    menu.style.display ='block'
  }
}


