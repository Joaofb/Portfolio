function callAlert(){
  swal.fire({
    title: 'Olá!',
    text: 'Seja Bem-Vindo!',
    icon: "success",
  })
}

window.onload(callAlert())