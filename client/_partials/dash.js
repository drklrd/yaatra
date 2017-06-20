import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './side_bar';
import MapView from './map';
import Header from './header';

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			position : [27.7172, 85.3240],
			markers : []
		}
	}

	handleCoordinates(coordinates,day) {
		let {markers} = this.state;
		markers.push({coordinates : coordinates.location , day})
		this.setState({
			markers
		})

	}

	render() {
		return (
			<div>
				<Header/>
				<div className="col-xs-12 col-sm-12">
					<MapView position={this.state.position} markers={this.state.markers} />
				</div>

				<div className="col-sm-3 side-bar">
					<Sidebar handleCoordinates={this.handleCoordinates.bind(this)}  />
				</div>
			</div>
		)
	}

}
