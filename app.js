const diasMes = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
};

const checkarAnoBissexto = (ano) => {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
};

const calcularMes = () => {
    const mes = Number(document.getElementById("mes").value);
    const ano = Number(document.getElementById("ano").value);

    if (!mes || !ano) return;

    let dias = diasMes[mes];
    if (mes === 2 && checkarAnoBissexto(ano)) {
        dias = 29;
    }

    const selectDia = document.getElementById("dia");
    selectDia.innerHTML = "";

    for (let i = 1; i <= dias; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        selectDia.appendChild(option);
    }
};

// Gera os anos de 1925 a 2025
const gerarAnos = () => {
    const selectAno = document.getElementById("ano");
    const anoInicial = 1925;
    const anoFinal = 2025;

    const opcaoPadrao = document.createElement("option");
    opcaoPadrao.value = "";
    opcaoPadrao.text = "Selecione o ano";
    selectAno.appendChild(opcaoPadrao);

    for (let ano = anoInicial; ano <= anoFinal; ano++) {
        let option = document.createElement("option");
        option.value = ano;
        option.text = ano;
        selectAno.appendChild(option);
    }
};

// Eventos para atualizar os dias quando ano ou mês forem selecionados
document.getElementById("ano").addEventListener("change", calcularMes);
document.getElementById("mes").addEventListener("change", calcularMes);

// Inicia a página gerando os anos
window.onload = gerarAnos;
