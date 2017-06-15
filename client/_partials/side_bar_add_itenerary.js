import React from 'react';

export default class SideBarAddItenerary extends React.Component {

	constructor() {
		super();
		this.state = {
			days: 5,
			currentDay: 1,
			dayObj: []
		};
	}

	clearForm(currentDay) {
		var fields = ['startplace_', 'endplace_', 'time_'];
		fields.forEach((field) => {
			this.refs[`${field+currentDay}`].value = null;
		});
	}

	doDayExists(dayObj, checkAgainst) {
		var exits = undefined;
		for (var day = 0; day < dayObj.length; day++) {
			if (dayObj[day].currentDay === checkAgainst) {
				exits = day;
				break;
			}
		}
		return exits;
	}

	changeDay(nextOrPrevious) {

		if ((nextOrPrevious === 'next' && this.state.currentDay <= this.state.days) || (nextOrPrevious === 'previous' && this.state.currentDay > 1)) {
			var fromDay = this.state.currentDay;
			var toDay = nextOrPrevious === 'next' ? this.state.currentDay + 1 : this.state.currentDay - 1;
			var dayObj = this.state.dayObj;
			var currentvalue = {
				currentDay: this.state.currentDay,
				startplace: this.refs['startplace_' + fromDay].value,
				endplace: this.refs['endplace_' + fromDay].value,
				time: this.refs['time_' + fromDay].value
			};
			var fromDayExists = this.doDayExists(dayObj, fromDay);
			if (fromDayExists !== undefined) {
				dayObj[fromDayExists] = currentvalue;
			} else {
				dayObj.push(currentvalue);
			}
			var toDayExists = this.doDayExists(dayObj, toDay);
			if (toDayExists !== undefined) {
				this.refs['startplace_' + fromDay].value = dayObj[toDayExists].startplace;
				this.refs['endplace_' + fromDay].value = dayObj[toDayExists].endplace;
				this.refs['time_' + fromDay].value = dayObj[toDayExists].time;
			} else {
				this.clearForm(fromDay);
			}

			this.setState({
				currentDay: toDay,
				dayObj: dayObj
			});
		}
	}


	render() {
		return(
			<div>
				<strong>Day {this.state.currentDay}</strong>
				<div className="row row-spacing ">
					<div className="col-xs-4">
						<span> Start Point </span>
					</div>
					<div className="col-xs-8">
						<input ref={"startplace_"+this.state.currentDay} type="text" placeholder="Name of starting place" className="form-control" required/>
					</div>
				</div>

				<div className="row row-spacing ">
					<div className="col-xs-4">
						<span> End Point </span>
					</div>
					<div className="col-xs-8">
						<input ref={"endplace_"+this.state.currentDay} type="text" placeholder="Name of ending place" className="form-control" required/>
					</div>
				</div>

				<div className="row row-spacing ">
					<div className="col-xs-4">
						<span> Total time (in hours) </span>
					</div>
					<div className="col-xs-8">
						<input ref={"time_"+this.state.currentDay} type="text" placeholder="Total time" className="form-control" required/>
					</div>
				</div>

				<br/>
				

				<div className="row row-margin">

					<div className="pull-left">
						<a className="glyphicon glyphicon-menu-left" onClick={this.changeDay.bind(this,'previous')}></a> 
						 
					</div>

					<div className="pull-right">
						<a className="glyphicon glyphicon-menu-right" onClick={this.changeDay.bind(this,'next')} ></a> 
					</div>

				</div>
			</div>
		);
	}

}