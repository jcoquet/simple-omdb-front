import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="layout">
                {this.props.children && React.cloneElement(this.props.children)}
            </div>
        );
    }
}

export default App;