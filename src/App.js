import React from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<div>
			<NavBar />
			<MapContainer />
		</div>
	);
};

export default App;
