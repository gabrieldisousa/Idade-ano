function verificar(){
     ano = new Date().getFullYear()
     fano = document.getElementById('txtano')
     res = document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados e tente novamente!!')
    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        gênero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        if (idade >= 0 && idade < 10) {
            gênero = 'Menino'
            img.setAttribute('src', 'garoto.png')
        } else if (idade < 17) {
            gênero = 'Garoto'
            img.setAttribute('src', 'menino.png')
        } else if (idade < 50) {
            gênero = 'Adulto'
            img.setAttribute('src', 'homem.png')
        } else {
            gênero = 'Idoso'
            img.setAttribute('src', 'idoso.png')
        }
    } else if (fsex[1].checked) {
        if (idade >= 0 && idade < 10) {
            gênero = 'Menina'
            img.setAttribute('src', 'garota.png')
        } else if (idade < 17) {
            gênero = 'Garota'
            img.setAttribute('src', 'menina.png')
        } else if (idade < 50) {
            gênero = 'Adulta'
            img.setAttribute('src', 'mulher.png')
        } else {
            gênero = 'Idosa'
            img.setAttribute('src', 'idosa.png')
        }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    }
}