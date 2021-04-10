
const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        if (altura > 2){
            alert('Digite a altura em metros separado por vírgula. Exemplo: 1,65')
        }

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso ideal. Atenção!' ;
        } else if (valorIMC < 25) {
            classificacao = 'no peso ideal. Parabens';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `Oi ${nome}! Seu IMC é ${valorIMC} e você está ${classificacao}`;


    } else {
        resultado.textContent = 'Preencha todos os campos.'
    }

}

calcular.addEventListener('click', imc);
