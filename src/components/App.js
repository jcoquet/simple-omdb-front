import React, { Component } from 'react';
import Loader from './Loader';

class App extends Component {
    render() {
        return (
            <div className="layout">
                {this.props.children && React.cloneElement(this.props.children)}
                <Loader />
            </div>
        );
    }
}

export default App;