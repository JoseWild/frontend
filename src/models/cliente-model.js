export default class Cliente {
    constructor(obj){
        obj = obj || {};
        this.cli_id = obj.cli_id;
        this.cli_datacad = obj.cli_datacad;
        this.cli_datanasc = obj.cli_datanasc ;
        this.cli_pessoa = obj.cli_pessoa ;
        this.cli_nome = obj.cli_nome ;
        this.cli_cpfcnpj = obj.cli_cpfcnpj ;
        this.cli_ciinsc = obj.cli_ciinsc ;
    }

    validarCadastro() {
        return !! ( this.cli_pessoa && this.cli_nome && this.cli_cpfcnpj)
    }

    validarAlteracao() {
        return !!(this.id && this.cli_cpfcnpj && this.cli_nome) 
    }
}