import { GET_LOCATION, ERROR, GET_ADDRESS } from './types';

export default (state, action) => {
	switch (action.type) {
		case GET_LOCATION:
			return {
				...state,
				latitude: action.payload.latitude,
				longitude: action.payload.longitude,
				loading: false,
			};
		case GET_ADDRESS:
			return {
				...state,
				address: action.payload.results[0].formatted_address,
			};
		case ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
