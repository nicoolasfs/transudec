export class Departamento{
 idDepartamento: number;
 nombre: string;
}
export class Ciudad{
idCiudad: number;
nombre: string;
departamento: {
idDepartamento: number;
nombre: string;
}
}