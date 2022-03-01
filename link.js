let num = document.getElementById('txtn')
let num2 = document.getElementById('num')
let res = document.getElementById('res')
let valores = []

function fnumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
      }
}

function fselect(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
      }
}

function adicionar(){
    if(fnumber(num.value) && !fselect(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        num2.appendChild(item)
        res.innerText = ''
    } else {
        window.alert('Numero invalido')
    }
    num.value = ''
    num.focus()
}

function verificar(){
    if(valores.length == 0){
        window.alert('Adicione valores!')
    } else{
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        let tot = valores.length
        for(pos in valores){
            if(valores[pos] > maior){
                maior = valores[pos]
            }if (valores[pos] < menor) {
                menor = valores[pos]
             }
            soma += valores[pos]
            media = soma / tot 
        }
        
        res.innerHTML = ''
        res.innerHTML += `<p>O total é de ${tot} elementos</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}`
        res.innerHTML += `<p>A media dde todos os valores é ${media}`
      }
}