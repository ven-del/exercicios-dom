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

const mensagensMes = {
    1: "bugado(a)",
    2: "do CTRL C, CTRL V",
    3: "das gambiarras",
    4: "que culpa o cache",
    5: "que esquece o que faz",
    6: "do git vazio",
    7: "das try/ catch vazia",
    8: "famosinho do LinkedIn",
    9: "caçador de bugs",
    10: "do Windows Pirata",
    11: "do update sem where",
    12: "do commit bugado"
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
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectDia.appendChild(option);
    }

    // Exibir mensagem do mês
    const mensagem = mensagensMes[mes];
    document.getElementById("mensagem-mes").textContent = mensagem ? `Este é o mês ${mensagem}` : "";
};

const gerarAnos = () => {
    const selectAno = document.getElementById("ano");
    const anoInicial = 1925;
    const anoFinal = new Date().getFullYear();

    const opcaoPadrao = document.createElement("option");
    opcaoPadrao.value = "";
    opcaoPadrao.text = "Selecione o ano";
    selectAno.appendChild(opcaoPadrao);

    for (let ano = anoInicial; ano <= anoFinal; ano++) {
        const option = document.createElement("option");
        option.value = ano;
        option.textContent = ano;
        selectAno.appendChild(option);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    gerarAnos();

    document.getElementById("ano").addEventListener("change", calcularMes);
    document.getElementById("mes").addEventListener("change", calcularMes);
});
