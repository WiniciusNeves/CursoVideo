function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');


    let n = parseInt(num.value);

    if (isNaN(n) || n < 0) {
        alert('[ERRO] Por favor, informe um número válido para a tabuada.');
        return;
    }

    tab.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        let option = document.createElement('option');
        option.text = `${n} x ${i} = ${n * i}`;
        tab.value = `tab${i}`
        tab.appendChild(option);

    }
}
