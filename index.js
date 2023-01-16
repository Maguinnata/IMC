let n = document.getElementById('nome') 
let massa = document.getElementById('peso')
let altura = document.getElementById('altu')
let res = document.getElementById('res')
let avis = document.getElementById('aviso')

function IsMassa(massa) {
    if (massa.value == 0 || massa.value.length == 0) {
        return false
    } else {
        return true
    }
}

function IsAltura(altura) {
    if (altura.value == 0 || altura.value.length == 0) {
        return false
    } else {
        return true
    }
}

function IsNome(n) {
    var letter = /^[A-Za-z]+$/ ;
    if (n.value.match(letter)) {
        return true
    } else {
        return false
    }
}


function calcular() {
    if (IsMassa(massa) && IsAltura(altura) && IsNome(n)) {
            var imc = Number((massa.value)/(altura.value**2))
            res.innerHTML = ''
            res.innerHTML += `<p> Aqui está o resultado ${n.value}, o seu IMC é ${imc.toFixed(2)}.`
        } else {
            window.alert('[ERRO] Preencha os dados corretamente!')
        }
    if (imc <= 18.5) {
        avis.innerHTML = 'Você está abaixo do peso, por favor procurar um profissional da saúde:'
        document.getElementById('output').innerHTML = 'Redirecionamento'
        document.body.style.background = '#FF6347'
    }
    if (imc > 18.5 && imc < 25) {
        avis.innerHTML = 'Você está no peso ideal, continue com sua rotina e faça exames periodicamente.'
        document.getElementById('output').innerHTML = ''
        document.body.style.background = '#4682B4'
    }
    if (imc >= 25 && imc <= 30) {
        avis.innerHTML = 'Você está acima do peso, procure um profissional da saúde e mude sua rotina.'
        document.getElementById('output').innerHTML = ''
        document.body.style.background = '#FFD700'
    }
    if (imc > 30) {
        avis.innerHTML = 'Você está obeso, por favor procurar um profissional da saúde o mais rápido possível: '
        document.getElementById('output').innerHTML = 'Redirecionamento'
        document.body.style.background = '#FF0000'
    }
}