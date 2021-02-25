import { ApiError } from './errors.helper';
import get from 'lodash/get';
import { CONSTANT_MAIN } from "../constant/main.constant";
import axios from "axios";

/**
 * @helper
 * Validate response code
 * @param response
 */
const transformResponse = (response: any) => {
	if (response.status >= 400) {
		throw new ApiError({ code: response.status, message: response.error_description || response.statusText })
	} else {
		return response.data;
	}
}

interface IReqOptions {
	body?: {[key: string]: any};
	queryParams?: {[key: string]: any};
	headers?: {[key: string]: any};
	method: "get" | "post" | "put" | "patch"
}

/**
 * API Request function
 *
 * @param endpoint {String}
 * @param {IReqOptions} opts
 * @returns {Promise}
 */
const request = (endpoint: string, opts: IReqOptions = {method: "get"}) => {
	const queryParams = opts.queryParams || {};
	const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) };
	const data = opts.body || {};
	return axios({
		url: endpoint,
		method: opts.method,
		headers,
		data,
		params: queryParams,
		baseURL: CONSTANT_MAIN.API_URL
	})
		.then(transformResponse)
		.catch((error: any) => {
			const message = get(error, 'response.body.errors', error.message);
			return Promise.reject(new ApiError({ code: error.status || 500, message }))
		});
}


export {
	request,
}
