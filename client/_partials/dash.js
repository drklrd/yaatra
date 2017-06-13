import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


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
					
					<div>
						<div>
							<div className="panel-heading">
								<h4 className="panel-title"> 
									Add new itenerary 
									<a className="pull-right"  data-toggle="collapse" href="#collapse1"> Toggle </a>
								</h4>
							</div>
						</div>

					</div>

					<div id="collapse1" className="panel-collapse collapse in">

						<hr/>
						<div className="row row-spacing ">
							<div className="col-xs-4">
								<span> Place of visit </span>
							</div>
							<div className="col-xs-8">
								<input type="text" placeholder="Place of visit"  className="form-control" />
							</div>
						</div>
						<div className="row row-spacing ">
							<div className="col-xs-4">
								<span> Start Date </span>
							</div>
							<div className="col-xs-8">
								<input type="date" placeholder="Start Date" className="form-control" />
							</div>
						</div>
						<div className="row row-spacing ">
							<div className="col-xs-4">
								<span> End Date </span>
							</div>
							<div className="col-xs-8">
								<input type="date" placeholder="Start Date" className="form-control" />
							</div>
						</div>
						<div className="row row-spacing ">
							<div className="col-xs-4">
								<span> Any Notes </span>
							</div>
							<div className="col-xs-8">
								<textarea  placeholder="You can write any notes here." className="form-control" />
							</div>
						</div>
						<div className="row row-spacing ">
							<div className="col-xs-offset-4">
								<button className="btn btn-primary">  Start Adding Itenerary </button>
							</div>
						</div>
						<br/>

					</div>
					
				</div>
		
			</div>
		)
	}

}