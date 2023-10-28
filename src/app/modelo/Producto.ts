import { Categoria } from "./Categoria"

export class Producto {
    codigo:number
    nombre:string
    precio:number
    stock:number
    categoria:Categoria

    constructor(codigo:number, nombre:string, precio:number, stock:number, categoria:Categoria) {
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.categoria = categoria
    }
}