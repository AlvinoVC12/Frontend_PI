export class Usuario {
    codigo:number
    nombre:string
    apellido:string
    dni:string
    usuario:string
    contrasena:string

    constructor(codigo:number, nombre:string, apellido:string, dni:string, usuario:string, contrasena:string) {
        this.codigo = codigo
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.usuario = usuario
        this.contrasena = contrasena
    }
}