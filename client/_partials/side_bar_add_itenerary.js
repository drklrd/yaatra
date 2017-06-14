import React from 'react';

export default class SideBarAddItenerary extends React.Component{

	constructor(){
		super();
		this.state = {
			days : 5,
			currentDay : 1,
			dayObj : []
		};
		this.nextDay = this.nextDay.bind(this);
		this.previousDay = this.previousDay.bind(this);
	}

	clearForm(currentDay){
		var fields = ['startplace_','endplace_','time_'];
		fields.forEach((field)=>{
			this.refs[`${field+currentDay}`].value = null;
		});
	}

	previousDay(){
		if(this.state.currentDay > 1){
			var newDay = this.state.currentDay - 1;
			var dayObj = this.state.dayObj;
			var exits = undefined;
			for(var day=0;day<dayObj.length;day++){
				if(dayObj[day].currentDay === newDay){
					exits = day;
					break;
				}
			}
			if(exits){
				this.refs['startplace_'+this.state.currentDay].value = dayObj[exits].startplace;
				this.refs['endplace_'+this.state.currentDay].value = dayObj[exits].endplace;
				this.refs['time_'+this.state.currentDay].value = dayObj[exits].time;
			}

			this.setState({
				currentDay : newDay
			});
		}
	}

	nextDay(){
		if(this.state.currentDay <= this.state.days){
			var dayObj = this.state.dayObj;
			var newDay = this.state.currentDay + 1;
			var exits = undefined;
			for(var day=0;day<dayObj.length;day++){
				if(dayObj[day].currentDay === newDay){
					exits = day;
					break;
				}
			}

			if(exits){
				dayObj[this.state.currentDay] = dayObj[exits];
			}else{

				dayObj.push({
					currentDay : this.state.currentDay,
					startplace : this.refs['startplace_'+this.state.currentDay].value,
					endplace : this.refs['endplace_'+this.state.currentDay].value,
					time : this.refs['time_'+this.state.currentDay].value
				});
			}

			this.clearForm(this.state.currentDay);
			
			this.setState({
				currentDay : newDay,
				dayObj : dayObj
			});
		}else{
			console.log(this.state.dayObj);
		}
	}

	render(){
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
						<a className="glyphicon glyphicon-menu-left" onClick={this.previousDay}></a> 
						 
					</div>

					<div className="pull-right">
						<a className="glyphicon glyphicon-menu-right" onClick={this.nextDay} ></a> 
					</div>

				</div>
			</div>
		);
	}

}