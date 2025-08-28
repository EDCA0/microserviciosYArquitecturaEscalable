import 'dotenv/config';
import app from './app';

async function main() {
	try {
		const port: Number = Number(process.env.PORT) || 3000;

		app.listen(port, () => {
			console.log('Servidor escuchando en el puerto ', port);
		});
	} catch (error) {
		console.error('Error al conectar a la base de datos: ', error);
	}
}
main();
