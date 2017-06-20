import React from 'react';
import Header from './header';

export default class Home extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                <div className="row col-xs-offset-3 col-xs-9 ">
                    <div className="circle ">
                        15 iteneraries added
                    </div>
                    <div className="col-xs-2"></div>
                    <div className="circle col-xs-3">
                        15 iteneraries favorited
                    </div>
                </div>

            </div>
        );
    }
}
