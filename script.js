function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Please check the data and try again!')
     } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'man'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src' , 'hcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'hjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'hadulto.png')
            } else {
                img.setAttribute('src' , 'hidoso.png')

            }
        } else if (fsex[1].checked) {
            gênero = 'woman'
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src' , 'mcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'mjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'madulto.png')
            } else {
                img.setAttribute('src' , 'midoso.png')
            }
        }
        res.style.textAlign= 'Center'
        res.innerHTML = `We detected a ${idade} years old ${gênero}.`
        res.appendChild(img)
    }
 }
