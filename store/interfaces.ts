// Define la interfaz para los usuarios
export interface User {
	id: number;
	name: string;
}

// Define la interfaz para el objeto de la base de datos completa
export interface Database {
	user: User[];
}

export type Tables = keyof Database;
export type TableList = Database[keyof Database];
