export interface Usuario {
    id_usuario: number;
    codi_usuario: number;
    usuario: string;
    password: string;
    nombres: string;
    ape_paterno: string;
    ape_materno: string;
    email: string;
    fecha_creacion: Date;
    fecha_cese: Date;
    imagen: string;
    estado: number;
}
