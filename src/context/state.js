import React, { useReducer } from 'react';
import Context from './context';
import Reducer from './reducer';
import { GET_LOCATION, ERROR } from './types';

const State = props => {
	const initialState = {
		latitude: 37.7648,
		longitude: -122.463,
		error: null
	};
	const [state, dispatch] = useReducer(Reducer, initialState);

	const getLocation = () => {
		try {
			navigator.geolocation.getCurrentPosition(position => {
				dispatch({
					type: GET_LOCATION,
					payload: position.coords
				});
			}, handleError);
		} catch (err) {
			dispatch({
				type: ERROR,
				payload: err.response.msg
			});
		}
	};

	// const getUserAddress = async () => {
	// 	try {
	// 		const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
	// 		const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${state.latitude},${state.longitude}&sensor=false&key=${process.env.REACT_APP_GOOGLE_API}`;

	// 		const response = await fetch(proxyUrl + url);
	// 		const data = await response.json();
	// 		console.log(data);

	// 		dispatch({
	// 			type: GET_ADDRESS,
	// 			payload: data
	// 		});
	// 	} catch (err) {
	// 		dispatch({
	// 			type: ERROR,
	// 			payload: err
	// 		});
	// 	}
	// };

	const handleError = error => {
		switch (error.code) {
			case error.PERMISSION_DENIED:
				alert('User denied the request for Geolocation.');
				break;
			case error.POSITION_UNAVAILABLE:
				alert('Location information is unavailable.');
				break;
			case error.TIMEOUT:
				alert('The request to get user location timed out.');
				break;
			case error.UNKNOWN_ERROR:
				alert('An unknown error occurred.');
				break;
			default:
				alert('An unknown error occurred');
		}
	};

	return (
		<Context.Provider
			value={{
				longitude: state.longitude,
				latitude: state.latitude,
				address: state.address,
				error: state.error,
				getLocation
			}}>
			{props.children}
		</Context.Provider>
	);
};

export default State;
