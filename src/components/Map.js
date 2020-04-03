import React, { useState, useContext, useEffect, Fragment } from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import mapStyles from '../data/mapStyles';
import Context from '../context/context';

const Map = () => {
	const context = useContext(Context);
	const { latitude, longitude, getLocation } = context;

	const [lng, setLongitude] = useState(-122.463);
	const [lat, setLatitude] = useState(37.7648);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		getLocation();
		return () => {
			setLatitude(latitude);
			setLongitude(longitude);
		};
		// eslint-disable-next-line
	}, [latitude, longitude]);

	return (
		<Fragment>
			<GoogleMap
				defaultZoom={10}
				defaultCenter={{ lat: lat, lng: lng }}
				defaultOptions={{ styles: mapStyles }}>
				<Marker
					position={{
						lat,
						lng
					}}
					onClick={() => {
						setLatitude(latitude);
						setLongitude(longitude);
						setModal(true);
					}}
				/>

				{modal && (
					<InfoWindow
						position={{
							lat,
							lng
						}}
						onCloseClick={() => {
							setModal(false);
						}}>
						<div>
							<h4>This should display the user's address</h4>
						</div>
					</InfoWindow>
				)}
			</GoogleMap>
		</Fragment>
	);
};

export default Map;
