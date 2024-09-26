function verificar(){
    data = new Date() 
    ano = data.getFullYear()
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
            gênero = 'menino'
            img.setAttribute('src', 'garoto.png')
        } else if (idade < 17) {
            gênero = 'garoto'
            img.setAttribute('src', 'menino.png')
        } else if (idade < 50) {
            gênero = 'adulto'
            img.setAttribute('src', 'homem.png')
        } else {
            gênero = 'idoso'
            img.setAttribute('src', 'idoso.png')
        }
    } else if (fsex[1].checked) {
        if (idade >= 0 && idade < 10) {
            gênero = 'menina'
            img.setAttribute('src', 'garota.png')
        } else if (idade < 17) {
            gênero = 'garota'
            img.setAttribute('src', 'menina.png')
        } else if (idade < 50) {
            gênero = 'adulta'
            img.setAttribute('src', 'mulher.png')
        } else {
            gênero = 'idosa'
            img.setAttribute('src', 'idosa.png')
        }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    }
}