import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Sidebar from './side_bar';

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			map : null
		}
	}

	componentWillMount() {
		const position = [27.7172, 85.3240];
		const map = this.state.map = (
		  <Map center={position} zoom={13}>
		    <TileLayer
		      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
		      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		    />
		    <Marker position={position}>
		      <Popup>
		        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
		      </Popup>
		    </Marker>
		  </Map>
		);
	}

	render() {
		
		return (
			<div>
				<nav className="navbar navbar-inverse banner navbar-fixed-top">
					<div className="container-fluid">
						<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>                        
								</button>
								<a className="navbar-brand" href="/"> यात्रा </a>
						</div>
						<div className="collapse navbar-collapse" id="myNavbar">
							<ul className="nav navbar-nav navbar-right">
								  <li><a href="#"><span className="glyphicon glyphicon-user"></span> Profile </a></li>
								  <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
							</ul>
						</div>
					</div>
				</nav>

				<div className="col-xs-12 col-sm-12">
					{this.state.map}
				</div>

				<div className="col-sm-3 side-bar">
					
					<Sidebar/>
					
				</div>
		
			</div>
		)
	}

}