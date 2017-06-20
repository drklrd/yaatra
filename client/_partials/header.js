import React from 'react';

export default class Header extends React.Component{

    render(){
        return(
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

        );
    }
}
