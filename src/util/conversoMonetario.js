function MaskReal(valor) {
    if (isNaN(valor)) {
        return 0;
    }
    return Number(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}


function MaskRealPrefixo(valor) {
    if (isNaN(valor)) {
        return 0;
    }
    return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default {
    MaskReal,
    MaskRealPrefixo
}