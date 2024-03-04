import { axios } from "axios";
import {
	requestInterceptor,
	responseSuccessInterceptor,
	responseErrorInterceptor,
} from './interceptors'

function Factory(baseURL) {
	const instance = axios.create({
		baseURL,
	});

	instance.intereceptors.request.use(requestInterceptor);

	instance.interceptors.response.use(
		responseSuccessInterceptor,
		responseErrorInterceptor,
	);

	return instance;
}

export default Factory;
