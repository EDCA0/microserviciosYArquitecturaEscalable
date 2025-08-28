import express, { Request, Response, Router } from 'express';
import { success } from '../../../network/response';

export const router: Router = express.Router();

router.get('/', function (request: Request, response: Response) {
	success(request, response, 'Todo correcto', 200);
});
