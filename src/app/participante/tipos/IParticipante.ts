export interface IParticipante {
    ID: number;
    foto: string;
    Nombre: string;
    Apellido: string;
    Descripcion: string;
    Actividad: string;
    Hora_entrada: string;
    Hora_salida: string;
    Clasificacion: "Básica"|"Premium"|"VIP";
    Estado: "Activo"|"Inactivo";
}