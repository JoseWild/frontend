export default class ClienteEnderecos {
    constructor(obj) {
        obj = obj || {} ;
        this.end_cep    = obj.end_cep;
        this.end_rua    = obj.end_rua ;
        this.end_num    = obj.end_num ;
        this.end_bairro = obj.end_bairro ;
        this.end_cidade = obj.end_cidade ;
        this.end_uf     = obj.end_uf ;
        this.cli_id     = obj.cli_id ;
    }
}