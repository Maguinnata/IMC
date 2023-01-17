let n = document.getElementById('name') 
let w = document.getElementById('rangew')
let h = document.getElementById('rangeh')
let asnwer = document.getElementById('asnw')
let warning = document.getElementById('warn')

function is_weight(w) {
    if (w.value == 0 || w.value.length == 0) {
        return false
    } else {
        return true
    }
}

function is_height(h) {
    if (h.value == 0 || h.value.length == 0) {
        return false
    } else {
        return true
    }
}

function is_name(n) {
    var letter = /^[A-Za-z]+$/ ;
    if (n.value.match(letter)) {
        return true
    } else {
        return false
    }
}


function compute() {
    if (is_weight(w) && is_height(h) && is_name(n)) {
            var imc = Number((w.value)/(h.value**2))
            answ.innerHTML = ''
            answ.innerHTML += `<p> Aqui está o resultado ${n.value}, o seu IMC é ${imc.toFixed(2)}.`
        } else {
            window.alert('[ERRO] Preencha os dados corretamente!')
        }
    if (imc <= 18.5) {
        warn.innerHTML = 'Você está abaixo do peso, por favor procurar um profissional da saúde:'
        document.getElementById('output').innerHTML = 'Redirecionamento'
        document.body.style.background = '#FF6347'
    }
    if (imc > 18.5 && imc < 25) {
        warn.innerHTML = 'Você está no peso ideal, continue com sua rotina e faça exames periodicamente.'
        document.getElementById('output').innerHTML = ''
        document.body.style.background = '#4682B4'
    }
    if (imc >= 25 && imc <= 30) {
        warn.innerHTML = 'Você está acima do peso, procure um profissional da saúde e mude sua rotina.'
        document.getElementById('output').innerHTML = ''
        document.body.style.background = '#FFD700'
    }
    if (imc > 30) {
        warn.innerHTML = 'Você está obeso, por favor procurar um profissional da saúde o mais rápido possível: '
        document.getElementById('output').innerHTML = 'Redirecionamento'
        document.body.style.background = '#FF0000'
    }
}