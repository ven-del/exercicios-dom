// CALENDARIO

// *1925 ate 2025
// **meses com 31 dias e 30 dias
// ***anos bissextos


const checkarAnoBissexto = (ano) => {
    ano = Number(document.getElementById("ano").value);
    if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
        return true;
    } else {
        return false;
    }
}

