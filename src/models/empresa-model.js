export default class empresa {
    constructor(obj) {
        obj = obj || {};
        this.emp_id = obj.emp_id ;
        this.emp_datacad = obj.emp_datacad ;
        this.emp_razao = obj.emp_razao ;
        this.emp_fantasia = obj.emp_fantasia ;
        this.emp_cnpj = obj.emp_cnpj ;
        this.emp_insc = obj.emp_insc ;
    }

    validarCadastro() {
        return !! ( this.cli_pessoa && this.cli_nome && this.cli_cpfcnpj)
    }

    validarAlteracao() {
        return !!(this.id && this.cli_cpfcnpj && this.cli_nome) 
    }
}