import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Geosuggest from 'react-geosuggest';

export default class SideBarForm extends React.Component{

	constructor(props) {
		super(props);
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.onSuggestSelect = this.onSuggestSelect.bind(this);
	}

	handleChange(dateType,date){
		var dateToSet = dateType === 'startDate' ? 'startdate' : 'enddate';
		this.setState({
			[dateToSet] : date
		});
	}

	onSuggestSelect(suggest){
		this.setState({
			placeOfVisit : suggest
		});
	}

	handleFormSubmit(){
		this.props.submitAction({
			placeOfVisit : this.state.placeOfVisit.description,
			startDate : moment(this.state.startdate).format('YYYY-MM-DD'),
			endDate : moment(this.state.enddate).format('YYYY-MM-DD'),
			notes : this.refs['notes'].value
		});
	}

	render(){
		return(
			<form name="iteneray-form" onSubmit={this.handleFormSubmit}>
				<div className="row row-spacing ">
					<div className="col-xs-4">
						<span> You travelled to  </span>
					</div>
					<div className="col-xs-8">
						<Geosuggest className="" placeholder="Place name" onSuggestSelect={(suggest)=>{this.onSuggestSelect(suggest)}} required />
					</div>
				</div>
				<div className="row row-spacing ">
					<div className="col-xs-4">
						<span> Start Date </span>
					</div>
					<div className="col-xs-8">
						<DatePicker maxDate={this.state.enddate && moment(this.state.enddate)} ref="start-date" selected={this.state.startdate} placeholderText="Start Date" className="form-control width-100" onChange={(date)=>this.handleChange('startDate',date)} required />
					</div>
				</div>
				<div className="row row-spacing ">
					<div className="col-xs-4">
						<span> End Date </span>
					</div>
					<div className="col-xs-8">
						<DatePicker  minDate={this.state.startdate && moment(this.state.startdate)} ref="end-date" selected={this.state.enddate} placeholderText="End Date" className="form-control width-100" onChange={(date)=>this.handleChange('endDate',date)} required />
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
