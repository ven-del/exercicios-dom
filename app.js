// CALENDARIO

// *1925 ate 2025
// **meses com 31 dias e 30 dias
// ***anos bissextos

const objetoMeses = {
    1: {
        mes: 'Janeiro',
        dias: 31
    },
    2: {
        mes: 'Fevereiro',
        dias: 28
    },
    3: {
        mes: 'Março',
        dias: 31
    },
    4: {
        mes: 'Abril',
        dias: 30
    },
    5: {
        mes: 'Maio',
        dias: 31
    },
    6: {
        mes: 'Junho',
        dias: 30
    },
    7: {
        mes: 'Julho',
        dias: 31
    },
    8: {
        mes: 'Agosto',
        dias: 31
    },
    9: {
        mes: 'Setembro',
        dias: 30
    },
    10: {
        mes: 'Outubro',
        dias: 31
    },
    11: {
        mes: 'Novembro',
        dias: 30
    },
    12: {
        mes: 'Dezembro',
        dias: 31
    },
}
const gerarValoresDosAnos = () => {
    const ano = document.getElementById('ano');
    ano.innerHTML = '';
    ano.appendChild(new Option("Ano", "ano"));
    for (let i = 1925; i <= 2025; i++) {
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
    if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
        return true;
    } else {
        return false;
    }
}

const gerarValoresDosDias = () => {
    const dia = document.getElementById('dia');
    const mesAtual = Number(document.getElementById('mes').value);
    const anoAtual = Number(document.getElementById('ano').value);
    let quantidadeDias = 0;

    if (objetoMeses[mesAtual]) {
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
}

const atualizarDias = () => {
    gerarValoresDosDias();
};