// CALENDARIO

// *1925 ate 2025
// **meses com 31 dias e 30 dias
// ***anos bissextos



const objetoMeses = {
    1: { mes: 'Janeiro', dias: 31 },
    2: { mes: 'Fevereiro', dias: 28 },
    3: { mes: 'Março', dias: 31 },
    4: { mes: 'Abril', dias: 30 },
    5: { mes: 'Maio', dias: 31 },
    6: { mes: 'Junho', dias: 30 },
    7: { mes: 'Julho', dias: 31 },
    8: { mes: 'Agosto', dias: 31 },
    9: { mes: 'Setembro', dias: 30 },
    10: { mes: 'Outubro', dias: 31 },
    11: { mes: 'Novembro', dias: 30 },
    12: { mes: 'Dezembro', dias: 31 },
}

const nomeDevMeses = {
    1: 'Bugado(a)',
    2: 'Do CTRL, CTRL V',
    3: 'Das gambiarras',
    4: 'Que culpa o cache',
    5: 'Que esquece o que faz',
    6: 'Do git vazio',
    7: 'Das try/ catch vazia',
    8: 'Famosinho do LinkedIn',
    9: 'Caçador de bugs',
    10: 'Do Windows Pirata',
    11: 'Do update sem where',
    12: 'Do commit bugado',
};


const gerarValoresDosAnos = () => {
    const ano = document.getElementById('ano');
    ano.innerHTML = '';
    ano.appendChild(new Option("Ano", "ano"));
    for (let i = 2025; i >= 1925; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        ano.appendChild(option);
    }
}

const gerarValoresDosMeses = () => {
    const mes = document.getElementById('mes');
    mes.innerHTML = '';
    mes.appendChild(new Option("Mês", "mes"));
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerHTML = objetoMeses[i].mes;
        mes.appendChild(option);
    }
}

const checarAnoBissexto = (ano) => {
    return (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0));
}

const gerarValoresDosDias = () => {
    const dia = document.getElementById('dia');
    const mesAtual = Number(document.getElementById('mes').value);
    const anoAtual = Number(document.getElementById('ano').value);
    let quantidadeDias = 0;

    const diaSelecionado = dia.value;

    if (isNaN(mesAtual) || mesAtual === 0) {
        quantidadeDias = objetoMeses[1].dias;
    } else {
        quantidadeDias = objetoMeses[mesAtual].dias;
        if (mesAtual === 2 && checarAnoBissexto(anoAtual)) {
            quantidadeDias++;
        }
    }

    dia.innerHTML = '';
    dia.appendChild(new Option("Dia", "dia"));

    for (let i = 1; i <= quantidadeDias; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        dia.appendChild(option);
    }

    if (diaSelecionado && diaSelecionado !== "dia" && Number(diaSelecionado) <= quantidadeDias) {
        dia.value = diaSelecionado;
    }
}

const atualizarDias = () => {
    gerarValoresDosDias();
};

const mostrarDiaDaSemana = () => {
    const diaSelecionado = Number(document.getElementById('dia').value);
    const mesSelecionado = Number(document.getElementById('mes').value) - 1;
    const anoSelecionado = Number(document.getElementById('ano').value);
    const mensagemResultado = document.getElementById('mensagem-resultado');
    const textoResultado = document.getElementById('texto-resultado');

    if (isNaN(diaSelecionado) || isNaN(mesSelecionado) || isNaN(anoSelecionado) ||
        diaSelecionado < 1 || diaSelecionado > 31 || mesSelecionado < 0 || mesSelecionado > 11) {
        textoResultado.innerHTML = "Por favor, selecione uma data válida.";
        return;
    }

    const data = new Date(anoSelecionado, mesSelecionado, diaSelecionado);
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const diaDaSemana = diasDaSemana[data.getDay()];

    mensagemResultado.innerHTML = ""; 
    mensagemResultado.innerHTML = "O dia da semana é:"; 
    textoResultado.innerHTML = ` ${diaDaSemana}`;
};

const descobrirNomeDev = () => {
    const diaSelecionado = Number(document.getElementById('dia').value);
    const mesSelecionado = Number(document.getElementById('mes').value);
    const anoSelecionado = Number(document.getElementById('ano').value);
    const mensagemResultado = document.getElementById("mensagem-resultado");
    const textoResultado = document.getElementById("texto-resultado");

    if (isNaN(diaSelecionado) || isNaN(mesSelecionado) ||
        diaSelecionado < 1 || diaSelecionado > 31 || mesSelecionado < 1 || mesSelecionado > 12) {
        textoResultado.innerHTML = "Por favor, selecione uma data válida.";
        return;
    }

    let primeiraParte = '';
    let segundaParte = '';
    const ultimoDigitoDia = diaSelecionado % 10;
    if (diaSelecionado === 5 && mesSelecionado === 1 && anoSelecionado === 1994){
        primeiraParte = 'Game Dev';
        segundaParte = 'Fã de Linkin Park';
    } else if (diaSelecionado === 13 && mesSelecionado === 10 && anoSelecionado === 1991) {
        primeiraParte = 'We fear';
        segundaParte = 'Nothing';
    }else if (diaSelecionado === 3 && mesSelecionado === 9 && anoSelecionado === 2005){
        primeiraParte = 'Alguém pode me dar uma garrafa de café';
        segundaParte = 'e um pacote de crack? ;-;';
    } else {
        if (ultimoDigitoDia === 1 || ultimoDigitoDia === 2) {
            primeiraParte = 'Desenvolvedor(a)';
        } else if (ultimoDigitoDia === 3 || ultimoDigitoDia === 4 || ultimoDigitoDia === 5) {
            primeiraParte = 'Programador(a)';
        } else if (ultimoDigitoDia === 6 || ultimoDigitoDia === 7 || ultimoDigitoDia === 8) {
            primeiraParte = 'Estagiário(a)';
        } else if (ultimoDigitoDia === 9 || ultimoDigitoDia === 0) {
            primeiraParte = 'Senior';
        }
        segundaParte = nomeDevMeses[mesSelecionado];
    }


    mensagemResultado.innerHTML = "";
    mensagemResultado.innerHTML = "Seu nome de Dev é:";
    textoResultado.innerHTML = ` ${primeiraParte} ${segundaParte}`;
};

const inicializarCalendario = () => {
    gerarValoresDosAnos();
    gerarValoresDosMeses();
    gerarValoresDosDias();
    atualizarDias();
}

document.addEventListener('DOMContentLoaded', inicializarCalendario);