import React from 'react';
import Geosuggest from 'react-geosuggest';

export default class SideBarAddItenerary extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			days: this.props.travelDays,
			// days : 3,
			currentDay: 1,
			dayObj: []
		};
	}

	clearForm(currentDay) {
		var fields = ['startplace', 'endplace', 'time'];
		fields.forEach((field) => {
			if(this.refs[`${field}`]){
				if(this.refs[`${field}`].clear){
					this.refs[`${field}`].clear();
				}else{
					this.refs[`${field}`].value = null;
				}
			}

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
		if ((nextOrPrevious === 'next' && this.state.currentDay < this.state.days) || (nextOrPrevious === 'previous' && this.state.currentDay > 1)) {
			var fromDay = this.state.currentDay;
			var toDay = nextOrPrevious === 'next' ? this.state.currentDay + 1 : this.state.currentDay - 1;
			var dayObj = this.state.dayObj;
			var currentvalue = {
				currentDay: this.state.currentDay,
				startplace: this.state['startplace_'+this.state.currentDay],
				endplace: this.state['endplace_'+this.state.currentDay],
				time: this.refs['time'].value
			};
			var fromDayExists = this.doDayExists(dayObj, fromDay);
			if (fromDayExists !== undefined) {
				dayObj[fromDayExists] = currentvalue;
			} else {
				dayObj.push(currentvalue);
			}
			var toDayExists = this.doDayExists(dayObj, toDay);
			this.setState({
				currentDay: toDay,
				dayObj: dayObj,
				blink : false
			},function(){
				if (toDayExists !== undefined) {
						if(this.refs['endplace']) this.refs['endplace'].update(dayObj[toDayExists].endplace ? dayObj[toDayExists].endplace.description : "");
						if(this.refs['time']) this.refs['time'].value = dayObj[toDayExists].time;
						if(this.refs['startplace']) this.refs['startplace'].update(dayObj[toDayExists].startplace ? dayObj[toDayExists].startplace.description : "");
				} else {
					this.clearForm(fromDay);
				}
			});
		}else{
			this.setState({
				blink : true
			})
		}
	}

	onSuggestSelect(suggest,point){
		this.setState({
			[point+'_'+this.state.currentDay] : suggest
		});
		this.props.handleCoordinates(suggest,this.state.currentDay);
	}

	render() {
		return(
			<div>
				<h2 className={this.state.blink ? "blink" : ""}>Day {this.state.currentDay}</h2>
				<span className="out-of-days"> of your {this.props.travelDays} day(s) itenerary </span>
				{
					(this.state.currentDay === 1 ) && (<div className="row row-spacing ">
						<div className="col-xs-5">
							<span> {"Starting Point for the day "} </span>
						</div>
						<div className="col-xs-7">
							<Geosuggest country="np" ref={"startplace"}  placeholder="Starting Point" onSuggestSelect={(suggest)=>{this.onSuggestSelect(suggest,'startplace')}} required />
						</div>
					</div>)
				}
				<div className="row row-spacing ">
					<div className="col-xs-5">
						<span> {"Resting Point for the day "} </span>
					</div>
					<div className="col-xs-7">
						<Geosuggest country="np" ref={"endplace"}  placeholder="Resting Point" onSuggestSelect={(suggest)=>{this.onSuggestSelect(suggest,'endplace')}} required />
					</div>
				</div>

				<div className="row row-spacing ">
					<div className="col-xs-5">
						<span> {"Total hours "} </span>
					</div>
					<div className="col-xs-7">
						<input ref={"time"} type="text" placeholder={"Total time"} className="form-control" required/>
					</div>
				</div>
				<br/>
				<div className="row row-margin">
					<div className="pull-left">
						<span className="pointer-cursor text-selection-off " onClick={this.changeDay.bind(this,'previous')}>
							<span className="glyphicon glyphicon-menu-left next-previous-chevron" ></span>
							Previous
						</span>
					</div>
					<div className="pull-right">
						<span className="pointer-cursor text-selection-off " onClick={this.changeDay.bind(this,'next')}>
							Next
							<span className="glyphicon glyphicon-menu-right next-previous-chevron" ></span>
						</span>
					</div>
				</div>
			</div>
		);
	}

}
