function verificar(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelectorAll('div#res')
    if (fano.value == 0000 || Number(fano.value) > ano){
        alert('Verifique os dados e tente novamente!!')
    } else {
        alert('Tudo Ok')
    }
}