//usando a função document.getElementById para obter elementos do HTML a partir do id
var jogadaInput = document.getElementById('jogadaInput');
var convertButton = document.getElementById('convertButton');
var result = document.getElementById('result');

//receber/armazenar o nome do usuário
var name = prompt('Hey, qual o seu nome?');

//Math.random() * (max - min) + min;
//gera um número aleatório entre 0 e 1000, em seguida, adiciona-se 1 a esse resultado para garantir que o número gerado esteja entre 1 e 1000 (inclusive), excluindo-se assim, o zero.
var secretNumber = parseInt(Math.random() * (1001 - 1) + 1);

//número máximo de tentativas a ser diminuido com decremento
tentativas = 15;

//função .addEventListener para executar após o click
//clique do botão convertButton será uma uma nova tentativa
convertButton.addEventListener('click', function () {
  event.preventDefault();
  var numeroJogado = parseInt(jogadaInput.value);

  //se número menor ou igual a zero ou maior que 1000 ou campo vazio/letra
  if (numeroJogado <= 0 || numeroJogado > 1000 || !numeroJogado) {
    result.innerHTML = 'Valor inválido. Digite um valor entre 1 e 1000.';
  } else if (numeroJogado == secretNumber) {
    result.innerHTML = 'Uau, ' + name + ', você acertou! Parabens 👏🏽'; //encerra o laço
  } else if (numeroJogado > secretNumber) {
    tentativas -= 1;
    if (tentativas > 0) {
      result.innerHTML =
        name +
        ', você errou... O numéro secreto é menor que ' +
        jogadaInput.value +
        '. \n' +
        'Você tem ' +
        tentativas +
        ' tentativas.';
    } else if (tentativas === 0) {
      result.innerHTML =
        'Poxa, ' +
        name +
        ', suas tentativas acabaram. \n' +
        'O número secreto era ' +
        secretNumber +
        '.\n' +
        'Regarregue a página e tente novamente 😉';
    }
  } else if (numeroJogado < secretNumber) {
    tentativas -= 1;
    if (tentativas > 0) {
      result.innerHTML =
        name +
        ', você errou... O numéro secreto é maior que ' +
        jogadaInput.value +
        '. \n' +
        'Você tem ' +
        tentativas +
        ' tentativas.';
    } else if (tentativas === 0) {
      result.innerHTML =
        'Poxa, ' +
        name +
        ', suas tentativas acabaram. \n' +
        'O número secreto era ' +
        secretNumber +
        '.\n' +
        'Regarregue a página e tente novamente 😉';
    }
  }
  //resetar o campo de input a cada jogada ''(string vazia)
  jogadaInput.value = '';
});
