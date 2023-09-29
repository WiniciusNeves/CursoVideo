function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var fsex = document.getElementsByName('radsex');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados inseridos.');
    } else {
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id','foto' )
        if (fsex[0].checked) {
            genero = 'Homem';
            if(idade >=0 && idade < 10){
                img.setAttribute('src','1.png')

            }else if(idade <21){
                img.setAttribute('src','3.png')

            }else if(idade <50){
                img.setAttribute('src','6.png')
            }else {
                img.setAttribute('src','8.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if(idade >=0 && idade < 10){
                img.setAttribute('src','2.png')

            }else if(idade <21){
                img.setAttribute('src','4.png')

            }else if(idade <50){
                img.setAttribute('src','5.png')
            }else {
                img.setAttribute('src','7.png')
            }
        }   
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img)
    }
}
