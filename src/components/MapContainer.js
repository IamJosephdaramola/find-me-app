import React from 'react';
import { withScriptjs, withGoogleMap } from 'react-google-maps';

import Map from './Map';

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapContainer = () => {
	return (
		<div className='map'>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API}`}
				loadingElement={<div className='loading-element' />}
				containerElement={<div className='container-element' />}
				mapElement={<div className='map-element' />}
			/>
		</div>
	);
};

export default MapContainer;
