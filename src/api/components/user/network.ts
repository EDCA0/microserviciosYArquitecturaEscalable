import express, { Request, Response, Router } from 'express';
import { success } from '../../../network/response';
import { list } from './controller';

export const router: Router = express.Router();

router.get('/', function (request: Request, response: Response) {
	const lista = list();
	success(request, response, lista, 200);
});
