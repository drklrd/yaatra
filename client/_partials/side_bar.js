import React from 'react';

export default class Sidebar extends React.Component {

	render(){

		return (
			<div>
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
		);
	}

}