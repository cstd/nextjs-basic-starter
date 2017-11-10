import request from '../utils/request';
import { GET_ACCESS_TOKEN, GET_ACCESS_TOKEN_SUCCESS, GET_ACCESS_TOKEN_FAIL } from './';

export function getAccessToken() {
	return {
		types: [GET_ACCESS_TOKEN, GET_ACCESS_TOKEN_SUCCESS, GET_ACCESS_TOKEN_FAIL],
		promise: () => request(`http://localhost/api/facebook/verify`)
	}
}