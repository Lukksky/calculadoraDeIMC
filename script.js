function verificar(){
    var altura = document.querySelector('input#txtalt').value
    var peso = document.querySelector('input#txtpeso').value
    var imc = (peso / (altura * altura)).toFixed(2)
    var ret = document.querySelector('div#res')


    if(imc < 40){
            ret.style.padding = '10px'
            ret.innerHTML = `Seu imc é ${imc} e você está`
    } else 
    ret.innerHTML = `Opsss..`
   

    try {

        if (imc > 0 && imc <= 16.9){
            ret.innerHTML += ` muito abaixo do peso`
        
        } else if (imc > 17 && imc <= 18.4){
            ret.innerHTML += ` abaixo do peso`
        
        } else if (imc > 18.5 && imc <= 24.9){
            ret.innerHTML += ` com peso normal`
        
        } else if (imc > 25 && imc <= 29.9){
            ret.innerHTML += ` acima do peso`
        
        } else if (imc > 30 && imc <= 40){
        ret.innerHTML += ` com obesidade severa, procure um médico`
    
        } else 
        ret.innerHTML += ` Valor de IMC fora do intervalo considerado.`
    
        
        
    
    } catch(err){
        ret.innerHTML = ` Erro desconhecido! Tente novamente`
    }

}