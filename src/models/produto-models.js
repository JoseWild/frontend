import conversoMonetario from "@/util/conversoMonetario";
import conversorData from "@/util/conversorData";


export default class Produto {
    constructor(obj){
        obj = obj || {};
        this.prod_id         = obj.prod_id;
        this.prod_data       = obj.prod_data && conversorData.MaskDataAmericanaISO(obj.prod_data) ;
        this.prod_descricao  = obj.prod_descricao;
        this.prod_referencia = obj.prod_referencia;
        this.prod_qtd        = obj.prod_qtd || 0;
        this.prod_custo      = conversoMonetario.MaskReal(obj.prod_custo);
        this.prod_venda      = conversoMonetario.MaskReal(obj.prod_venda) ;
        this.prod_end        = obj.prod_end;
        this.prod_num        = obj.prod_num || 0;
        this.prod_obs        = obj.prod_obs ;
    }

    validarCadastro(){
        return !! ( this.prod_descricao && this.prod_custo )
    }

    validarAlteracao(){
        return !! (this.prod_id && this.prod_descricao);
    }
} 