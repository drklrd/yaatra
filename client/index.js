import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                
                <div className="parallax">
                     <div className="content">

                        <div className="col-xs-offset-5 col-xs-6">
                             <button className="nice-buttons">Login</button>
                             <button className="nice-buttons">Sign Up</button>
                        </div>

                    </div>
                    
                </div>
                    
                <div className="mid">
                    <div className="col-xs-offset-3 col-xs-5">
                        बाटो  <br/>
                        उकालो ,ओरालो <br/>
                        र तेर्सो जे भए पनि , <br/> 
                        यात्रा भने सधैं सम्म नै हुने रहेछ

                    </div>

                    <div className="col-xs-2 nice-font">
                        Yaatra
                        <br/>
                            - An itenerary sharing platform.
                    </div>
                    
                </div>

                <div className="parallax">
                   

                </div>
            </div>

        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));