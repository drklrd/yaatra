import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <div>
                
                <div className="parallax">
                     <div className="content">

                        <div className=" col-xs-12">
                             
                                <Link to="/dashboard">
                                    <button className="nice-buttons pull-right">
                                        Login
                                    </button>
                                </Link>
                             
                             <button className="nice-buttons pull-right">Sign Up</button>
                        </div>

                    </div>
                    
                </div>
                    
                <div className="mid">
                    <div className=" col-xs-offset-3 col-xs-5">
                        बाटो  <br/>
                        उकालो ,ओरालो <br/>
                        र तेर्सो जे भए पनि , <br/> 
                        यात्रा भने सधैं सम्म नै हुने रहेछ

                    </div>

                    <div className="col-xs-2 nice-font ">
                        Yaatra
                        <br/>
                            <span className="tagline"> An itenerary sharing platform.  </span> 
                    </div>
                    
                </div>

                <div className="parallax">
                   

                </div>
            </div>

        )
    }

}