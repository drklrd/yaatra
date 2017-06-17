import React from 'react';
import SideBarForm from './side_bar_form';
import SideBarAdd from './side_bar_add_itenerary';
import moment from 'moment';

export default class Sidebar extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			opened : true,
			sideBarElement : 'form'
		}
		this.toggleSideBar = this.toggleSideBar.bind(this);
		this.startAddingItenerary = this.startAddingItenerary.bind(this);
	}

	toggleSideBar(){
		var barStatus = this.state.opened;
		this.setState({
			opened : !barStatus
		})
	}

	startAddingItenerary(iteneraryObj){
		var start = moment(iteneraryObj.startDate);
		var end = moment(iteneraryObj.endDate);
		this.setState({
			sideBarElement : 'add',
			travelDays :  Math.abs(start.diff(end,'days'))+1
		})

	}

	render(){
		return (
			<div>
				<div>
					<div>
						<div className="panel-heading">
							<h4 className="panel-title"> 
								Add itenerary &nbsp;
								<a className="pull-right"  onClick={this.toggleSideBar} data-toggle="collapse" href="#collapse1"> <span className={ this.state.opened ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down blink" }></span> </a>
							</h4>
						</div>
					</div>
				</div>
				<div id="collapse1" className="panel-collapse collapse in">
					<hr/>
					{this.state.sideBarElement === 'form' &&  <SideBarForm submitAction={this.startAddingItenerary.bind(this)} />}
					{this.state.sideBarElement === 'add' &&  <SideBarAdd travelDays={this.state.travelDays} />}
					<br/>
				</div>
			</div>
		);
	}
}