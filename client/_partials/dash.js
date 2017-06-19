import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './side_bar';
import MapView from './map';
export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			position : [27.7172, 85.3240],
			markers : []
		}
	}

	handleCoordinates(coordinates) {
		console.log('$$$',coordinates);
		let {markers} = this.state;
		markers.push(coordinates.location)
		this.setState({
			markers
		})

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
					<MapView position={this.state.position} markers={this.state.markers} />
				</div>

				<div className="col-sm-3 side-bar">
					<Sidebar handleCoordinates={this.handleCoordinates.bind(this)}  />
				</div>
			</div>
		)
	}

}