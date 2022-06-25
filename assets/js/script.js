function verificar() {
    var data = new Date()
    var ano = data.getFullYear() 
    var formularioAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formularioAno.value.length == 0 || formularioAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formularioSex = document.getElementsByName('radsexo')
        var idade = ano - Number(formularioAno.value) 
        var gênero = ""
        var img = document.createElement('img') 
        img.setAttribute ('id', 'foto')
        if (formularioSex[0].checked) {
            gênero = "homem"
            if(idade >=0 && idade <= 3) {
                //bb
                img.setAttribute('src', './assets/bebemale.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', './assets/criancamale.png')
            } else if (idade < 22) {
                //adolescente
                img.setAttribute('src', './assets/adolescentemale.png')
            } else if (idade < 41) {
                //jovem
                img.setAttribute('src', './assets/jovemmale.png')
            } else if (idade < 56) {
                //adulto
                img.setAttribute('src', './assets/adulto.png')
            } else {
                //velho
                img.setAttribute('src', './assets/velho.png')
            }
        } else if (formularioSex[1].checked) {
            gênero = "mulher"
            if(idade >=0 && idade <= 3) {
                //bb
                img.setAttribute('src', './assets/bebefemale.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', './assets/criancafemale.png')
            } else if (idade < 22) {
                //adolescente
                img.setAttribute('src', './assets/adolescentefemale.png')
            } else if (idade < 41) {
                //jovem
                img.setAttribute('src', './assets/jovemfemale.png')
            } else if (idade < 56) {
                //adulto
                img.setAttribute('src', './assets/adulta.png')
            } else {
                //velho
                img.setAttribute('src', './assets/velha.png')
        }
    }

        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${gênero} com ${idade} ano(s)`
        res.appendChild(img) 
    }
}
