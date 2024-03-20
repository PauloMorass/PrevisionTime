const key = "508653334b9c2a6c3eafd8df93293866";

function colocarDadosNaTela(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".text-prevision").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
  document.querySelector(
    ".img-prevision"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
  // innerhtml é o texto pegado da tag
  console.log(dados);
}

// async avisa que vai acessar um servidor
async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());
  colocarDadosNaTela(dados);
  // ele faz com que espere até o servidor responder
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value; // valor que estiver dentro dele
  buscarCidade(cidade);
}
