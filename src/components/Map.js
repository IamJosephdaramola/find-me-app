import React, { useState, useContext, useEffect, Fragment } from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import mapStyles from '../data/mapStyles';
import Context from '../context/context';

const Map = () => {
	const context = useContext(Context);
	const { latitude, address, getUserAddress, longitude, getLocation } = context;

	const [lng, setLongitude] = useState(-122.463);
	const [lat, setLatitude] = useState(37.7648);
	const [info, setInfo] = useState('San Francisco, US');
	const [modal, setModal] = useState(false);

	useEffect(() => {
		getLocation();
		getUserAddress();
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
						lng,
					}}
					onClick={() => {
						setLatitude(latitude);
						setLongitude(longitude);
						setInfo(address);
						console.log(info);

						setModal(true);
					}}
				/>

				{modal && (
					<InfoWindow
						position={{
							lat,
							lng,
						}}
						onCloseClick={() => {
							setModal(false);
						}}>
						<div>
							<h4>{info ? info : "user's address is unavailable"}</h4>
						</div>
					</InfoWindow>
				)}
			</GoogleMap>
		</Fragment>
	);
};

export default Map;
