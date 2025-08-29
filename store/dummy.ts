import { Database, TableList, Tables } from './interfaces';

const db: Database = {
	user: [
		{ id: 1, name: 'Carlos' },
		{ id: 2, name: 'Julian' },
	],
};

export function dbList(table: Tables): TableList {
	const tabla = db[table];

	if (!tabla) {
		throw new Error('Error en el proceso');
	}

	return db[table];
}

export function dbGet(tabla: Tables, id: number) {
	const coleccion = dbList(tabla);

	return coleccion.filter((item) => item.id === id)[0];
}

export function dbUpsert(tabla: string, data: any) {
	// db[collection].push(data);
}

export function dbRemove(tabla: string, id: number) {
	return true;
}
