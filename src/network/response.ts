import type { Request, Response } from 'express';

export const success = function (
	request: Request,
	response: Response,
	message: any,
	status: number,
) {
	const statusCode = status || 200;
	const statusMessage = message || '';

	response.status(statusCode).send({
		error: false,
		status: statusCode,
		body: statusMessage,
	});
};

export const error = function (
	request: Request,
	response: Response,
	message: any,
	status: number,
) {
	const statusCode = status || 500;
	const statusMessage = message || 'Internal server error';

	response.status(statusCode).send({
		error: false,
		status: statusCode,
		body: statusMessage,
	});
};
