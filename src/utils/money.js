function formatarParaReal(valor){
    return Number(valor).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
}

export default formatarParaReal;

