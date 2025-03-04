// import conversorData from "@/util/conversorData";

export default class Fluxo {
    constructor(obj) {
        obj = obj || {};
        this.flux_datacad = obj.flux_datacad;
        this.flux_tipo = obj.flux_tipo ;
        this.flux_categoria = obj.flux_categoria ;
        this.flux_complemento = obj.flux_complemento ;
        this.flux_valor = obj.flux_valor ;
    }
}   