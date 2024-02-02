export default class ClienteTelefones {
    constrctor(obj) {
        obj = obj || {} ;
        this.cli_contato  = obj.cli_contato ;
        this.cli_telefone = obj.cli_telefone ;
        this.cli_id       = obj.cli_id ;
    }
}