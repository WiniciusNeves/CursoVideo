function contar() {
  let ini = document.getElementById('txtn').value;
  let fim = document.getElementById('txtn1').value;
  let passo = document.getElementById('txt2').value;
  let res = document.getElementById('res');

  if (ini.length === 0 || fim.length === 0 || passo.length === 0) {
    
    res.innerHTML = 'não posso contar'
  } else {
    res.innerHTML = 'Contando: ';
    let i = Number(ini);
    let f = Number(fim);
    let p = Number(passo);

    if (p <= 0) {
      alert('[ERRO] O passo deve ser maior que zero.');
    } else if (i <= f) {
      //contagem cresente
      for (let x = i; x <= f; x += p) {
        res.innerHTML += `${x} \u{1F449} `;
      
       }
      
    } else {
      //contagem decresente
      for (let x = i; x >= f; x -= p) {
        res.innerHTML += ` ${x} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
