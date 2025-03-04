import conversorData from "@/util/conversorData";


export default class empresa {
    constructor(obj) {
        obj = obj || {};
        this.emp_id = obj.emp_id ;
        this.emp_datacad = obj.emp_datacad && conversorData.MaskDataAmericanaISO;
        this.emp_razao = obj.emp_razao ;
        this.emp_fantasia = obj.emp_fantasia ;
        this.emp_cnpj = obj.emp_cnpj ;
        this.emp_insc = obj.emp_insc ;
    }

    validarCadastro() {
        return !! ( this.emp_razao && this.emp_cnpj && this.emp_insc)
    }

    validarAlteracao() {
        return !!(this.id && this.emp_razao && this.emp_cnpj && this.emp_insc) 
    }
}