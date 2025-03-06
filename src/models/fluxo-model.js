import conversorData from "@/util/conversorData";
import conversoMonetario from "@/util/conversoMonetario";


export default class Fluxo {
    constructor(obj) {
        obj = obj || {};
        this.flux_id = obj.flux_id ;
        this.flux_datacad = conversorData.MaskDataAmericanaISO(obj.flux_datacad);
        this.flux_tipo = obj.flux_tipo ;
        this.flux_categoria = obj.flux_categoria ;
        this.flux_complemento = obj.flux_complemento ;
        this.flux_valor = conversoMonetario.MaskReal(obj.flux_valor);
    }

    validarCadastro() {
        return !! ( this.flux_datacad &&
                    this.flux_tipo &&
                    this.flux_categoria &&
                    this.flux_complemento &&
                    this.flux_valor)
    }

    atualizarFluxo() {
        return !! ( this.flux_datacad &&
                    this.flux_tipo &&
                    this.flux_categoria &&
                    this.flux_complemento &&
                    this.flux_valor
        )
    }

}   