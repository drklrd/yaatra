import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>

        )
    }

}