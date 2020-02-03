const input = document.querySelector('input[nome="real"]');
const button = document.querySelector('#btn');
const result = document.querySelector('.infos');


button.addEventListener('click', async event =>{
    const response = await fetch(`http://economia.awesomeapi.com.br/json/USD-BRL`)
    console.log(response);
    const dados = await response.json();
    console.log(dados[0].high);
     const conversor = dados[0].high * `${input.value}`
    console.log(conversor)

result.innerHTML = `<p>Dolar:${conversor}</p>`

document.querySelector('#load').innerHTML = ''
})