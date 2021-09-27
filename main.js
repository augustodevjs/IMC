const form = document.querySelector('#formulario');
const inputNome = document.querySelector('#nome');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const resultado = document.querySelector('.resultado')
const h2 = document.createElement('h2');
const img = document.createElement('img');
const p = document.createElement('p');
const button = document.querySelector('#button');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = inputNome.value;
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const valueImc = peso / (altura * altura);

    if(!peso) {
        clear();
        const paragrafo = p.innerHTML = ''
        const titulo = h2.innerHTML = ''
        const aviso = alert('Preencha os campos corretamente.');
        return paragrafo, titulo, aviso
    }

    if(!altura) {
        clear();
        const paragrafo = p.innerHTML = ''
        const titulo = h2.innerHTML = ''
        const aviso = alert('Preencha os campos corretamente.');
        return paragrafo, titulo, aviso
    }

    const classificacao = nivelImc(valueImc.toFixed(2),nome);
    showResult(classificacao);
    scroll();
})

function scroll() {
    window.scrollBy(0, 400);
}

function showResult(classificacao) {
    h2.innerHTML = 'Seu resultado';
    p.innerHTML = classificacao;    

    resultado.appendChild(h2);
    resultado.appendChild(p);
}

function clear() {
    p.classList.remove('obesidade-grave');
    p.classList.remove('magreza');
    p.classList.remove('normal');
    p.classList.remove('sobrepeso');
    p.classList.remove('obesidade');
};

function nivelImc(valueImc,nome) {
    if(valueImc < 18.5) {
        clear();
        const classe = p.classList.add('magreza');
        const result = `${info[0].aviso} <b>${nome}</b>, ${info[0].avisoNome} <b>${valueImc}</b> ${info[0].avisoInfo}`;
        return classe, result
    }

    if(valueImc >= 18.5 && valueImc < 24.9) { 
        clear();
        const classe = p.classList.add('normal');
        const result = `${info[1].aviso} <b>${nome}</b>, ${info[1].avisoNome} <b>${valueImc}</b> ${info[1].avisoInfo}`;
        return classe, result
    }

    if(valueImc >= 25 && valueImc < 29.9) { 
        clear();
        const classe = p.classList.add('sobrepeso');
        const result = `${info[2].aviso} <b>${nome}</b>, ${info[2].avisoNome} <b>${valueImc}</b> ${info[2].avisoInfo}`;
        return classe, result
    }
    
    if(valueImc >= 30 && valueImc < 39.9) { 
        clear();
        const classe = p.classList.add('obesidade');
        const result = `${info[3].aviso} <b>${nome}</b>, ${info[3].avisoNome} <b>${valueImc}</b> ${info[3].avisoInfo}`;
        return classe, result
    }

    if(valueImc > 40) {   
        clear();
        const classe = p.classList.add('obesidade-grave');
        const result = `${info[4].aviso} <b>${nome}</b>, ${info[4].avisoNome} <b>${valueImc}</b> ${info[4].avisoInfo}`; 
        return classe, result 
    } 
};