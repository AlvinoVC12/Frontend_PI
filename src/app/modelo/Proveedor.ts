export class Proveedor {
    codigo:number
    nombre:string
    direccion:string
    contacto:number
    fechaRegistro:Date

    constructor(codigo:number, nombre:string, direccion:string, contacto:number, fechaRegistro:Date) {
        this.codigo = codigo
        this.nombre = nombre
        this.direccion = direccion
        this.contacto = contacto
        this.fechaRegistro = fechaRegistro
    }
}