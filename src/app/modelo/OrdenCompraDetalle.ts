import { Producto } from "./Producto"
import { OrdenCompra } from "./OrdenCompra"

export class OrdenCompraDetalle {
    codigo:number
    cantidad:number
    observacion:string
    total:number
    ordenCompra:OrdenCompra
    producto:Producto


    constructor(codigo:number, cantidad:number, observacion:string, total:number, ordenCompra:OrdenCompra, producto:Producto) {
        this.codigo = codigo
        this.cantidad = cantidad
        this.observacion = observacion
        this.total = total
        this.ordenCompra = ordenCompra
    }
}