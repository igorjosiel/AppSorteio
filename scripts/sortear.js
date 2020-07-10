var input = document.querySelector('input');
var btnAdd = document.getElementById('btnAdd');
var btnSortear = document.getElementById('btnSortear');
var btnPararSorteio = document.getElementById('btnPararSorteio');
var inputReadOnly = document.getElementById('inputReadOnly');
var myVar;
var numAleatorio;

var listaValores = new Array();


btnAdd.addEventListener('click', addElemento);
btnSortear.addEventListener('click', inicioSorteio);
btnPararSorteio.addEventListener('click', pararSorteio);

input.addEventListener('keyup', function(event){
	if (event.keyCode === 13) addElemento();
});

function addElemento()
{
	let valor = input.value;

	if (valor !== '')
	{
		listaValores.push(valor);

		limparCampo();
	}
	else alert('Campo vazio, digite alguma coisa!');
}

function inicioSorteio()
{
	myVar = setInterval(sortear, 1000);
}

function limparCampo()
{
	input.value = '';
}

function sortear()
{
	numAleatorio = getRandom(listaValores.length);
}

function pararSorteio()
{
	clearInterval(myVar);

	for (let i = 0; i < listaValores.length; i ++)
	{
		if (numAleatorio === i)
		{
			inputReadOnly.value = listaValores[i];
		}
	}

	limparCampo();
}

function getRandom(max)
{
    return Math.floor(Math.random() * max);
}