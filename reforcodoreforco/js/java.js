const input = document.querySelector('input[name="cep"]');
const button = document.querySelector('#btn');
const result = document.querySelector('.infos');


button.addEventListener('click', async event =>{// async asincrono ou seja ele só vai parar quando ele retornar um resultado
const response = await fetch(`http://cleantech.ga/cep/${input.value}`)// use crase e nao aspas
//event.preventDefault();
console.log(response);
// await é quando vc mostra no sistema o que vc ta esperando nesse caso é o response
//const dados = await response.json();
const {cidade, estado, bairro, logradouro} = await response.json();
console.log(cidade);
result.innerHTML = `
<p>Logradouro: ${logradouro}</p>
<p>Bairro: ${bairro}</p>
<p>Cidade: ${cidade}</p>
<p>Estado: ${estado}</p>`

document.querySelector('#load').innerHTML = ''
//console.log(dados.cidade)
})// add event lister addicionar um escultador, ou seja pra cada circunstancia ele execulta algo7


