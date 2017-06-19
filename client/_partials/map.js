import React from 'react';
import ReactDOM from 'react-dom'
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class MapView extends React.Component{

	componentWillReceiveProps(nextProps) {
		console.log('&&',this.props.markers);
		this.map.fitBounds(this.props.markers)
	}

	componentDidMount() {
		var map = this.map = L.map(ReactDOM.findDOMNode(this.refs['map'])).setView([27.7172, 85.3240], 15);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
	}

	render(){
		return(
			<div>
				<div ref="map" className="map"/>
			</div>
		);
	}
}