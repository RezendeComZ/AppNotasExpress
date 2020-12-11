const btApagar = (id) => {
    document.getElementById(id).style.display = 'none'  
}

// Janela inserir
document.onkeyup = e => {
    if (e.which === 192) mostraInserir();
  }
  
  const mostraInserir = () => {
    document.querySelector('.inserir').style.display = 'block';
    document.getElementById("headField").focus()
  }
  
  const escondeInserir = () => {
    document.querySelector('.inserir').style.display = 'none'
  }

  const deuEnter = () => {
    if (event.keyCode === 13) btEnviar();
  }
  const deuCtrlEnter = () => {
    if (event.keyCode === 13 && event.ctrlKey) {
        document.forms[0].submit();;
        btEnviar();
    };
    if (event.keyCode === 13 && event.metaKey) {
        document.forms[0].submit();;
        btEnviar()
    }; /// via CMD
  }

const btEnviar = () => {
    if (headField.value === '') {
      alert('Preencha ao menos o títuloo')
    } else {
      escondeInserir()
    }
  }