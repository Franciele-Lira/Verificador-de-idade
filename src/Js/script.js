function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if( idade >=0 && idade < 6) {
                //bebe
                img.setAttribute('src', 'baby.M.png')
            }else if ( idade >= 6 && idade < 15) {
                //criança
                img.setAttribute('src', 'criança.m.png' ) 
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem.m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if( idade >=0 && idade < 6) {
                //Bebe
                img.setAttribute('src', 'baby.f.png')
            } else if ( idade >= 6 && idade < 15) {
                //criança
                img.setAttribute('src', 'criança.f.png')

            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'jovem.f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.f.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center' /* Centralização em html*/
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) /* Aparecer as imagens */
    } 
}