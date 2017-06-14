import React from 'react';

export default class SideBarForm extends React.Component{

	render(){

		return(
			<form name="iteneray-form" onSubmit={this.startAddingItenerary}>
				<div className="row row-spacing ">
					<div className="col-xs-4">
						<span> Place of visit </span>
					</div>
					<div className="col-xs-8">
						<input ref="place-of-visit" type="text" placeholder="Place of visit"  className="form-control" required />
					</div>
				</div>
				<div className="row row-spacing ">
					<div className="col-xs-4">
						<span> Start Date </span>
					</div>
					<div className="col-xs-8">
						<input ref="start-date" type="date" placeholder="Start Date" className="form-control" required />
					</div>
				</div>
				<div className="row row-spacing ">
					<div className="col-xs-4">
						<span> End Date </span>
					</div>
					<div className="col-xs-8">
						<input ref="end-date" type="date" placeholder="End Date" className="form-control" required />
					</div>
				</div>
				<div className="row row-spacing ">
					<div className="col-xs-4">
						<span> Any Notes </span>
					</div>
					<div className="col-xs-8">
						<textarea ref="notes" placeholder="You can write any notes here." className="form-control" />
					</div>
				</div>
				<div className="row row-spacing ">
					<div className="col-xs-offset-4">
						<button type="submit" className="btn btn-primary">  Start Adding Itenerary </button>
					</div>
				</div>
			</form>
		);
	}
}