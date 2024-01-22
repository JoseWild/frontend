function maskmoeda(valor) {
    if (isNaN(valor)){
        return 0;
    }
     return Number(valor).toLocaleString('pt-BR', {minimumFractionDigits: 2});
}

function maskmoedaprefixo(valor) {
    if (isNaN(valor)){
        return 0;
    }
     return Number(valor).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

export default {
    maskmoeda,
    maskmoedaprefixo
}