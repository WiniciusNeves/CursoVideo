let valores = [];

function numigual(num, lista) {
    return lista.indexOf(Number(num)) !== -1;
}

function adicionarNumero() {
    let num = document.getElementById('fnum').value;

    if (num >= 1 && num <= 100) {
        if (!numigual(num, valores)) {
            valores.push(Number(num));
            let select = document.getElementById('fLista');
            let option = document.createElement('option');
            option.text = `Valor ${num} foi adicionado`;
            select.add(option);
            document.getElementById('fnum').value = '';
            document.getElementById('resultado').textContent = ''; // Limpa o resultado
        } else {
            alert('O número já está na lista.');
        }
    } else {
        alert('O número deve estar entre 1 e 100.');
    }

    num.value = '';
    num.focus();
}

function calcularSoma() {
    let soma = 0;
    if (valores.length == 0) {
        alert('Adicione um número, por favor');
    } else {
        for (let i = 0; i < valores.length; i++) {
            soma += valores[i];
        }
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);
        let media = soma / valores.length;

        let res = document.getElementById('resultado');
        res.innerHTML = `Soma: ${soma}<br>`;
        res.innerHTML += `Média: ${media.toFixed(2)}<br>`;
        res.innerHTML += `Maior valor: ${maior}<br>`;
        res.innerHTML += `Menor valor: ${menor}<br>`;
    }
}

function finalizar() {
    valores = [];
    let select = document.getElementById('fLista');
    select.innerHTML = '';
    document.getElementById('resultado').textContent = '';
}
