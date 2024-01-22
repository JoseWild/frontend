import dataAmeriacaPISO from '../utils/conversor-data'
import conversorMoeda from '../utils/mask-moeda'

export default class Produto { 
    constructor(obj){
        obj = obj || {};
        this.prod_id = obj.prod_id;
        this.prod_data = obj.prod_data && dataAmeriacaPISO.dataIso(obj.prod_data) ;
        this.prod_descricao = obj.prod_descricao;
        this.prod_referencia = obj.prod_referencia;
        this.prod_qtd = obj.prod_qtd || 0;
        this.prod_custo = obj.prod_custo && conversorMoeda.maskmoeda(obj.prod_custo);
        this.prod_venda = obj.prod_venda && conversorMoeda.maskmoeda(obj.prod_venda) ;
        this.prod_end = obj.prod_end;
        this.prod_num = obj.prod_num || 0;
        this.prod_obs = obj.prod_obs ;
    } 

    modeloValidoParaCadastro(){
        return !! ( this.prod_descricao )
    }

    modeloValidoParaAtualizar(){
        return !! (this.prod_id && this.prod_descricao)
    }
}