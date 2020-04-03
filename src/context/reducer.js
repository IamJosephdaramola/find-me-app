import { GET_LOCATION, ERROR } from './types';

export default (state, action) => {
	switch (action.type) {
		case GET_LOCATION:
			return {
				...state,
				latitude: action.payload.latitude,
				longitude: action.payload.longitude,
				loading: false
			};
		case ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
