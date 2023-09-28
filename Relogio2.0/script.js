function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
  
    var horario = `${hora}:${minutos}`
    var dataFormatada = `${dia}/${mes}/${ano} `;
    msg.innerHTML = `<strong>Estamos no dia ${dataFormatada} <br> Agora são ${horario}<br></strong>`;
  
    if (hora >= 5 && hora < 12) {
      msg.innerText += "\nBom Dia";
      img.src = "3.png";
    } else if (hora >= 12 && hora <= 18) {
      msg.innerText += "\nBoa Tarde";
      img.src = "2.png";
    } else {
      msg.innerText += "\nBoa Noite";
      img.src = "1.png";
    }
  }
  