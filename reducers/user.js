import { GET_ACCESS_TOKEN, GET_ACCESS_TOKEN_SUCCESS, GET_ACCESS_TOKEN_FAIL } from '../actions';

const initialState = {
	accessToken: null,
}

export default function(state = {}, action) {
	const { type, result } = action;

	switch (type) {
		case GET_ACCESS_TOKEN:
			console.log(GET_ACCESS_TOKEN, result);
			
			return {
				...state,
			};
		case GET_ACCESS_TOKEN_SUCCESS:
			console.log(GET_ACCESS_TOKEN_SUCCESS, result);
			
			return {
				...state,
			};
		case GET_ACCESS_TOKEN_FAIL:
			console.log(GET_ACCESS_TOKEN_FAIL, result);
			
			return {
				...state,
			};
		default:
			return state;
	}
}
