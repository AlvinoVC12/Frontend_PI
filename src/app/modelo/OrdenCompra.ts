import { Proveedor } from "./Proveedor"

export class OrdenCompra {
    codigo:number
    fecha:Date
    proveedor:Proveedor

    constructor(codigo:number,fecha:Date, proveedor:Proveedor) {
        this.codigo = codigo
        this.fecha = fecha
        this.proveedor = proveedor
    }
}