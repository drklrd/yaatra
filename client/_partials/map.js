import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class MapView extends React.Component{

	render(){

		return(

			<Map center={[27.7172, 85.3240]} zoom={13}>
			  <TileLayer
			    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
			    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			  />
			  <Marker position={[27.7172, 85.3240]}>
			    <Popup>
			      <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
			    </Popup>
			  </Marker>
			</Map>

		);
	}

}